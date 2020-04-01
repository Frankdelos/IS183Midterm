// class Login {
 
//     constructor() {
 
//     }
 
//     login() {
//         const firstNameInput = document.getElementById('first_name');
//         const lastNameInput = document.getElementById('last_name');
//         const emailInput = document.getElementById('email');
//         let firstname = firstNameInput.value;
//         let lastname = lastNameInput.value;
//         let email = emailInput.value
 
//         if(firstname === 'Franklin' && lastname === 'abc123') {
//             this.goToHome();
//         } else {
//             this.displayError();
//         }
//     }
 
//     displayError() {
//         const errorBox = document.getElementById('error-box');
//         errorBox.innerHTML = 'User not found!';
//         errorBox.style = "display: block;";
//         const interval = setInterval(() => {
//          errorBox.style = "display: none;";
//          clearInterval(interval);
//         }, 5000);
//     }
 
//     goToHome() {
//         window.location.href = 'index.html'
//     }
 
// }
 
// const login = new Login();
class Contact {

    constructor() {

    }


    goToHome() {
        window.location.href = './index.html';
        
    }

}


const contact = new Contact();