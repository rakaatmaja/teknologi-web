document.getElementById('inputFb').addEventListener('click', function () {
  inputFb();
});

document.getElementById('inputV').addEventListener('click', function () {
 hitungV();
});

function inputFb(){
    const input = parseInt(document.getElementById('inputA').value);
    if (!isNaN(input) && input > 0) {
        const angkaFb = hitungFb(input);
        document.getElementById('result').innerText = `Deret Fibonacci: ${angkaFb.join(', ')}`;
      } else {
        document.getElementById('result').innerText = 'Masukkan jumlah angka yang valid.';
      }
}

function hitungFb(n) {
    const angkaFb = [0, 1];
    for (let i = 2; i < n; i++) {
        angkaFb.push(angkaFb[i - 1] + angkaFb[i - 2]);
    }
    return angkaFb;
  }


  function hitungV() {
    const panjang = parseFloat(document.getElementById('panjang').value);
    const lebar = parseFloat(document.getElementById('lebar').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
  
    if (!isNaN(panjang) && !isNaN(lebar) && !isNaN(tinggi) && panjang > 0 && lebar > 0 && tinggi > 0) {
      const volume = panjang * lebar * tinggi;
      document.getElementById('resultV').innerText = `Volume: ${volume.toFixed(2)}`;
    } else {
      document.getElementById('resultV').innerText = 'Masukkan panjang, lebar, dan tinggi yang valid.';
    }
  }