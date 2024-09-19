document.getElementById('btn-cash-out-money').addEventListener('click', function(event){
    event.preventDefault();
    const inputCash = document.getElementById('input-cash-out-amount').value;
    const inputCashAmount = parseFloat(inputCash);
    const inputPin = document.getElementById('input-cash-out-pin-number').value;

    if(inputPin === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceAmount = parseFloat(balance);
        const newBalanceAmount = balanceAmount - inputCashAmount;
        document.getElementById('account-balance').innerText = newBalanceAmount;   
    }
    else{
        alert('Your pin is wrong please try again later');
    }
})