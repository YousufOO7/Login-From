function getInputValueById (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat (inputValue);
    return inputNumber;
}

function getTextInputValueById (id){
    const textValue = document.getElementById(id).innerText;
    const balanceValue = parseFloat (textValue);
    return balanceValue;
}

function showSectionById (id){
    document.getElementById ('add-money-form').classList.add ('hidden');
    document.getElementById ('cash-out-form').classList.add ('hidden');
    document.getElementById ('transection-section').classList.add ('hidden');

    document.getElementById(id).classList.remove('hidden');
};