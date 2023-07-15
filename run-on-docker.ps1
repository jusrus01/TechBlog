docker build -t angular-nginx .
docker run --rm -it -p 8080:80 angular-nginx