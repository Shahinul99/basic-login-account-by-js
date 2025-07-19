<<<<<<< HEAD
// console.log('button clicked')

document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('button clicked');

    const PhoneNumber = document.getElementById('Phone-number').value;
    const PinNumber = document.getElementById('Pin-number').value

    console.log(PhoneNumber, PinNumber);

    if (PhoneNumber === '5' && PinNumber === '1234') {
        console.log('you are logged in');
        window.location.href = '/Money.html'
    }
    else 
        {
        alert('wrong number');
    }
})

=======
// console.log('button clicked')

document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('button clicked');

    const PhoneNumber = document.getElementById('Phone-number').value;
    const PinNumber = document.getElementById('Pin-number').value

    console.log(PhoneNumber, PinNumber);

    if (PhoneNumber === '5' && PinNumber === '1234') {
        console.log('you are logged in');
        window.location.href = '/home.html'
    }
    else 
        {
        alert('wrong number');
    }
})

>>>>>>> e9089668092f619faeaf5dd5b4fd0887f1f9111d
