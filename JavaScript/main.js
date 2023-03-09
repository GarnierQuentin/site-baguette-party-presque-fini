const boite = document.getElementById("boite")
const plateau = document.getElementById("plateau")
const joueur = document.getElementById("joueur")
const baguette = document.getElementById("baguette")
const baguette_cramee = document.getElementById("baguette_cramee")
const cupcakes = document.getElementById("cupcakes")
const mystery_card = document.getElementById("mystery_card")
const dice = document.getElementById("dice")
const monnaie = document.getElementById("monnaie")
const barricade = document.getElementById("barricade")

const modif_video = document.getElementById("video2")


joueur.addEventListener('click', () => {
    modif_video.src = "assets/boulanger.mp4"
})
