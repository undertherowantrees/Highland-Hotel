const bookingForm1 = document.querySelector('#booking_form1');
const firstName = document.querySelector('#fName');
const lastName = document.querySelector('#lName');
const email = document.querySelector('#email');
const address = document.querySelector('#address');
const phone = document.querySelector('#phone');
const roomType = document.querySelector('#roomChoice');
const guestNumber = document.querySelector('#quantity');
const checkIn = document.querySelector('#checkIn');
const checkOut = document.querySelector('#checkOut');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

bookingForm1.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if(firstName.value === '' || lastName.value === '' || email.value === '' || address.value === '' || phone.value === '' || roomType.value === '' || guestNumber.value === '' || checkIn.value === '' || checkOut.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${firstName.value} : ${lastName.value} : ${email.value} : ${address.value} : ${phone.value} : ${roomType.value} : ${guestNumber.value} : ${checkIn.value} : ${checkOut.value}`));
    userList.appendChild(li);
    // Clear fields
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    address.value = '';
    phone.value = '';
    roomType.value = '';
    guestNumber.value = '';
    checkIn.value = '';
    checkOut.value = '';
  }
  console.log(firstName.value, lastName.value, email.value, address.value, phone.value, roomType.value, guestNumber.value, checkIn.value, checkOut.value);
}