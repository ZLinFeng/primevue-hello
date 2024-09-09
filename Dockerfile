FROM node:20-slim AS builder

# --max-old-space-size
ENV NODE_OPTIONS=--max-old-space-size=8192
ENV TZ=Asia/Shanghai

WORKDIR /app

# copy package.json and pnpm-lock.yaml to workspace
COPY . /app

RUN npm install
RUN npm run build

RUN echo "Builder Success 🎉"

FROM nginx:stable-alpine AS production

RUN echo "types { application/javascript js mjs; }" > /etc/nginx/conf.d/mjs.conf
COPY --from=builder /app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8888

# start nginx
CMD ["nginx", "-g", "daemon off;"]