FROM node:16.19.1 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx:stable
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]