# FlyMate-API-Gateway

# docker build -t flymate-api-gateway .                                                 # Build the Image
# docker run -it --init -p 5000:5000 -v "$(pwd)":/app flymate-api-gateway:latest        # start the build image

# docker volume create flymate-api-gateway-node-modules                                 # create a volume with a name (we are creating a volume to store node_modules)
# docker run -it --init -p 5000:5000 -v "$(pwd)":/app -v flymate-api-gateway-node-modules:/app/flymate-api-gateway/node_modules flymate-api-gateway:latest                                                              # start the build image with volume

# ***To make the brigging works we need to give name to the images we are building 
# docker run -it --init --name flymate_api_gateway -p 5000:5000 -v "$(pwd)":/app flymate-api-gateway:latest        # start the build image
# docker volume create flymate-api-gateway-node-modules                                 # create a volume with a name (we are creating a volume to store node_modules)
# docker run -it --init --name flymate_api_gateway -p 5000:5000 -v "$(pwd)":/app -v flymate-api-gateway-node-modules:/app/flymate-api-gateway/node_modules flymate-api-gateway:latest                                                 # start the build image with volume with name

# docker run -it --init --name flymate_api_gateway --network flymate -p 5000:5000 -v "$(pwd)":/app -v flymate-api-gateway-node-modules:/app/flymate-api-gateway/node_modules flymate-api-gateway:latest                                                 # start the build image with volume with name and network