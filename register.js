// Your web app's Firebase configuration
// api for firebase

var firebaseConfig = {
    apiKey: "AIzaSyBlddgLoK1Jsy8DvFaMORaT1sy9q0ExE-c",
    authDomain: "inception-bro-s.firebaseapp.com",
    projectId: "inception-bro-s",
    storageBucket: "inception-bro-s.appspot.com",
    messagingSenderId: "347344553732",
    appId: "1:347344553732:web:0b9006ded35c7f8ad17251"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Set up our register function
function register() {
    // Get all our input fields
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    username = document.getElementById('username').value;

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!');
        return;
        // Don't continue running the code
    }
    if (validate_field(username) == false) {
        alert('One or More Extra Fields is Outta Line!!');
        return;
    }

    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser;

            // Add this user to Firebase Database
            var database_ref = database.ref();

            // Create User data
            var user_data = {
                email: email,
                username: username,
                last_login: Date.now(),
            };

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data);

            // DOne
            alert('User Created!!');
        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code;
            var error_message = error.message;

            alert(error_message);
        });
}

// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if (expression.test(email) == true) {
        // Email is good
        return true;
    } else {
        // Email is not good
        return false;
    }
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
        return false;
    } else {
        return true;
    }
}

function validate_field(field) {
    if (field == null) {
        return false;
    }

    if (field.length <= 0) {
        return false;
    } else {
        return true;
    }
}


const menuButton = document.querySelector('#menu-toggle'); // Updated to match the correct ID
const closeIcon = document.querySelector('#close-icon'); // Updated to match the correct ID
const navbar = document.querySelector('#navbar');
const overlay = document.querySelector('#overlay');

menuButton.addEventListener('click', () => {
    navbar.classList.add('show-menu');
    overlay.style.display = 'block';
    closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    navbar.classList.remove('show-menu');
    overlay.style.display = 'none';
    closeIcon.style.display = 'none';
});

overlay.addEventListener('click', () => {
    navbar.classList.remove('show-menu');
    overlay.style.display = 'none';
    closeIcon.style.display = 'none';
});

$(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon');
});
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon');
});

    