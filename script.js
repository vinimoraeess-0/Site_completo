document.getElementById("meuForm").addEventListener("submit", function(event){
    event.preventDefault();

    //getElementById chama a função do html
    //ligação com o html

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("msg").value;

    if (nome === "" || email === "" || mensagem === ""){
        alert("por favor, preencha todos os campos.");
        return;
    }

    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)){
        alert("por favor, insira um email válido");
        return;
    }

    document.getElementById("exibeNome").innerText = nome;
    document.getElementById("exibeEmail").innerText = email;
    document.getElementById("exibeMensagem").innerText = mensagem;

    alert("formulario enviado com sucesso!")
});


// Adiciona evento ao formulário de contato
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Evita o comportamento padrão de recarregar a página
    event.preventDefault();

    // Coleta os valores dos campos do formulário
    let nome = document.getElementsByName("name")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let mensagem = document.getElementsByName("mensagem")[0].value;

    // Exibe os valores no HTML
    document.getElementById("exibeNome").textContent = nome;
    document.getElementById("exibeEmail").textContent = email;
    document.getElementById("exibeMensagem").textContent = mensagem;

    // Exibe mensagem de sucesso
    alert("Formulário enviado com sucesso!");
});

// Desativa opções de uma questão após selecionar uma resposta
function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }
}

// Reproduz som ao selecionar uma opção
function playsound() {
    let sound = document.getElementById("selecionasom");
    sound.play();
}

// Reseta o formulário do quiz
function resetForm() {
    let form = document.getElementById("quiz-form");
    form.reset();

    // Habilita todas as opções de resposta
    let questions = document.querySelectorAll("input[type='radio']");
    questions.forEach(question => {
        question.disabled = false;
    });

    // Limpa o resultado
    document.getElementById("result").innerHTML = '';
}

// Função para enviar o quiz
function SubmitQuiz() {
    // Respostas corretas
    let correctAnswers = {
        q1: 'A',
        q2: 'B',
        q3: 'B',
        q4: 'A',
        q5: 'A',
        q6: 'A',
        q7: 'A',
        q8: 'C',
        q9: 'A',
        q10: 'B'
    };

    // Conta os acertos
    let score = 0;
    Object.keys(correctAnswers).forEach(question => {
        let selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[question]) {
            score++;
        }
    });

    // Mensagem de resultado
    let totalQuestions = Object.keys(correctAnswers).length;
    let resultMessage = `Você acertou ${score} de ${totalQuestions} questões.`;

    // Exibe o resultado no HTML
    document.getElementById("result").innerHTML = `<h3>${resultMessage}</h3>`;

    // Reproduz som de acordo com o desempenho
    if (score === totalQuestions) {
        document.getElementById("venceusom").play();
    } else {
        document.getElementById("perdeusom").play();
    }
}