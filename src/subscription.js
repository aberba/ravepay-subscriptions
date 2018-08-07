const { sendPOST, sendGET } = require("./util");

class Subscription {
    constructor(config) {
        this.config = config;
    }

    async listAllSubscriptions() {
        this.config.validate();

        // Set client's secret key
        const seckey = "";

        const url = `${this.config.getBaseURL()}/subscriptions/query?seckey=${seckey}`;

        return await this.sendGET(url);
    }

    async fetchSubscription({
        subscriptionId,
        email
    }) {
        this.config.validate();

        // Set client's secret key
        const seckey = "";

        if (!subscriptionId) throw new Error("No subscription ID is set.");
        if (!email) throw new Error("No customer email is set.");

        const url = `${this.config.getBaseURL()}/subscriptions/query?seckey=${seckey}&id=${subscriptionId}&email=${email}`;

        return await this.sendGET(url);
    }

    async cancelSubscription({
        subscriptionId
    }) {
        this.config.validate();

        // Set client's secret key
        const seckey = "";

        if (!subscriptionId) throw new Error("No subscription ID is set.");

        const url = `${this.config.getBaseURL()}/subscriptions/${subscriptionId}/cancel`;

        return await this.sendPOST(url, { seckey });
    }

    async activateSubscription({
        subscriptionId
    }) {
        this.config.validate();

        // Set client's secret key
        const seckey = "";

        if (!subscriptionId) throw new Error("No subscription ID is set.");

        const url = `${this.config.getBaseURL()}/subscriptions/${subscriptionId}/activate`;

        return await this.sendPOST(url, { seckey });
    }
}

module.exports = Subscription;
