# full-cycle-docker-challenges

Full Cycle - Docker challenges

## Challenge 1 - Container GO

Inside the directory ./challenge-1 :

Create container

```
docker build . -t huelbertrodrigo/full-cycle-docker-challenge-1:latest
```

Send container

```
docker push huelbertrodrigo/full-cycle-docker-challenge-1:latest
```

Execute container

```
docker run --rm huelbertrodrigo/full-cycle-docker-challenge-1:latest
```

### Tips

This challenge is very exciting especially if you have never worked with the Go language!
You will have to publish an image to docker hub. When we run:

docker run <your-user>/full-cycle-rocks

We should have the following result: Full Cycle Rocks!

If you notice, this image just prints the message as a final result, so it's worth checking out the Go Lang website to learn how to make a "hello world".

Remembering that Go Lang has official images ready, it is worth checking the Docker Hub.

3. The image of our Go project needs to be less than 2MB =)

Tip: In the intro video about Docker when we talk about the layered file system, I present a "root" image, maybe it's a good one to use.

## Challenge 2 - Nginx with Node.js

Inside the directory ./challenge-2 :

Docker compose UP

```
docker-compose up -d --build
```

Docker compose DOWN

```
docker-compose down
```

### Tips

In this challenge you will put into practice what we learned about using nginx as a reverse proxy. The main idea is that when a user accesses nginx, it will make a call in our node.js application. This application in turn will add a record in our mysql database, registering a name in the people table.

The node.js application return to nginx should be:

</p>

<p>&lt;h1&gt;Full Cycle Rocks!&lt;/h1&gt;</p>

<p>

</p>

<p>- List of names registered in the database.</p>

<p>

Generate docker-compose in a way that we just run: docker-compose up -d and everything should be working and available on port: 8080.

Upload everything to a repository and deliver.
