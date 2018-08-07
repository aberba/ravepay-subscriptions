const fetch = require("node-fetch");

class Util {

    static async fetchJSON(hostURL, options) {
        return fetch(hostURL, options)
            .then(res => {
                //console.log(res);
                return res.json();
            })
            .catch(err => {
                throw err;
            });
    };

    // static base64Encode (text){
    //     return new Buffer(text).toString("base64");
    // }

    async sendPOST(url, data) {

        let headers = {
            "Content-Type": "application/json",
            Accept: "application/json"
        };

        return await this.fetchJSON(url, {
            method: "POST",
            headers,
            body: JSON.stringify(data)
        });
    }

    async senGET(url) {
        let headers = {
            "Content-Type": "application/json",
            Accept: "application/json"
        };

        return await this.fetchJSON(url, { method: "GET", headers });
    }

    // static objectToQueryString(obj) {
    //     return Object.keys(obj)
    //         .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    //         .join("&");
    // }
}
module.exports = Util;
