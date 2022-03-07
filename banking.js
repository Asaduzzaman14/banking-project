function getInputValu(inpitId) {

    let inputFild = document.getElementById(inpitId)
    let inputValue = parseFloat(inputFild.value);
    inputFild.value = ''
    return inputValue


}

function updateTotalFild(storFild, amount) {
    let totalWithdrow = document.getElementById(storFild)
    let totalWithdrowText = parseFloat(totalWithdrow.innerText)
    let total = totalWithdrowText + amount
    totalWithdrow.innerText = total;
    // blance update 

}
// convart number 
function getCurrentBalance() {
    let prevBlance = document.getElementById('previus-balnce')
    let prevBlanceValue = parseFloat(prevBlance.innerText)
    return prevBlanceValue;


}
// update blance 
function updateBlance(amount, isAdd) {
    let blance = document.getElementById('previus-balnce')

    let previusBlanceTotal = getCurrentBalance();
    if (isAdd == true) {
        blance.innerText = previusBlanceTotal + amount;

    } else {
        blance.innerText = previusBlanceTotal - amount;

    }

}


document.getElementById('deposit-btn').addEventListener('click', function () {

    let inputValue = getInputValu('deposite-input')
    updateTotalFild('deposit-total', inputValue)
    updateBlance(inputValue, true)
})

document.getElementById('withdrow-btn').addEventListener('click', function () {

    let inputValue = getInputValu('withdrow-input')
    updateTotalFild('total-withdrow', inputValue)
    updateBlance(inputValue, false)

})

