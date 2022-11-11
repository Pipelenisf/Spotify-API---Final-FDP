const localStorage = window.localStorage

function createUserAccount(){

    const userName = document.getElementById("username").value
    const userEmail = document.getElementById("email").value
    const userPassword = document.getElementById("password").value


    const userAccount = {
        name: userName,
        email: userEmail,
        password: userPassword,
        logged: false,
    }

    const userJsonStr = JSON.stringify(userAccount)
    localStorage.setItem("userAccount", userJsonStr)
    
    window.location = "./login.html"
}

