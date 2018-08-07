# RavePay Subscription API
This is a WIP unofficial [RavePay](https://ravepay.flutterwave.com) subscription API for Node.js >= `v8.x.x`. With this API, you can handle recuring billings within your Node.js application.

## Installation
Using Node.js v8.X or lastest, you install using:

```sh
npm install ravepay-subscriptions
```

> ## Important!
> From a security standpoint, it much safer to store all ravepay API keys and other confidentials in environment variables instead of hard-coding them in your source code.

## Plan API
Detailed docs coming up

### Plan class
`new Plan()`

### Class methods
#### `async create({ amount, name, interval, duration })`

#### `async listAllPlans()`

#### `async fetchPlan({ planId, name })`

#### `async cancelPlan({ planId })`

#### `async editPlan({ planId, name, status })`


## Subscription API
Detailed docs coming up

### Subscription class
`new Subscription()`


### Class methods
#### `async listAllSubscriptions()`

#### `async fetchSubscription({ subscriptionId, email })`

#### `async cancelSubscription({ subscriptionId })`

#### `async activateSubscription({ subscriptionId })`
