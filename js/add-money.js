document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const inputAddMoney = document.getElementById('input-add-amount').value;
    const inputMoney = parseFloat(inputAddMoney);
    const inputPinNumber = document.getElementById('input-pin-number').value;
    
    if(inputPinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceAmount = parseFloat(balance);
        const newBalanceAmount = balanceAmount + inputMoney;
        document.getElementById('account-balance').innerText = newBalanceAmount;
    }
    else{
        alert('Your Pin is not correct try again later');
    }
})