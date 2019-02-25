# m-explorer

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### deployment

sample nginx config

```
server {
	listen 80;
	server_name scan.meter.io;

	index index.html;
	root /var/www/explorer;
}

server {
	listen 443 ssl http2;
	server_name scan.meter.io;

	ssl_certificate /etc/ssl/meterio.crt;
	ssl_certificate_key /etc/ssl/meterio.key;
	ssl_session_tickets off;

	index index.html;
	root /var/www/explorer;
}
```

run build command and the copy everything under `dist` to `/var/www/scan`, and Enjoy!

please don't forget to enable cors configs on your server, in this case, the configs would be `--api-cors http://scan.meter.io --api-cors https://scan.meter.io`

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
