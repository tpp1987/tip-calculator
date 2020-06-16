let totalBillAmount = 0
let serviceLevel = ""
let suggestedTipAmount = 0
let totalTip = 0



document.querySelector("#service-select").addEventListener("change", function (e) {
    serviceLevel = e.target.value
    console.log(serviceLevel)

    if (serviceLevel === "crap") {
        document.querySelector("#suggested-tip").value = 0
    } else if (serviceLevel === "notBad") {
        document.querySelector("#suggested-tip").value = 5
    } else if (serviceLevel === "good") {
        document.querySelector("#suggested-tip").value = 10
    } else if (serviceLevel === "awesome") {
        document.querySelector("#suggested-tip").value = 20
    }
})



document.querySelector("#calc-form").addEventListener("submit", function (e) {
    e.preventDefault()

    totalBillAmount = e.target.elements.totalBill.value

    suggestedTipAmount = e.target.elements.suggestedTip.value

    const calculateTip = function () {
        totalTip = (totalBillAmount * suggestedTipAmount) / 100
    }

    calculateTip()
    console.log(totalTip)

    document.querySelector("#results").innerHTML = ""

    const newHeading = document.createElement("h2")
    newHeading.textContent = "The results are in!"
    document.querySelector("#results").appendChild(newHeading)

    const newParagraph = document.createElement("p")
    newParagraph.textContent = `With a total bill of £${totalBillAmount}, a ${suggestedTipAmount}% tip would be £${totalTip}`
    document.querySelector("#results").appendChild(newParagraph)
})