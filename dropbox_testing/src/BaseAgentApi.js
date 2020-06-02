const axios = require('axios').default;

class BaseAgentApi {
    constructor(url) {
        this.baseUrl = url;
    }

    async requestAPI({method, url, data, headers}) {
        try {
            const response = await axios({
                method,
                url: this.baseUrl + url,
                data,
                headers,
            });
            return response;
        } catch(e) {
            console.log(e);
        }
    }

    // other methods

}

module.exports = BaseAgentApi;