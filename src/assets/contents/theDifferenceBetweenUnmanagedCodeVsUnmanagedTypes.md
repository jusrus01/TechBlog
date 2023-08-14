# What is managed/unmanaged code?
Managed code is executed by CLR after the managed code get's compiled to CIL. Unmanaged Code is compiled directly to native code, which is executed by the Operating System.

Some examples of how unmanaged code can be used. First one is **platform invocation**. You are able to call functions from DDLs or SO files:
```csharp
using System.Runtime.InteropServices;  
  
class Program  
{  
    [DllImport("user32.dll")]  
    static extern void MessageBox(int hWnd, string text, string caption, int type);  
  
    static void Main()  
    {  
        MessageBox(0, "Hello World!", "Message Box", 0);  
    }  
} 
```
[Source](https://www.javatpoint.com/unmanaged-code-in-c-sharp#:~:text=Managed%20code%20is%20executed%20within,then%20executed%20by%20the%20CLR.)

There are also unsafe code blocks, that can be used to write code that is outside of CLR control, meaning that you are able
manage memory yourself and ect.


# What is managed/unmanaged types?
Similarly to managed and unmanaged code, managed type is a type that is managed by a garbage collector. Meaning, that when some variable is initialized and is part of some class it will contain a reference that later after the reference is no longer used, the garbage collector will need to release the allocated memory from the heap. However, if the type is unmanaged (GC cannot track it) the GC will not be able to do anything to it, because it does not have to. Since, the unmanaged type (e.g. int, double) **will be destroyed** after it goes out of scope from the stack.

We can also have structs that are unmanaged, however all of the struct properties also must be unmanaged.

[Source](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/unmanaged-types)