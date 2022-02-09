function Register() {
    var first_name = document.getElementById('input_first_name').value
    var last_name = document.getElementById('input_last_name').value
    var firm_name = document.getElementById('input_firmname').value
    var branch = document.getElementById('input_branch').value
    var email = document.getElementById('input_email').value
    var number = document.getElementById('input_number').value
    var password = document.getElementById('input_password').value
    var rpassword = document.getElementById('input_r_password').value


    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://anymate-me-backend-api.herokuapp.com/register", false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
    fname: first_name,
    lname: last_name,
    company:firm_name,
    branch:branch,
    email:email,
    phone:number,
    password:password,
    rpassword:rpassword
}));

    
    if(xhr.status == 201)
    {
      alert("User Registered.Signin On The Next Page")
      window.location.href = "/login_screen.html";
    }
    else
    {
      alert(Object.values(JSON.parse(xhr.response)));
    }

  }


