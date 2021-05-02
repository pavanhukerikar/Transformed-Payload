FROM node:14
# Create app directory default is /usr/src/app
WORKDIR E:\pavan\pavanhukerikar  
# Install app dependencies
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD [ "node", "server.js" ]