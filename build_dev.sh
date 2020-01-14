#! /bin/bash
npm run build -- --mode development
npm run docker:build
npm run docker:tag-dev
npm run docker:publish
npm run docker:publish-dev