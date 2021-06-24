FROM node:alpine as dependencies
WORKDIR /my-project
COPY package.json package-lock.json ./
RUN npm install --global pm2
RUN npm install --from-lockfile

FROM node:alpine as builder
WORKDIR /my-project
RUN npm install --global pm2
COPY . .
COPY --from=dependencies /my-project/node_modules ./node_modules
RUN npm run build

FROM node:alpine as runner
WORKDIR /my-project
ENV NODE_ENV production
RUN npm install --global pm2
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /my-project/public ./public
COPY --from=builder /my-project/.next ./.next
COPY --from=builder /my-project/node_modules ./node_modules
COPY --from=builder /my-project/package.json ./package.json

EXPOSE 3000
CMD ["npm" , "start"]