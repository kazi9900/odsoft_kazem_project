FROM node:latest
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
EXPOSE 4200
CMD ["npm", "start"]
