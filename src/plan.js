const { sendPOST, sendGET } = require("./util");

class Plan {
    constructor(config) {
        this.config = config;
    }

    async create({
        amount,
        name,
        interval,
        duration, // optional
    }) {
        this.config.validate();

        // Set client's secret key
        const seckey = "";

        if (!amount) throw new Error("No amount is set.");
        if (!name) throw new Error("No plan name is set.");
        if (!interval) throw new Error("No interval is set.");

        const url = `${this.config.getBaseURL()}/paymentplans/create`;

        return await this.sendPOST(url, {
            amount,
            name,
            interval,
            duration,
            seckey
        });
    }

    async listAllPlans() {
        this.config.validate();

        // Set client's secret key
        const seckey = "";

        const url = `${this.config.getBaseURL()}/paymentplans/query?seckey=${seckey}`;

        return await this.sendGET(url);
    }

    async fetchPlan({
        planId,
        name
    }) {
        // Set client's secret key
        const seckey = "";

        if (!planId) throw new Error("No plan ID is set.");
        if (!name) throw new Error("No plan name is set.");

        const url = `${this.config.getBaseURL()}/query?seckey=${seckey}&id=${planId}&q=${name}`;
        return await this.sendGET(url);
    }


    async cancelPlan({
        planId
    }) {
        this.config.validate();

        // Set client's secret key
        const seckey = "";

        if (!planId) throw new Error("No plan ID is set.");

        const url = `${this.config.getBaseURL()}/paymentplans/${planId}/cancel`;

        return await this.sendPOST(url, {
            seckey
        });
    }

    async editPlan({
        planId,
        name,
        status
    }) {
        this.config.validate();

        // Set client's secret key
        const seckey = "";

        if (!planId) throw new Error("No plan ID is set.");
        if (!name) throw new Error("No plan name is set.");
        if (!status) throw new Error("No status is set.");

        const url = `${this.config.getBaseURL()}/paymentplans/${planId}/edit`;

        return await this.sendPOST(url, {
            status,
            name,
            seckey
        });
    }
}

module.exports = Plan;
