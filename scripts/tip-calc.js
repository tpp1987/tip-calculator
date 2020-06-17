let totalBillAmount = 0
let serviceLevel = ""
let suggestedTipAmount = 0
let totalTip = 0

document.querySelector("#service-select").addEventListener("change", function (e) {
    serviceLevel = e.target.value

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

    totalTip = (totalBillAmount * suggestedTipAmount) / 100

    document.querySelector("#results").innerHTML = ""

    

    // if service === crappy, print a different message, else print the usual message(s)
    if (suggestedTipAmount < 0.01) {
        const newHeading = document.createElement("h2")
        newHeading.textContent = "Run!"
        document.querySelector("#results").appendChild(newHeading)

        const noTipParagraph = document.createElement("p")
        noTipParagraph.textContent = `If the service was that bad, don't even pay the bill!`
        document.querySelector("#results").appendChild(noTipParagraph)
    } else {
        const newHeading = document.createElement("h2")
        newHeading.textContent = "The results are in!"
        document.querySelector("#results").appendChild(newHeading)

        let newParagraph = document.createElement("p")
        newParagraph.textContent = `A ${suggestedTipAmount}% tip is £${Math.ceil(totalTip).toFixed(2)}`
        document.querySelector("#results").appendChild(newParagraph)
    
        newParagraph = document.createElement("p")
        newParagraph.textContent = `Be cool. We rounded it up for you`
        document.querySelector("#results").appendChild(newParagraph)
    }
})