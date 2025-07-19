// console.log('cash-out works')

document.getElementById('btn-cash-out').addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut)
    const cashOutPin = document.getElementById('input-cash-out-pin').value;
    if (cashOutPin === '1234') {
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance)
        const newBalance = balanceNumber - cashOutNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('pin number is wrong plx try again')
    }




})