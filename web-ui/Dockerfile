FROM nginx:alpine

COPY dist/ /usr/share/nginx/html

ENTRYPOINT sed -i 's@<base href="/" />@'"<base href=\"/cts/\"\>"'@' /usr/share/nginx/html/index.html \
    && nginx -g 'daemon off;'

EXPOSE 80
