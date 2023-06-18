
const inputAmount = document.querySelector("#amount");
const selectCurrency = document.querySelector("#currency");
const resoltConvert = document.querySelector("#convert");

const getFromAmount = () => {
    fetch("current.json")
        .then(response => {
            if (response === 404) {
                inputAmount.innerText = 'text with error'
            } else {
                return response.json()
            }
        })
        .then(date => {

            if (selectCurrency.value === 'usd') {
                const resoltUSD = +date[1].buy;
                const convertedValue = +inputAmount.value / resoltUSD;
                const roundedValue = convertedValue.toFixed(2);
                resoltConvert.value = `Я отримаю: ${roundedValue}`;
            } else if (selectCurrency.value === 'eur') {
                const resoltEUR = + date[0].buy; 
                const convertedValue = +inputAmount.value / resoltEUR; 
                const roundedValue = convertedValue.toFixed(2);
                resoltConvert.value = `Я отримаю: ${roundedValue}`
            } else {
                resoltConvert.value = "ERROR 404";
            }

        })
}

inputAmount.addEventListener("input", getFromAmount);