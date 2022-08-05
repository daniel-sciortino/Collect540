function popUpForm() {
    document.getElementById("home-container").style.visibility = "hidden";
    document.getElementById("send-email-container").style.visibility = "visible";

    console.log("working");
}


document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userName= e.target.elements.name.value;
    var userEmail= e.target.elements.email.value;
    var userMessage= e.target.elements.message.value;
console.log(userMessage)
  
  });