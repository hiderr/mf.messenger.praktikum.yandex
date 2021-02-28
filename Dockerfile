# production environment
FROM nginx
COPY /dist /usr/share/nginx/html
# new
COPY nginx.conf /etc/nginx/conf.d/default.conf.template
EXPOSE 80
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'