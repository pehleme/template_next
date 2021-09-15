FROM node:lts as dependencies

WORKDIR /hdn-one
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder

WORKDIR /hdn-one
COPY . .
COPY --from=dependencies /hdn-one/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner

WORKDIR /hdn-one
ENV NODE_ENV production

COPY --from=builder /hdn-one/next.config.js ./
COPY --from=builder /hdn-one/public ./public
COPY --from=builder /hdn-one/.next ./.next
COPY --from=builder /hdn-one/node_modules ./node_modules
COPY --from=builder /hdn-one/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
