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
        popularity: "78",
        followers: "15,778,356",
        genres: [
            "Pop",
            "Rock",
            "R&B",
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
        popularity: "89",
        followers: "32,398,624",
        genres: [
            "Neutral",
            "Rock",
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
        popularity: "98",
        followers: "87,193,406",
        genres: [
            "R&B",
            "Soul",
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
        followers: "65,729,013",
        genres: [
            "House",
            "Disco",
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
        popularity: "90",
        followers: "30,019,625",
        genres: [
            "Reggaeton",
            "Rock",
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
    var isfav= isfavorite(card.id);

    if (isfav){
        return `<div class="artist-pic">
        <div class="a-image" onclick="cardClicked(`+card.id+`)" style="background-image: url(${card.image}); ${card.background}"></div>
        <span>
        <div class="a-name" onclick="cardClicked(`+card.id+`)">${card.name}</div>
        <div class="favorite-icon like" onclick="removefavorite(`+card.id+`)"></div>
        </span>
        </div>`
    }
    else{
        return `<div class="artist-pic">
        <div class="a-image" onclick="cardClicked(`+card.id+`)" style="background-image: url(${card.image}); ${card.background}"></div>
        <span>
        <div class="a-name" onclick="cardClicked(`+card.id+`)">${card.name}</div>
        <div class="secondary-icon like" onclick="SetLikeArtist(`+card.id+`)"></div>
        </span>
        </div>`
    }
}

function allArtistsCards(){
    cardContainer.innerHTML="";
    artists.forEach(card => {
        cardContainer.innerHTML += createArtistCard(card, pos)
        pos++
    })
}


function cardClicked(idArtistSel) {
    artists.forEach(card => {
        if (card.id== idArtistSel){
            document.getElementById("a-name").innerHTML = card.name;
            document.getElementById("artist-image").style.backgroundImage= "url('"+ card.image+ "')" ;
            document.getElementById("popularity").innerHTML = card.popularity;
            document.getElementById("followers").innerHTML = card.followers;
            document.getElementById("genres").innerHTML= '';

            card.genres.forEach(gen => {
                document.getElementById("genres").innerHTML += `<p class="genre">`+ gen +`</p>`;
            })

            
            artistDetail.style.visibility = "visible"
        }
    })
    
}

function closeDetail() {
        artistDetail.style.visibility = "hidden"

}
function SetLikeArtist(idartist){
    var vFav = null;
if(localStorage.getItem("favorite"))
vFav = localStorage.getItem("favorite")
else vFav="";

vFav += idartist + ',';
localStorage.setItem("favorite",vFav);

allArtistsCards() ;
}

function isfavorite(id) {
    var isfav= false;
    var vFav = localStorage.getItem("favorite");
    if(vFav){
        var arrayfav = vFav.split(",")
        arrayfav.forEach(num => {
            var indexArtist= parseInt(num);
            if (!isNaN(indexArtist)){
               if (indexArtist== id){
                    isfav= true;
               }

            }
            
        })
    }
    return isfav;

}

function removefavorite(id) {
    var vFav = localStorage.getItem("favorite");
    var newFavs= "";

    if(vFav){
        var arrayfav = vFav.split(",")
        arrayfav.forEach(num => {
            var indexArtist= parseInt(num);
            if (!isNaN(indexArtist)){
               if (indexArtist != id){
                    newFavs += indexArtist + ',';
               }

            }
            
        })

        localStorage.setItem('favorite', newFavs);
        allArtistsCards();
    }

}
allArtistsCards()
validateLoggedUser()