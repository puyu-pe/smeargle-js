#!/bin/bash

# Login npm the first time
#npm login --registry=https://registry.npmjs.org/  --scope=@puyu

# publish
npm publish --access=public

echo upload version: $(cat VERSION)
