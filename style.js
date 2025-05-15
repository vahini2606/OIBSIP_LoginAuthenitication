var attempt = 3;

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "formget" && password == "formget@1234"){
            alert("Login Successfully");
            window.location = "success.html";
            return false;
    }
    else{
        attempt--;
        alert("you have left "+attempt+"attempt");

        if(attempt == 0){
            document.getElementById("username").disable = true;
            document.getElementById("password").disable = true;
            document.getElementById("submit").disable = true;
            return false;
        }
    }
}