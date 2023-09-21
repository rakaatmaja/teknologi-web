document.getElementById('inputFb').addEventListener('click', function () {
  inputFb();
});

document.getElementById('inputV').addEventListener('click', function () {
 hitungV();
});

document.getElementById('pilihan').addEventListener('change', function() {
  handleDropdownChange();
});

function handleDropdownChange() {
  const selectedOption = document.getElementById('pilihan').value;
  hideAllInputSections();  

  if (selectedOption === 'balok') {
      document.getElementById('balok-input').style.display = 'block';
  } else if (selectedOption === 'kubus') {
      document.getElementById('kubus-input').style.display = 'block';
  } else if (selectedOption === 'tabung') {
      document.getElementById('tabung-input').style.display = 'block';
  }
}

function hideAllInputSections() {
  const inputSections = document.querySelectorAll('.input-section');
  inputSections.forEach(section => {
      section.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', function() {
  handleDropdownChange();  
});


function inputFb(){
    const input = parseInt(document.getElementById('inputA').value);
    if (!isNaN(input) && input > 0) {
        const angkaFb = hitungFb(input);
        document.getElementById('hasil').innerText = `Deret Fibonacci: ${angkaFb.join(', ')}`;
      } else {
        document.getElementById('hasil').innerText = 'Masukkan jumlah angka yang valid.';
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
    const pilihan = document.getElementById('pilihan').value;

    let volume;
    switch (pilihan) {
      case 'balok':
        volume = hitungVolumeBalok();
        break;
      case 'kubus':
        volume = hitungVolumeKubus();
        break;
      case 'tabung':
        volume = hitungVolumeTabung();
        break;
      default:
        volume = NaN;
    }


    
    if (!isNaN(volume) && volume > 0) {
      document.getElementById('hasilV').innerText = `Volume: ${volume.toFixed(2)}`;
    } else {
      document.getElementById('hasilV').innerText = 'Masukkan ukuran yang valid.';
    }
  }

    function hitungVolumeBalok() {
      const panjang = parseFloat(document.getElementById('panjang').value);
      const lebar = parseFloat(document.getElementById('lebar').value);
      const tinggi = parseFloat(document.getElementById('tinggi').value);
      return panjang * lebar * tinggi;
    }

    function hitungVolumeKubus() {
      const sisi = parseFloat(document.getElementById('sisi').value);
      return Math.pow(sisi, 3);
    }
    
    function hitungVolumeTabung() {
      const radiusTabung = parseFloat(document.getElementById('radiusTabung').value);
      const tinggiTabung = parseFloat(document.getElementById('tinggiTabung').value);
      return Math.PI * Math.pow(radiusTabung, 2) * tinggiTabung;
    }
  