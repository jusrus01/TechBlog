# Async programming

Main idea with **Task** based programming is this: everything executes on the same thread (unless you call *Task.Run()* to specify that the task execution should be on the different thread) until you encounted ```await``` keyword. **await** will mark the method to be processed by another thread and the main thread will continue execution of other code (need to think in terms of o other methods and not in the single flow, since when you're thingking of the sing fflow then it does not make sense). The real benefits start to show themselves
when you have different levels of ```await``` usage.

How it works:
*Say, we have Method1Async() and Method2Async() that will be used in the main thread (main idea that the executing thread will die then it will encounter an await on it's call stack (if it
is deeper, then it will not encounter end-of-life))*

- Main thread start on thread 1
- Main thread starts Method1Async(), but does not await, then thread 1 will execute Method1Async() until it encounters await
- Main thread encounters await Method1Async()
- Main thread leaves the rest of the job Method1Async() to another thread in the thread pool
- Main thread starts Method2Async(), but does not await, then thread 1 will execute Method2Async() until it encounters await
- Main thread leaves the rest of the job Method2Async() to another thread in the thread pool
- Main thread does some stuff
- Main thread awais Method1Async(), main thread dies, leaves job to another thread from the thread pool
- Await of method Method1Async() ended, main thread is dead, new thread now in action
- New thread awaits Method2Async() and dies, allows other thread to compllete the job
- Other thread returns

This whole idea does not "shine" when you are awaiting everything from the main thread in the same call stack position (from my understannding)
- Main thread starts and imdiatelly awaits
- Main thread dies (main thread no longer has other jobs)
- Gg wp

It is possbile to implement this in this manner to not block UI (probably better stuff exists, and most likely async delegate is better, since I can await in another place)
```csharp
var execute = false;
var count = 100000000;
var c = 0;

Task task = null;

while (true)
{
    if (c > count)
    {
        Console.WriteLine($"Doing stuff, {Thread.CurrentThread.ManagedThreadId}");
        c = 0;

        // some action trigger
        if (true)
        {
            // if we do await - it will block,
            // need to send as event?

            if (task == null)
            {
                task = DoMoreStuffAsync();
            }
            else
            {
                if (task.IsCompleted)
                {
                    task = null;
                }
            }

            execute = false;
        }
    }

    c++;
}

async Task DoMoreStuffAsync()
{
    Console.WriteLine($"Start doing more stuff, {Thread.CurrentThread.ManagedThreadId}");
    await Task.Delay(6000);
    Console.WriteLine($"End doing more stuff, {Thread.CurrentThread.ManagedThreadId}");
}
```

Here are two questions you should ask before you write any code:
- Will your code be "waiting" for something, such as data from a database?
If your answer is "yes", then your work is I/O-bound.

- Will your code be performing an expensive computation?
If you answered "yes", then your work is CPU-bound.

These are important, if you are CPU bound, then using Task.Run() might be a good idea, since it will prevent code execution until await.

"Additionally, you should always measure the execution of your code. For example, you may find yourself in a situation where your CPU-bound work is not costly enough compared with the overhead of context switches when multithreading. Every choice has its tradeoff, and you should pick the correct tradeoff for your situation."
I/O bound probably will not need Task.Run



### References:
- [Async programming](https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/async-scenarios)