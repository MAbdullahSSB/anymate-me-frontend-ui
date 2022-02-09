function Login() {
    
    var email = document.getElementById('input_email').value
    var password = document.getElementById('input_password').value


    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://anymate-me-backend-api.herokuapp.com/signin", false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
    email:email,
    password:password,
}));

    
    if(xhr.status == 200)
    {
      window.location.href = "/interface.html";
    }
    else
    {
      alert(Object.values(JSON.parse(xhr.response)));
    }

  }


