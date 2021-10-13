module.exports = {
    pwa: {
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            navigateFallback: '/index.html',
            runtimeCaching: [
                {
                    urlPattern: new RegExp('^https://v2.jokeapi.dev/joke/Programming'),
                    handler: 'networkFirst',
                    options: {
                        networkTimeoutSeconds: 30,
                        cacheName: 'api-cache',
                            cacheableResponse: {
                                statuses: [0, 200]
                        }
                    }
                }
            ]
        }
    }
};