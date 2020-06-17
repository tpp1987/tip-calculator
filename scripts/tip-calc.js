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

    document.querySelector("#results-div").innerHTML = ""

    if (totalBillAmount == 0 || totalBillAmount === "") {
    const noBillParagraph = document.createElement("p")
    noBillParagraph.textContent = `We can't calculate a tip without a total. Come on now.`
    document.querySelector("#results-div").appendChild(noBillParagraph)
    } else if (suggestedTipAmount < 0.01) {
        const newHeading = document.createElement("h2")
        newHeading.textContent = "Run!"
        document.querySelector("#results-div").appendChild(newHeading)

        const noTipParagraph = document.createElement("p")
        noTipParagraph.textContent = `If the service was that bad, don't even pay the bill!`
        document.querySelector("#results-div").appendChild(noTipParagraph)
    } else {
        const newHeading = document.createElement("h2")
        newHeading.textContent = "The results are in!"
        document.querySelector("#results-div").appendChild(newHeading)

        let newParagraph = document.createElement("p")
        newParagraph.textContent = `A ${suggestedTipAmount}% tip is £${Math.ceil(totalTip).toFixed(2)}`
        document.querySelector("#results-div").appendChild(newParagraph)
    
        newParagraph = document.createElement("p")
        newParagraph.textContent = `Be cool. We rounded it up for you`
        document.querySelector("#results-div").appendChild(newParagraph)
    }

    const newButton = document.createElement("button")
    newButton.setAttribute("id", "start-again")
    newButton.setAttribute("class", "box-shadow")
    newButton.textContent = `Start again`
    document.querySelector("#results-div").appendChild(newButton)

    document.querySelector("#results-div").classList.replace("opacity-0", "opacity-1")
    document.querySelector("#calc").classList.replace("opacity-1", "opacity-0")

    document.querySelector("#start-again").addEventListener("click", function (e) {
        document.querySelector("#results-div").classList.replace("opacity-1", "opacity-0")
        document.querySelector("#calc").classList.replace("opacity-0", "opacity-1")

    })
})