FROM node:16.13.1
WORKDIR /app
COPY package.json .
# this is for building
RUN npm install 
COPY . ./
EXPOSE 3000
# this is for running
CMD [ "node","index.js" ]

