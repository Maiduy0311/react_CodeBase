# 1. Build
FROM node:14-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build:production
CMD [ "node" ]

# 2. Serve
FROM nginx:stable-alpine
# /usr/share/nginx/html - Set root for nginx
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 5001
CMD ["nginx", "-g", "daemon off;"]
