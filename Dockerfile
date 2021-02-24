# Базовый слой
FROM node:13

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Копируем всё что нужно из локальной папки в образ
COPY static /usr/src/app/static
COPY package-lock.json /usr/src/app/
COPY package.json /usr/src/app/
COPY webpack.config.js /usr/src/app/
COPY tsconfig.json /usr/src/app/

# Устанавливаем зависимости, в образе появится /node_modules
RUN npm install

EXPOSE 3000

# При старте контейнер выполнит эту команду – запустит наше приложение
CMD npm start