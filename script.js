const noButton = document.getElementById("noButton")

noButton.addEventListener("mouseover", () => {

    const x = Math.random() * window.innerWidth
    const y = Math.random() * window.innerHeight

    noButton.style.position = "absolute"
    noButton.style.left = x + "px"
    noButton.style.top = y + "px"

})

function aceitou(){

    const resposta = document.getElementById("resposta")

    resposta.innerHTML = "AAAAAA ❤️ Agora oficialmente você eh minha e eu sou seu >-< !"

    criarExplosaoDeCoracoes()

}

/* corações subindo */

function criarCoracao(){

    const heart = document.createElement("div")

    heart.classList.add("heart")
    heart.innerHTML = "❤️"

    heart.style.left = Math.random() * 100 + "vw"
    heart.style.fontSize = Math.random() * 20 + 20 + "px"

    document.body.appendChild(heart)

    setTimeout(()=>{
        heart.remove()
    },6000)

}

setInterval(criarCoracao, 400)

/* explosão de corações quando clicar sim */

function criarExplosaoDeCoracoes(){

    for(let i=0;i<30;i++){

        setTimeout(criarCoracao, i*100)

    }

}

function criarEstrelas(){

    const starsContainer = document.getElementById("stars")

    for(let i = 0; i < 120; i++){

        const star = document.createElement("div")

        star.classList.add("star")

        star.style.top = Math.random() * 100 + "vh"
        star.style.left = Math.random() * 100 + "vw"

        star.style.animationDuration = (Math.random()*3+2) + "s"

        starsContainer.appendChild(star)

    }

}

criarEstrelas()