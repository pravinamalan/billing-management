let customData = {};
export const localCache = () => {

    return{
        data : customData,
        getItem: function (viewId, key) {
            if(viewId == null && key?.length) {
                return customData[key];
            } else {
                return {};
            }
        },
        setFields: function(fields = {}) {

            if(!!fields && Object.keys(fields)?.length) {
                if(typeof customData["fields"] == "undefined")
                    customData["fields"] = {};

                customData["fields"] = fields;
            }

        },
    }

}
