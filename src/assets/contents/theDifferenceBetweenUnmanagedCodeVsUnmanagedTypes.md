# What is managed/unmanaged code?
TODO: Fill in

## What is managed/unmanaged types?
Similarly to managed and unmanaged code, managed type is a type that is managed by a garbage collector. Meaning, that when some variable is initialized and is part of some class it will contain a reference that later after the reference is no longer used, the garbage collector will need to release the allocated memory from the heap. However, if the type is unmanaged (GC cannot track it) the GC will not be able to do anything to it, because it does not have to. Since, the unmanaged type (e.g. int, double) **will be destroyed** after it goes out of scope from the stack.

We can also have structs that are unmanaged, however all of the struct properties also must be unmanaged.

**[Source](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/unmanaged-types)**