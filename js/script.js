// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFWx2jK1a_vpogOtaVcg2HJSHfH-dbo_E",
    authDomain: "test-app-ce840.firebaseapp.com",
    databaseURL: "https://test-app-ce840-default-rtdb.firebaseio.com",
    projectId: "test-app-ce840",
    storageBucket: "test-app-ce840.appspot.com",
    messagingSenderId: "298800717417",
    appId: "1:298800717417:web:2441e30019e91a474c0cf8",
    measurementId: "G-Y8V9JPQKSR"
  };

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById('contact-Form').addEventListener("submit",submitForm);

function submitForm(e){
    try{
        e.preventDefault();
    
        var name = getElementVal('name');
        var email = getElementVal('email');
        var website = getElementVal('website');
        var message = getElementVal('message');
    
        // console.log(name,email,website,message);
    
        saveMessages(name,email,website,message);
    
        document.querySelector('.alert').style.display = "block";
    
        // removing alert
        setTimeout(()=>{
            document.querySelector('.alert').style.display = "none";
        },3000);
    
        // reseting the form after submission
        document.getElementById('contact-Form').reset();

    } catch (error) {
        console.log("error=>", error);
    }
}

const saveMessages = (name,email,website,message)=>{
    try {
    var newContactForm = contactFormDB.push();
    
    newContactForm.set({
        name: name,
        email: email,
        website: website,
        message: message
    });
        
    } catch (error) {
        console.log("error=>", error);
    }
        
};

const getElementVal = (id)=>{
    return document.getElementById(id).value;    
};