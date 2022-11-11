const localStorage = window.localStorage

function userLogin(){
    const registeredUser = localStorage.getItem("userAccount")
    const userAccount = JSON.parse(registeredUser)
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    if(userAccount.email === email && userAccount.password === password){
         userAccount.logged = true 
         const userJsonStr = JSON.stringify(userAccount)
         localStorage.setItem("userAccount", userJsonStr)

        window.location.href = "./Main.html"
    }
    else{
        alert("Wrong Email or password: Verify!")
    }
}
