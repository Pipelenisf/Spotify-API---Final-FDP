const localStorage = window.localStorage

function validateLoggedUser(){
    const registeredUser = localStorage.getItem("userAccount")
    const userAccount = JSON.parse(registeredUser)

    if(!userAccount.logged){
        window.location.href = "./login.html"
    }
}

