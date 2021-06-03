const rate = document.getElementById('rate');
const PLNInput = document.getElementById('PLN-input');
const BTCInput = document.getElementById('BTC-input');


  fetch('https://api.bitclude.com/stats/ticker.json')
  .then(response => response.json())
  .then(data => {

    const PLN = data.btc_pln;
    const BTC = data.ltc_btc;

    console.log(PLN);
    console.log(BTC);

    rate.innerHTML = PLN.bid;

    BTCInput.value = (PLNInput.value / PLN.bid).toFixed(8);

    PLNInput.onchange = () => {
      BTCInput.value = (PLNInput.value / PLN.bid).toFixed(8);
    };

    BTCInput.onchange = () => {
      PLNInput.value = (BTCInput.value * PLN.bid).toFixed(8);
    }
  });
