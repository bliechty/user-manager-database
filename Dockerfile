FROM node:current-alpine

WORKDIR /usr/local/user-manager-database/

COPY . .

EXPOSE 8080

RUN npm install

CMD ["npm", "run", "local"]