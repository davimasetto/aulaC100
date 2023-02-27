const SpeechRecognition = webkitSpeechRecognition;

const recFala = new SpeechRecognition;
const txtFala = document.getElementById("voiceOut");

function startVoice(){

    txtFala.innerHTML = " ";
    recFala.start();
}

recFala.onresult = function(e) {
    console.log(e);
    const fala =  e.results[0][0].trancript

    console.log(fala);
    txtFala.value = fala;

    //webcam.attach(camera);

    if (fala == "tire minha selfie") {
        console.log("tirando minha selfie...")
        Webcam.attach(camera);
        txtFala.blur();
        sepak();
        //executar função intervalo(nome da função, intervalo(ms)//
        setTimeout(takeSelfie, 5000);
    }
}

function speak() {
    const synth = speechSynthesis;
    // const dadosVoz = txtFala.value;
    const dadosVoz = "Tirando sua selfie em 5 segundos";
    const utterThis = new SpeechSynthesisUtterance(dadosVoz)
    synth.speak(utterThis);
}

function takeSelfie() {
    Webcam.snap(function (dataURI) {
        const result = document.getElementById("result");
        result.innerHTML = " ";
        const imagem = documt.getElementById("img");
        imagem.setAttributes("id", "selfie");
        imagem.setAttributes("isrc", dataURI);
        result.appendChild(imagem);
        console.log(result.children)
    });
    save();
}

function save() {
    const link = document.getElementById("link");
    const imagem = document.getElementById("imagemSelfie").src;
    link.href = imagem;
    link.click()
}