#!/bin/bash

# update version package.json
VERSION=$(cat VERSION)
jq --arg new_version "$VERSION" '.version = $new_version' package.json > temp.json && mv temp.json package.json

# build
rm -fr dist
npm run build