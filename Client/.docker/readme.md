# Client

https://marcofranssen.nl/run-your-angular-app-in-a-nginx-docker-container/

    docker build -f .docker/Dockerfile -t angularfrontend .
    docker run --name angularfrontend  -p 8080:80 -d angularfrontend