function LogIn() {
    var a = document.getElementById("username").value;
    var b = document.getElementById("password").value;

    
    if (a == "adminbem" && b == "bem123") {      
        window.location.href="Masuk.html";
    }else if (a == "adminhimasif" && b == "himasif123") {       
        window.location.href="Masuk.html";
    }else if (a == "adminlaos" && b == "laos123") {      
         window.location.href="Masuk.html";
    } else  if (a == "adminmaco" && b == "maco123") {       
        window.location.href="Masuk.html";
    } else if (a == "adminetalase" && b == "etalase123") {   
         window.location.href="Masuk.html";
    } else if (a == "adminbalwana" && b == "balwana123") {       
        window.location.href="Masuk.html";
    } else  if (a == "adminbinary" && b == "binary123") {       
        window.location.href="Masuk.html";
    }
    else {
        alert("Password atau Username Salah");
    }
}