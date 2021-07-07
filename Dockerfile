FROM node:14

COPY . application

WORKDIR "/application/run_on_cloud"

RUN npm run ci:backend
RUN npm run build:backend
RUN npm run prune:backend

EXPOSE 8080
CMD ["npm", "run", "start"]