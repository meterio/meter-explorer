#! /bin/bash
npm run build -- --mode development
npm run docker:build
npm run docker:tag
npm run docker:publish
npm run postdocker:publish