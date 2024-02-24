FROM node:18-alpine3.18 AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "start"]
# FROM node:18-alpine3.18 AS PRODUCTION_STAGE
# WORKDIR /app
# COPY --from=BUILD_IMAGE /app/package*.json ./
# COPY --from=BUILD_IMAGE /app/.next ./.next
# COPY --from=BUILD_IMAGE /app/public ./public
# COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
# ENV NODE_ENV=production
