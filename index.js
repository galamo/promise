let url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR";


//decleration
function simpleRequest() {

    return $.ajax({
        method: "get",
        url
    })


}





let promise = new Promise((resolve, reject) => {
    let result = { btc: "1.2", usd: "15000" };
    setTimeout(function () {
        if (result.btc == "1.2") {
            resolve(result);
        } else {
            reject("The specific value is 2 low")
        }

    }, 200)
});

promise.then((successResponse) => {
    console.log("is it resolved?")
    successResponse.nis = "50000";
    return successResponse;
}).then((successResponse2) => {
    console.log("is it resolved2?")
    successResponse2.grv = "10000000";
    return successResponse2
}).then((successResponse3) => {
    console.log(successResponse3)
}).catch((error) => {
    console.error(error)
})



// simple request with promise

simpleRequest().then((result) => {
    console.log(result);
}, (err) => {
    console.error("this is the promise reject")
    console.error(err);
})



//wrap ajax with promise

function promiseRequest() {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: "get",
            url,
            success: (res) => {
                if (res.ErrorsSummary) {
                    reject("the api url is invalid");
                } else {
                    resolve(res);
                }
            },
            error: (err) => {
                reject(err);
            }

        })
    })


}


promiseRequest().then((sucess) => {
    console.log(sucess)
}, (error) => {
    console.error(error)
})