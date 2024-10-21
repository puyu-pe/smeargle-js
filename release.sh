#!/bin/bash

# Login npm the first time
#npm login --registry=https://registry.npmjs.org/  --scope=@puyu

# update version package.json
VERSION=$(cat VERSION)
jq --arg new_version "$VERSION" '.version = $new_version' package.json > temp.json && mv temp.json package.json

# build
rm -fr dist
npm build

# publish
npm publish --access=public
