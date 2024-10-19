const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "./");
const OUTPUT_BUILD = path.resolve(ROOT_DIR, "dist");

const config = (_env, _argv) => {
    return {
        name: "Generate bundle",
        entry: {
            smeargle: path.resolve(ROOT_DIR, "index.js")
        },
        output: {
            path: OUTPUT_BUILD,
            library: 'SmeargleJs',
            filename: 'smeargle.min.js',
            libraryTarget: 'umd',
            globalObject: 'this'
        },
        mode: 'production'
    };
};

module.exports = [
    config
];
