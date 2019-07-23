# Meter Explorer

---

Meter explorer is a browser project that displays information of latest blocks finalized on meter testnet.

## Contribute

---

### Setup & Run

```
npm install
npm run serve
```

### Build and release

```
npm run build
```

### Test

```
npm run test
```

### Deployment

sample nginx config

```
server {
	listen 80;
	server_name scan.meter.io;

	index index.html;
	root /var/www/explorer;
}
```

## Tips

---

please don't forget to enable cors configs on your server, in this case, the configs would be `--api-cors http://scan.meter.io` or `--api-cors *`

## License

---

See the [LICENSE](/LICENSE.md) file for license rights and limitations (MIT).
