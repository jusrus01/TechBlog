# Tips & Tricks
## Delete unused images
*Good for saving space and avoid hard drive being filled up.* Most of the time image rebuild will create a **dangling image**,
which will take up space. We can use this command to remove such images, while only keeping the latest ones:
```bash
docker image prune
```
**Sample script** for building and removing unused image:
```bash
docker build -t [tag-name] [docker-file-path]
docker image prune
docker run --rm -it -p [port-mapping] [container]
```

## Using bind mounts
*In order for this to work we need a tool that can detect and restart our application
when something changes.*

```
docker run -it --mount "type=bind,src=$pwd,target=/src" ubuntu bash
```
The --mount option tells Docker to create a bind mount, where src is the current working directory on your host machine (getting-started-app), and target is where that directory should appear inside the container (/src).

[Source](https://docs.docker.com/get-started/06_bind_mounts/)

### Using bind mount for Angular

### Using bind mount for .NET

### Integrating Docker for seamless development environment with Rider/Visual Studio
#### Single Container
##### Set up
##### Debugging

### References
- [Bind mounts](https://docs.docker.com/storage/bind-mounts/)
- [Use bind mounts](https://docs.docker.com/get-started/06_bind_mounts/)
- [Removing docker images](https://www.freecodecamp.org/news/how-to-remove-images-in-docker/#:~:text=By%20running%20simple%20command%20docker,all%20the%20images%20and%20check.)