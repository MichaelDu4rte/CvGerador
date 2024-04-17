// variables
const nextButton = document.querySelector('.btn-group .btn-next');
const prevButton = document.querySelector('.btn-group .btn-prev');
const submitButton = document.querySelector('.btn-group .btn-submit');
const steps = document.querySelectorAll('.step'); 
const formSteps = document.querySelectorAll('.form-step'); 

let active = 1; 


// botao de avançar no formulario
nextButton.addEventListener('click', () => { 
    active++; 

    // Verifica se o active  ultrapassa o número total de steps do formulario
    if(active > steps.length) {

        active = steps.length; 
    }

    updateProgress(); // Chama a função para atualizar o progresso 
});

// botao de voltar no formulario
prevButton.addEventListener('click', () => { 
    active--; 

    
    if(active < 1) {
        active = 1; 
    }

    updateProgress(); // Chama a função para atualizar o progresso 
});


// Função para atualizar o progresso
const updateProgress = () => {


    // Itera sobre todos os elementos de passo
    steps.forEach((step, i) => {
        if (i == active-1) { // Verifica se o índice do passo corresponde ao passo ativo
            step.classList.add('active'); // Adiciona a classe 'active' para destacar o passo ativo
            formSteps[i].classList.add('active'); // Adiciona a classe 'active' para destacar o passo do formulário correspondente
        } else {
            step.classList.remove('active'); // Remove a classe 'active' para os passos inativos
            formSteps[i].classList.remove('active'); // Remove a classe 'active' para os passos do formulário inativos
        }
    });

    // Atualiza o estado dos botões com base no passo ativo
    if (active === 1) {
        prevButton.disabled = true; // Desabilita o botão "Previous" se estiver no primeiro passo
        submitButton.disabled = true; // Desabilita o botão de envio se estiver no primeiro passo
    } else if (active === steps.length) {
        nextButton.disabled = true; // Desabilita o botão "Next" se estiver no último passo
        submitButton.disabled = false; // Habilita o botão de envio se estiver no último passo
    } else {
        prevButton.disabled = false; // Habilita o botão "Previous" se estiver em qualquer passo interno
        nextButton.disabled = false; // Habilita o botão "Next" se estiver em qualquer passo interno
        submitButton.disabled = true; // Desabilita o botão de envio se estiver em qualquer passo interno
    }
};
