FROM registry.xetid.cu/proxy.docker.io/library/node:20-alpine

WORKDIR /opt/app

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

COPY . .

RUN npm config set registry http://nexus.xetid.cu/repository/npm-registry/
RUN npm config set strict-ssl false
RUN npm install
CMD npm run dev