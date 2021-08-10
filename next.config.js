const { name } = require('./package.json');
const isProd = process.env.NODE_ENV == 'production';
const basePath = isProd ? `/${name}` : '';

module.exports = {
    assetPrefix: basePath,
    trailingSlash: true,
    publicRuntimeConfig: { basePath },
};
