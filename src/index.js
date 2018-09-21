// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    // function makeExchange (currency) {
    let exchange = {};

    if (currency <= 0) {
        return {};
    }

    else if (currency > 0 && currency <= 10000) {
        let coins = [50, 25, 10, 5, 1];
        let key = ["H", "Q", "D", "N", "P"];
        for (let i = 0; i < coins.length; i++) {
            if (Math.trunc(currency / coins[i]) > 0) {
                exchange[key[i]] = Math.trunc(currency / coins[i]);
                currency -= coins[i] * Math.trunc(currency / coins[i]);
            }
        }
        // console.log(exchange);
        return exchange;
    }

    else if (currency > 10000) {
        // console.log("You are rich, my friend! We don't have so much coins for exchange");
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }
}

// makeExchange(92);