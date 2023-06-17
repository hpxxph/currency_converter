const walletUSD = document.querySelector("#wallet_USD");
const walletEUR = document.querySelector("#wallet_EUR");

fetch("current.json")
    .then(response => {
        if (response === 404) {
            walletUSD.innerText = 'ERROR404';
            walletEUR.innerText = 'ERROR404';
        } else {
            return response.json()
        }
    })
    .then(date => {
        walletEUR.innerText = date[0].buy;
        walletUSD.innerText = date[1].buy;
    })
    .catch(error => {
        walletUSD.innerText = 'ERROR404';
        walletEUR.innerText = 'ERROR404';
    })