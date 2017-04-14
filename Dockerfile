FROM node:latest
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY ./node-web-app-2/package.json /usr/src/app
RUN npm install

# Bundle app source
COPY ./node-web-app-2 /usr/src/app

EXPOSE 8080
HEALTHCHECK --interval=10s --timeout=3s CMD curl --fail http://localhost:8080/health || exit 1
CMD [ "npm", "start" ]
