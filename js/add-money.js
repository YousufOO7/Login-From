document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const inputAddMoney = getInputValueById ('input-add-amount');
    const inputPinNumber = getInputValueById ('input-pin-number');
    
    if(isNaN(inputAddMoney)){
        alert('Please add only number');
        return;
    }

    if(inputPinNumber === 1234){
        const balance = getTextInputValueById ('account-balance');
        const newBalance = balance + inputAddMoney;
        document.getElementById('account-balance').innerText = newBalance;
        
        // show transection history
        const div = document.createElement('div');
        div.classList.add('bg-gray-100');
        div.innerHTML = `
            <h4 class="text-2xl font-bold text-green-500">Cash In</h4>
            <p class="text-green-500">Add Money ${inputAddMoney} TK. New Balance ${newBalance} TK.</p>
        `
        document.getElementById('transection-container').appendChild(div);
    }
    else{
        alert('Your input was wrong, Please give us valid input.')
    }

})