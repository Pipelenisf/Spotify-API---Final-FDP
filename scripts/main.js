const localStorage = window.localStorage
const cardContainer = document.getElementById("artist-container")
const artistDetail = document.getElementById("artist-detail")

function validateLoggedUser(){
    const registeredUser = localStorage.getItem("userAccount")
    const userAccount = JSON.parse(registeredUser)

    if(!userAccount.logged){
        window.location.href = "./login.html"
    }
}

const artists = [
    {
        id: 1,
        name: "Bad Bunny",
        type: "Artist",
        popularity: "94",
        followers: "57,998,406",
        genres: [
            "Reggaeton",
            "Trap",
            "Pop",
        ],
        favorite: false,
        image:"https://media.allure.com/photos/615b6f687ed01b98fff0283c/1:1/w_2355,h_2355,c_limit/Allure_BadBunny_1.jpg",
        background: "",
        clicked: "visible",
    },
    
    {
        id: 2,
        name: "Demi Lovato",
        type: "Artist",
        popularity: "94",
        followers: "57,998,406",
        genres: [
            "Reggaeton",
            "Trap",
            "Pop",
        ],
        favorite: false,
        image:"../Recursos/Demi.png",
        background: "background-position: center;",
        clicked: "visible",
    },
    
    {
        id: 3,
        name: "Paramore",
        type: "Artist",
        popularity: "94",
        followers: "57,998,406",
        genres: [
            "Reggaeton",
            "Trap",
            "Pop",
        ],
        favorite: false,
        image:"https://es.rollingstone.com/wp-content/uploads/2021/11/Se-acerca-el-retorno-de-Paramore.jpg",
        background: "background-position: center;",
        clicked: "visible",
    },
    
    {
        id: 4,
        name: "Ariana Grande",
        type: "Artist",
        popularity: "94",
        followers: "57,998,406",
        genres: [
            "Reggaeton",
            "Trap",
            "Pop",
        ],
        favorite: false,
        image:"https://i.pinimg.com/736x/74/c6/b3/74c6b34b2409703cd07a6a049a0d617d.jpg",
        background: "",
        clicked: "visible",
    },
    
    {
        id: 5,
        name: "Dua Lipa",
        type: "Artist",
        popularity: "94",
        followers: "57,998,406",
        genres: [
            "Reggaeton",
            "Trap",
            "Pop",
        ],
        favorite: false,
        image:"https://i.pinimg.com/originals/a3/35/bd/a335bdc851a68a3c4a2644165ef24116.jpg",
        background: "",
        clicked: "visible",
    },
    
    {
        id: 6,
        name: "Shakira",
        type: "Artist",
        popularity: "94",
        followers: "57,998,406",
        genres: [
            "Reggaeton",
            "Trap",
            "Pop",
        ],
        favorite: false,
        image:"https://lastfm.freetls.fastly.net/i/u/770x0/0bc83d1c66b078d69bc7ea7fa77e7716.jpg",
        background: "",
        clicked: "visible",
    },
]

let pos = 0
const card = artists[pos]

function createArtistCard(card){
    return `<div class="artist-pic" onclick="cardClicked()">
    <div class="a-image" style="background-image: url(${card.image}); ${card.background}"></div>
    <span>
    <div class="a-name">${card.name}</div>
    <div class="secondary-icon like"></div>
    </span>
    </div>`
}

function allArtistsCards(){
    artists.forEach(card => {
        cardContainer.innerHTML += createArtistCard(card, pos)
        pos++
    })
}


function cardClicked() {
    artists.forEach(card => {
        document.getElementById("a-name").innerHTML = card.name
        artistDetail.style.visibility = "visible"
    })
    
}

function closeDetail() {
        artistDetail.style.visibility = "hidden"

}

allArtistsCards()
validateLoggedUser()