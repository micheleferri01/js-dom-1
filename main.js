const lampada = document.getElementById("lampada");
const interruttore = document.getElementById("interruttore");

interruttore.addEventListener("click", lightSwitch);

function lightSwitch () {
    if ((interruttore.innerText.includes("Accendi")) && (lampada.src.includes("white_lamp.png"))){
        lampada.src = "./img/yellow_lamp.png";
        lampada.alt = "luce-accesa";
        interruttore.innerText = "Spegni";
    }
    else{
        lampada.src = "./img/white_lamp.png";
        lampada.alt = "lampada-spenta";
        interruttore.innerText = "Accendi";
    }
}