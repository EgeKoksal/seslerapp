const modlar = [
    "beach", "birds", "cafe", "campfire", "city", "fireplace", "forest", "heavy-rain", "night-crickets", "rain-camping", "rain", "rain-windshield", "snow", "thunder", "train"
]

const calanModlar = []

const kokEleman = document.querySelector("#root")
const bilgiEleman = document.querySelector("#bilgi")

function renderKartlar() {
    kokEleman.innerHTML = ""

    modlar.forEach( eleman=>{
        const HTMLSablonu = `
            <div class="kart" data-mod="${eleman}">
                <img src="img/${eleman}.jpg">
                <h2>${eleman.replace("-", " ")}</h2>
                <audio loop src="audio/${eleman}-sound.mp3" data-mod="${eleman}"></audio>
            </div>
        `
        kokEleman.insertAdjacentHTML("beforeend", HTMLSablonu)

        /* 
            const kartlar = document.querySelectorAll(".kart")
            const sonKart = kartlar[kartlar.length-i]
            sonKart.addEventListener( "click", olay=>{
                //.....
            } )
        */
    } )

    sesOlaylari()
}

function sesOlaylari() {
    const kartlar = document.querySelectorAll(".kart")

    kartlar.forEach(kartElemani=> {
        kartElemani.addEventListener( "click", olay=>{
            const kartSesi = kartElemani.querySelector("audio")

            if( kartSesi.paused !== true ) { // çalıyor
                kartSesi.pause()
                kartElemani.classList.remove("aktif")

                const modIndex = calanModlar.findIndex(elem=>elem === kartElemani.dataset.mod)
                calanModlar.splice(modIndex, 1)
            } else { // çalmıyor
                kartSesi.play()
                kartElemani.classList.add("aktif")

                calanModlar.push(kartElemani.dataset.mod)
            }

            renderBilgi()
        } )
    })
}

function renderBilgi() {
    const modlar = calanModlar.join(", ")
    
    bilgiEleman.innerHTML = `
        Şuan çalıyor(${calanModlar.length}): ${modlar.replace("-", " ")}
    `

    // yöntem 2
   /*  const sesElemanlari = document.querySelectorAll("audio")
    sesElemanlari.forEach(sesElemani=>{
        const mod = sesElemani.dataset.mod
        if( !sesElemani.paused )
            console.log(mod);
    }) */
}

renderKartlar()
renderBilgi()