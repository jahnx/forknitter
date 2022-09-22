let patternGaugeStitch = document.getElementById('pattern-gauge-stitch')
let patternGaugeRow = document.getElementById('pattern-gauge-row')

let myGaugeStitch = document.getElementById('my-gauge-stitch')
let myGaugeRow = document.getElementById('my-gauge-row')

let patternStitch = document.getElementById('pattern-stitch')
let patternRow = document.getElementById('pattern-row')

let resultStitch = document.getElementById('result-stitch')
let resultRow = document.getElementById('result-row')

const calculateButton = document.getElementById('calculate-btn')

function onCalculate(a, b, c) {
  const totalStitch = (b * c) / a
  return Math.ceil(totalStitch)
}

function onClickCalculate() {
  resultStitch.innerText = onCalculate(
    patternGaugeStitch.value,
    patternStitch.value,
    myGaugeStitch.value
  )
  resultRow.innerText = onCalculate(
    patternGaugeRow.value,
    patternRow.value,
    myGaugeRow.value
  )
}

calculateButton.addEventListener('click', onClickCalculate)
