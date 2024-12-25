# FlyMate-API-Gateway

# docker build -t flymate-api-gateway .                                                 # Build the Image
# docker run -it --init -p 5000:5000 -v "$(pwd)":/app flymate-api-gateway:latest        # start the build image
# docker volume create flymate-api-gateway-node-modules                                 # create a volume with a name (we are creating a volume to store node_modules)
# docker run -it --init -p 5000:5000 -v "$(pwd)":/app -v flymate-api-gateway-node-modules:/app/flymate-api-gateway/node_modules flymate-api-gateway:latest                                                              # start the build image with volume