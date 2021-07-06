FROM node:14

COPY . application

WORKDIR "/application/run_on_cloud"

RUN npm run ci:backend
RUN npm run ci:frontend
RUN npm run build:backend
RUN npm run build:frontend
RUN npm run prune:backend
RUN npm run prune:frontend

EXPOSE 8080
CMD ["npm", "run", "start"]