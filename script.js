/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

1 foot = 0.305 meter
1 gallon = 3.785 liter
1 pound = 0.453 kilogram
*/

//input section
const inputValue = document.getElementById("inputValue")
const convertBtn = document.getElementById("convertBtn")

//results section
const lengthContainer = document.getElementById("lengthResult")
const volumeContainer = document.getElementById("volumeResult")
const massContainer = document.getElementById("massResult")

convertBtn.addEventListener("click", function() {
    convertResults()
})

function convertResults() {
    lengthContainer.textContent = `
        ${inputValue.value} meters = ${(inputValue.value * 3.281).toFixed(3)} feet | 
        ${inputValue.value} feet = ${(inputValue.value * 0.3048).toFixed(3)} meters
    `
    volumeContainer.textContent = `
        ${inputValue.value} liters = ${(inputValue.value * 0.264).toFixed(3)} gallons | 
        ${inputValue.value} gallons = ${(inputValue.value * 3.785).toFixed(3)} liters
    `
    massContainer.textContent = `
        ${inputValue.value} kilograms = ${(inputValue.value * 2.204).toFixed(3)} pounds | 
        ${inputValue.value} pounds = ${(inputValue.value * 0.453).toFixed(3)} kilograms
    `
}