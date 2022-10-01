// https://www.omnicalculator.com/other/port-length

// calculators not workgin

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const lengthofventportRadio = document.getElementById('lengthofventportRadio');
const numberofportsRadio = document.getElementById('numberofportsRadio');
const ventdiameterRadio = document.getElementById('ventdiameterRadio');
const boxvolumeRadio = document.getElementById('boxvolumeRadio');
const tuningfrequencyRadio = document.getElementById('tuningfrequencyRadio');
const endcorrectionfactorRadio = document.getElementById('endcorrectionfactorRadio');

let lengthofventport;
let numberofports = v1;
let ventdiameter = v2;
let boxvolume = v3;
let tuningfrequency = v4;
let endcorrectionfactor = v5;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');

lengthofventportRadio.addEventListener('click', function() {
  variable1.textContent = 'Number of ports';
  variable2.textContent = 'Vent diameter';
  variable3.textContent = 'Box volume';
  variable4.textContent = 'Tuning frequency';
  variable5.textContent = 'End correction factor';
  numberofports = v1;
  ventdiameter = v2;
  boxvolume = v3;
  tuningfrequency = v4;
  endcorrectionfactor = v5;
  result.textContent = '';
});

numberofportsRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of vent/port';
  variable2.textContent = 'Vent diameter';
  variable3.textContent = 'Box volume';
  variable4.textContent = 'Tuning frequency';
  variable5.textContent = 'End correction factor';
  lengthofventport = v1;
  ventdiameter = v2;
  boxvolume = v3;
  tuningfrequency = v4;
  endcorrectionfactor = v5;
  result.textContent = '';
});

ventdiameterRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of vent/port';
  variable2.textContent = 'Number of ports';
  variable3.textContent = 'Box volume';
  variable4.textContent = 'Tuning frequency';
  variable5.textContent = 'End correction factor';
  lengthofventport = v1;
  numberofports = v2;
  boxvolume = v3;
  tuningfrequency = v4;
  endcorrectionfactor = v5;
  result.textContent = '';
});

boxvolumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of vent/port';
  variable2.textContent = 'Number of ports';
  variable3.textContent = 'Vent diameter';
  variable4.textContent = 'Tuning frequency';
  variable5.textContent = 'End correction factor';
  lengthofventport = v1;
  numberofports = v2;
  ventdiameter = v3;
  tuningfrequency = v4;
  endcorrectionfactor = v5;
  result.textContent = '';
});

tuningfrequencyRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of vent/port';
  variable2.textContent = 'Number of ports';
  variable3.textContent = 'Vent diameter';
  variable4.textContent = 'Box volume';
  variable5.textContent = 'End correction factor';
  lengthofventport = v1;
  numberofports = v2;
  ventdiameter = v3;
  boxvolume = v4;
  endcorrectionfactor = v5;
  result.textContent = '';
});

endcorrectionfactorRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of vent/port';
  variable2.textContent = 'Number of ports';
  variable3.textContent = 'Vent diameter';
  variable4.textContent = 'Box volume';
  variable5.textContent = 'Tuning frequency';
  lengthofventport = v1;
  numberofports = v2;
  ventdiameter = v3;
  boxvolume = v4;
  tuningfrequency = v5;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(lengthofventportRadio.checked)
    result.textContent = `Length of vent/port = ${computelengthofventport().toFixed(2)}`;

  else if(numberofportsRadio.checked)
    result.textContent = `Number of ports = ${computenumberofports().toFixed(2)}`;

  else if(ventdiameterRadio.checked)
    result.textContent = `Vent diameter = ${computeventdiameter().toFixed(2)}`;

  else if(boxvolumeRadio.checked)
    result.textContent = `Box volume = ${computeboxvolume().toFixed(2)}`;

  else if(tuningfrequencyRadio.checked)
    result.textContent = `Tuning frequency = ${computetuningfrequency().toFixed(2)}`;

  else if(endcorrectionfactorRadio.checked)
    result.textContent = `End correction factor = ${computeendcorrectionfactor().toFixed(2)}`;
})

// calculation

// lengthofventport = ((2.35625 * 10000 * ventdiameter² * numberofports) / (boxvolume * tuningfrequency²)) - (endcorrectionfactor * ventdiameter)

function computelengthofventport() {
  return ((2.35625 * 10000 * Math.pow(Number(ventdiameter.value), 2) * Number(numberofports.value)) / (Number(boxvolume.value) * Math.pow(Number(tuningfrequency.value), 2))) - (Number(endcorrectionfactor.value) * Number(ventdiameter.value));
}

function computenumberofports() {
  return Number(lengthofventport.value) - Number(ventdiameter.value) - Number(boxvolume.value) - Number(tuningfrequency.value) + Number(endcorrectionfactor.value);
}

function computeventdiameter() {
  return Number(lengthofventport.value) - Number(numberofports.value) - Number(boxvolume.value) - Number(tuningfrequency.value) + Number(endcorrectionfactor.value);
}

function computeboxvolume() {
  return Number(lengthofventport.value) - Number(numberofports.value) - Number(ventdiameter.value) - Number(tuningfrequency.value) + Number(endcorrectionfactor.value);
}

function computetuningfrequency() {
  return Number(lengthofventport.value) - Number(numberofports.value) - Number(ventdiameter.value) - Number(boxvolume.value) + Number(endcorrectionfactor.value);
}

function computeendcorrectionfactor() {
  return Number(numberofports.value) + Number(ventdiameter.value) + Number(boxvolume.value) + Number(tuningfrequency.value) - Number(lengthofventport.value);
}