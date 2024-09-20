document.getElementById('btn-cash-out-money').addEventListener('click', function(event){
    event.preventDefault();
    const inoutCash = getInputValueById ('input-cash-out-amount');
    const inputPin = getInputValueById ('input-cash-out-pin-number');
    
    if(isNaN(inoutCash)){
        alert('Please add only number');
        return;
    }

    if(inputPin === 1234){
        const balance = getTextInputValueById ('account-balance');
        if(inoutCash > balance){
            alert("You don't have enough money");
            return;
        }
        const newBalance = balance - inoutCash;
        document.getElementById('account-balance').innerText = newBalance;
        // show transection history
        const div = document.createElement('div');
        div.classList.add('bg-gray-100');
        div.innerHTML = `
            <h4 class="text-2xl font-bold text-red-400">Cash Out</h4>
            <p class="text-red-400">Cash Out ${inoutCash} TK. New Balance ${newBalance} TK.</p>
        `
        document.getElementById('transection-container').appendChild(div);
    }
    else{
        alert('Your input was wrong, Please try again later');
    }
});