let versuche1 = 3;
let versuche2 = 3;
let versuche3 = 3;
let versuche4 = 3;

/* =========================
   MISSION 1
========================= */

function checkMission1(){

    let pw =
    document.getElementById("answer1").value;

    let gross = /[A-Z]/.test(pw);
    let zahl = /[0-9]/.test(pw);
    let sonder = /[!@#$%^&*(),.?":{}|<>]/.test(pw);

    let result =
    document.getElementById("result1");

    if(
        pw.length >= 12 &&
        gross &&
        zahl &&
        sonder
    ){

        result.innerHTML =
        `
        ✅ Mission erfolgreich!

        <br><br>

        Geheimer Buchstabe:
        <strong>F</strong>

        <br><br>

        <a href="mission2.html" class="next-btn">
        ➡ Nächste Mission
        </a>
        `;

        return;
    }

    versuche1--;

    let fehler = [];

    if(pw.length < 12)
        fehler.push("mindestens 12 Zeichen");

    if(!gross)
        fehler.push("ein Großbuchstabe");

    if(!zahl)
        fehler.push("eine Zahl");

    if(!sonder)
        fehler.push("ein Sonderzeichen");

    if(versuche1 > 0){

        result.innerHTML =
        `❌ Es fehlt: ${fehler.join(", ")}

        <br><br>

        Verbleibende Versuche: ${versuche1}`;

    }else{

        result.innerHTML =
        `🚫 Mission fehlgeschlagen.
        Bitte Seite neu laden.`;
    }

}

/* =========================
   MISSION 2
========================= */

function checkMission2(){

    let answer =
    document.getElementById("answer2")
    .value
    .toLowerCase()
    .trim();

    let result =
    document.getElementById("result2");

    let richtig =
    answer.includes("link") ||
    answer.includes("absender") ||
    answer.includes("domain") ||
    answer.includes("url");

    if(richtig){

        result.innerHTML =
        `
        ✅ Phishing erkannt!

        <br><br>

        Geheimer Buchstabe:
        <strong>E</strong>

        <br><br>

        <a href="mission3.html" class="next-btn">
        ➡ Nächste Mission
        </a>
        `;

        return;
    }

    versuche2--;

    if(versuche2 > 0){

        result.innerHTML =
        `❌ Falsch.

        Tipp:
        Überprüfe Link oder Absender.

        <br><br>

        Versuche übrig:
        ${versuche2}`;

    }else{

        result.innerHTML =
        `🚫 Mission fehlgeschlagen.
        Bitte Seite neu laden.`;
    }

}

/* =========================
   MISSION 3
========================= */

function checkMission3(){

    let answer =
    document.getElementById("answer3")
    .value
    .toLowerCase()
    .trim();

    let result =
    document.getElementById("result3");

    if(answer === "switch"){

        result.innerHTML =
        `
        ✅ Richtig!

        <br><br>

        Geheimer Buchstabe:
        <strong>A</strong>

        <br><br>

        <a href="mission4.html" class="next-btn">
        ➡ Nächste Mission
        </a>
        `;

        return;
    }

    versuche3--;

    if(versuche3 > 0){

        result.innerHTML =
        `❌ Falsch.

        Tipp:
        Das Gerät arbeitet auf Schicht 2.

        <br><br>

        Versuche:
        ${versuche3}`;

    }else{

        result.innerHTML =
        `🚫 Mission fehlgeschlagen.
        Bitte Seite neu laden.`;
    }

}

/* =========================
   MISSION 4
========================= */

function checkMission4(){

    let answer =
    document.getElementById("answer4")
    .value
    .toLowerCase()
    .trim();

    let result =
    document.getElementById("result4");

    if(answer === "ransomware"){

        result.innerHTML =
        `
        ✅ Malware gestoppt!

        <br><br>

        Geheimer Buchstabe:
        <strong>S</strong>

        <br><br>

        <a href="finale.html" class="next-btn">
        🏆 Finale Challenge
        </a>
        `;

        return;
    }

    versuche4--;

    if(versuche4 > 0){

        result.innerHTML =
        `❌ Falsch.

        Tipp:
        Diese Malware verlangt Lösegeld.

        <br><br>

        Versuche:
        ${versuche4}`;

    }else{

        result.innerHTML =
        `🚫 Mission fehlgeschlagen.
        Bitte Seite neu laden.`;
    }

}

/* =========================
   FINALE
========================= */

function checkFinal(){

    let answer =
    document.getElementById("finalAnswer")
    .value
    .toLowerCase()
    .trim();

    let result =
    document.getElementById("finalResult");

    if(answer === "safe"){

        result.innerHTML =
        `
        ✅ Zugriff gewährt!

        <br><br>

        🏆 Herzlichen Glückwunsch!

        <br>

        Du hast den Shieldy Escape Room erfolgreich abgeschlossen.

        <br><br>

        Titel:

        <strong>
        🛡️ Shieldy Cyber Defender
        </strong>
        `;

    }else{

        result.innerHTML =
        "❌ Das Lösungswort ist nicht korrekt.";
    }

}

function checkFinal(){

    let answer =
    document.getElementById("finalAnswer")
    .value
    .toLowerCase()
    .trim();

    let result =
    document.getElementById("finalResult");

    if(answer === "safe"){

        result.innerHTML =
        `
        ✅ Zugang gewährt!

        <br><br>

        🏆 Herzlichen Glückwunsch!

        <br>

        Du hast den Shieldy Escape Room erfolgreich abgeschlossen.

        <br><br>

        Titel:

        <strong>
        🛡️ Shieldy Cyber Defender
        </strong>
        `;

    }else{

        result.innerHTML =
        `
        ❌ Das Lösungswort ist nicht korrekt.

        <br><br>

        Tipp:
        Die Buchstaben ergeben ein englisches Wort für
        „sicher“.
        `;
    }

}

const botButton =
document.getElementById("shieldybot-btn");

const botWindow =
document.getElementById("shieldybot");

botButton.onclick = () => {

    if(botWindow.style.display === "flex"){

        botWindow.style.display = "none";

    }else{

        botWindow.style.display = "flex";

    }

};