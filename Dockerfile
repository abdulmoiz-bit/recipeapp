FROM node:18
WORKDIR /app
COPY ./pakage*json ./
RUN npm install
COPY . .


CMD ["npm", "run", "start"]