const tablinks = document.getElementsByClassName('tab-link');
const tabcontents = document.getElementsByClassName('tab-contants');

function opentab(tabname) {
    for (const item of tablinks) {
        item.classList.remove('active-link');
    }
    for (const item of tabcontents) {
        item.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

const sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

const myform = document.getElementById('myform');

myform.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = myform.elements.name.value;
    const email = myform.elements.email.value;
    const message = myform.elements.message.value;
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form
    myform.reset();
});