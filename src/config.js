class Config {
    constructor({
        publicKey = "",
        privateKey = "",
        isLive = false,

        livePlanBaseURL = "https://api.ravepay.co/v2/gpx",
        sandboxPlanBaseURL = "https://ravesandboxapi.flutterwave.com/v2/gpx"
    }) {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
        this.isLive = isLive;

        this.liveBaseURL = livePlanBaseURL;
        this.sandboxBaseURL = sandboxPlanBaseURL;
    }

    getBaseURL() {
        return this.isLive ? this.liveBaseURL : this.sandboxBaseURL;
    }

    validate() {
        if (!this.publicKey) throw new Error("No public key is set");
        if (!this.privateKey) throw new Error("No private key is set");
    }
}

module.exports = Config;
