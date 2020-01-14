#! /bin/bash
npm run build
npm run docker:build
npm run docker:tag-latest
npm run docker:publish
npm run docker:publish-latest