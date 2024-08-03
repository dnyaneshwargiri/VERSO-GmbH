FROM node:21-alpine AS production
RUN  yarn global add http-server
WORKDIR /app
COPY /dist /app/dist

ARG NODE_ENV  
ARG PORT

ENV NODE_ENV=$NODE_ENV  
ENV PORT=$PORT

EXPOSE $PORT

CMD ["sh", "-c", "http-server dist -p $PORT --cors"]