#!/bin/bash
IMAGE=$1
CURRENT=$(docker ps --format '{{.Names}}')

# 1. Determine which color is active
if [[ "$CURRENT" == *"blue"* ]]; then
    NEW_COLOR="green"
    OLD_COLOR="blue"
else
    NEW_COLOR="blue"
    OLD_COLOR="green"
fi

echo "Current version is $OLD_COLOR. Deploying $NEW_COLOR..."

# 2. Pull the new version
docker pull $IMAGE

# 3. Stop the OLD version first (to free up port 8081)
if [ -n "$CURRENT" ]; then
    docker stop $OLD_COLOR
    docker rm $OLD_COLOR
fi

# 4. Start the NEW version on port 8081
docker run -d --name ${NEW_COLOR} -p 8081:80 $IMAGE

echo "Deployment Complete: Switched to $NEW_COLOR"