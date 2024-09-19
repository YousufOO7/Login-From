document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const inputNumber = document.getElementById('phone-number').value;
    const inputPin =document.getElementById('pin-number').value;

    if(inputNumber === '5' && inputPin === '1234'){
        console.log('apni shothik input diyechen');
        window.location.href = '/home.html';
    }
    else{
        alert('Please give us valid input or pin number');
    }

})