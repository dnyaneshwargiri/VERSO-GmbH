#!/bin/bash

NODE_ENV=$1 
PORT=$2  

docker build -t fizz-buzz-app \
  --build-arg NODE_ENV="$NODE_ENV" \
  --build-arg PORT="$PORT" .

echo "Image 'fizz-buzz-app' built successfully!"