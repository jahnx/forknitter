const stitchGap_1 = document.getElementById('stitch-gap-1')
const stitchGap_5 = document.getElementById('stitch-gap-5')
const stitchGap_10 = document.getElementById('stitch-gap-10')
const stitchCurrentValue = document.getElementById('stitch-current-value')
const stitchResetButton = document.getElementById('stitch-reset-btn')
const stitchMinusButton = document.getElementById('stitch-minus-btn')

let stitchCheckedButton = document.querySelector(
  'input[name="stitch-gap"]:checked'
)
let stitchPlusGap = Number(stitchCheckedButton.nextElementSibling.innerText)
let currentStitch = Number(stitchCurrentValue.innerText)

function getPlusGap(e) {
  stitchPlusGap = Number(e.target.nextElementSibling.innerText)
  stitchCheckedButton = e.target
}

function plus(e) {
  currentStitch += stitchPlusGap
  e.target.innerText = currentStitch
}

function minus(e) {
  currentStitch -= stitchPlusGap
  stitchCurrentValue.innerText = currentStitch
}

function reset() {
  currentStitch = 0
  stitchCurrentValue.innerText = currentStitch
}

stitchGap_1.addEventListener('click', getPlusGap)
stitchGap_5.addEventListener('click', getPlusGap)
stitchGap_10.addEventListener('click', getPlusGap)
stitchCurrentValue.addEventListener('click', plus)
stitchResetButton.addEventListener('click', reset)
stitchMinusButton.addEventListener('click', minus)
