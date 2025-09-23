let customData = {};

export const localCache = () => {
    return {
        data: customData,

        /**
         * Get item from cache with module-specific key
         * @param {string} module
         * @param {string} key
         * @returns {any}
         */
        getItem: function (module, key) {
            const cacheKey = this.generateCacheKey(module, key);
            return customData[cacheKey] || {};
        },

        /**
         * Set fields in cache with module-specific key
         * @param {string} module
         * @param {Object} fields
         */
        setFields: function(module, fields = {}) {
            if (fields && Object.keys(fields)?.length) {
                const cacheKey = this.generateCacheKey(module, "fields");
                customData[cacheKey] = fields;
            }
        },

        /**
         * Set any item in cache with module-specific key
         * @param {string} module
         * @param {string} key
         * @param {any} value
         */
        setItem: function(module, key, value) {
            const cacheKey = this.generateCacheKey(module, key);
            customData[cacheKey] = value;
        },

        /**
         * Remove item from cache
         * @param {string} module
         * @param {string} key
         */
        removeItem: function(module, key) {
            const cacheKey = this.generateCacheKey(module, key);
            if (customData[cacheKey]) {
                delete customData[cacheKey];
            }
        },

        /**
         * Clear all cache for a specific module
         * @param {string} module
         */
        clearModule: function(module) {
            Object.keys(customData).forEach(key => {
                if (key.startsWith(`${module}_`)) {
                    delete customData[key];
                }
            });
        },

        /**
         * Clear entire cache
         */
        clearAll: function() {
            customData = {};
        },

        /**
         * Generate module-specific cache key
         * @param {string} module
         * @param {string} key
         * @returns {string}
         */
        generateCacheKey: function(module, key) {
            return `${module}_${key}`;
        },

    };
};
