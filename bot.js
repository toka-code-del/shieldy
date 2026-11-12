const botButton =
document.getElementById("shieldybot-btn");

const botWindow =
document.getElementById("shieldybot");

const messages =
document.getElementById("botMessages");

/* CHAT ÖFFNEN */

botButton.addEventListener("click", () => {

    if(botWindow.style.display === "flex"){

        botWindow.style.display = "none";

    }
    else{

        botWindow.style.display = "flex";

    }

});

/* NACHRICHT SENDEN */

function sendMessage(){

    let input =
    document.getElementById("userInput");

    let text =
    input.value.toLowerCase().trim();

    if(text === "") return;

    messages.innerHTML +=
    `<div class="user-message">${text}</div>`;

    let response =
    "Dazu habe ich aktuell keine Informationen.";

    if(text.includes("passwort")){

        response =
        "Ein sicheres Passwort sollte mindestens 12 Zeichen, einen Großbuchstaben, eine Zahl und ein Sonderzeichen enthalten.";

    }
    else if(text.includes("phishing")){

        response =
        "Phishing versucht Benutzer auf gefälschte Webseiten oder betrügerische E-Mails zu locken.";

    }
    else if(text.includes("netzwerk")){

        response =
        "Ein Netzwerk verbindet mehrere Geräte miteinander und ermöglicht den Datenaustausch.";

    }
    else if(text.includes("switch")){

        response =
        "Ein Switch verbindet mehrere Geräte innerhalb eines lokalen Netzwerks.";

    }
    else if(text.includes("router")){

        response =
        "Ein Router verbindet Netzwerke miteinander und stellt den Internetzugang bereit.";

    }
    else if(text.includes("malware")){

        response =
        "Malware ist schädliche Software wie Viren, Trojaner oder Ransomware.";

    }
    else if(text.includes("ransomware")){

        response =
        "Ransomware verschlüsselt Dateien und fordert anschließend Lösegeld.";

    }
    else if(text.includes("hilfe mission 1")){

        response =
        "Prüfe, ob dein Passwort lang genug ist und ein Sonderzeichen enthält.";

    }
    else if(text.includes("hilfe mission 2")){

        response =
        "Achte besonders auf den Link und den Absender der E-Mail.";

    }
    else if(text.includes("hilfe mission 3")){

        response =
        "Das gesuchte Netzwerkgerät arbeitet auf Schicht 2.";

    }
    else if(text.includes("hilfe mission 4")){

        response =
        "Diese Malware verschlüsselt Dateien und verlangt Lösegeld.";

    }

    messages.innerHTML +=
    `<div class="bot-message">${response}</div>`;

    input.value = "";

    messages.scrollTop =
    messages.scrollHeight;
}