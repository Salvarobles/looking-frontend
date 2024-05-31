# Construcción de la imagen
FROM node:14 as build-stage

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Producción de la imagen
FROM nginx:alpine as production-stage

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
