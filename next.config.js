'use strict';

module.exports = {
    compress: true,
    pageExtensions: ['ts', 'tsx'],
    poweredByHeader: false,
    reactStrictMode: true,
    future: {
        strictPostcssConfiguration: true,
        excludeDefaultMomentLocales: true,
        webpack5: true,
    },
    webpack: defaultConfig => {

        defaultConfig.experiments = {
            ...defaultConfig.experiments,
            topLevelAwait: true,
        };

        return defaultConfig;
    },
};
