FROM nginx:1.15.12

COPY default.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html


