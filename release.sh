#! /bin/bash
npm run build
npm run docker:build
npm run docker:tag
npm run docker:publish
npm run postdocker:publish