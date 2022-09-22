const rowGap_1 = document.getElementById('row-gap-1')
const rowGap_5 = document.getElementById('row-gap-5')
const rowGap_10 = document.getElementById('row-gap-10')
const rowCurrentValue = document.getElementById('row-current-value')
const rowResetButton = document.getElementById('row-reset-btn')
const rowMinusButton = document.getElementById('row-minus-btn')

let rowCheckedButton = document.querySelector('input[name="row-gap"]:checked')
let rowPlusGap = Number(rowCheckedButton.nextElementSibling.innerText)
let currentRow = Number(rowCurrentValue.innerText)

function getPlusGap(e) {
  rowPlusGap = Number(e.target.nextElementSibling.innerText)
  rowCheckedButton = e.target
}

function plus(e) {
  currentRow += rowPlusGap
  e.target.innerText = currentRow
}

function minus(e) {
  currentRow -= rowPlusGap
  rowCurrentValue.innerText = currentRow
}

function reset() {
  currentRow = 0
  rowCurrentValue.innerText = currentRow
}

rowGap_1.addEventListener('click', getPlusGap)
rowGap_5.addEventListener('click', getPlusGap)
rowGap_10.addEventListener('click', getPlusGap)
rowCurrentValue.addEventListener('click', plus)
rowResetButton.addEventListener('click', reset)
rowMinusButton.addEventListener('click', minus)
