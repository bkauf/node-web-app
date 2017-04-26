FROM node:7
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
HEALTHCHECK --interval=6s --timeout=2s CMD curl --fail http://localhost:8080/health || exit 1
CMD [ "npm", "start" ]
