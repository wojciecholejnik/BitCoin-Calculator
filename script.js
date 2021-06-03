const rate = document.getElementById('rate');
const PLNInput = document.getElementById('PLN-input');
const BTCInput = document.getElementById('BTC-input');


  fetch('https://api.bitclude.com/stats/ticker.json')
  .then(response => response.json())
  .then(data => {

    const PLN = data.btc_pln;

    const PLNChange = parseFloat(PLN.change.slice(0,PLN.change.length-1)) * 0.01;

    rate.innerHTML = (PLN.ask * (1 + PLNChange)).toFixed(2);

    // calculate BTC default value with fetched rate
    BTCInput.value = (PLNInput.value / PLN.ask).toFixed(8);

    // set onchange to inputs
    PLNInput.onchange = () => {
      BTCInput.value = (PLNInput.value / (PLN.ask * (1 + PLNChange))).toFixed(8);
    };
    BTCInput.onchange = () => {
      PLNInput.value = (BTCInput.value * PLN.ask).toFixed(2);
    }
  });
