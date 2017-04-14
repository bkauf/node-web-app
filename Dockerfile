FROM node:latest
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
HEALTHCHECK --interval=10s --timeout=3s CMD curl --fail http://localhost:8080/health || exit 1
CMD [ "npm", "start" ]
