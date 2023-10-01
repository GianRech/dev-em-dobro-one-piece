// window.alert("oi") Esse comando faz com que o objeto 'window' puxe um método 'alerta' e mostre no navegador uma caixa pop-up com o que estiver escrito dentro das aspas duplas.

/* O que precisamos fazer? - Quando o usuário clicar em um botão de personagem na lista temos que 
marcar o botão como selecionado, desselecionar o botão anterior e mostrar o personagem correspondente.

    OBJETIVO 1 - Quando clicar no botão do personagem na lista, marcar o botão como único selecionado.
        Passo 1.1 - Pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles.
        Passo 1.2 - Adicionar a classe "selecionado" ao botão que o usuário clicou.
        Passo 1.3 - Verificar se já existia um botão selecionado antes e, se sim, remover a seleção dele.

    OBJETIVO 2 - Quando clicar no botão do personagem, mostrar a imagem e informações do personagem correto.
        Passo 2.1 - Pegar os personagens no JS pra deixar engatilhada a vinculação ao botão clicado.
        Passo 2.2 - Adicionar a classe "selecionado" ao personagem cujo botão o usuário clicou.
        Passo 2.3 - Verificar se já existia um personagem selecionado antes e, se sim, remover a seleção dele. */

// Passo 1.1:
const botoes = document.querySelectorAll(".botao");

// Passo 2.1:
const personagens = document.querySelectorAll(".personagem");

// Passo 1.2 e 2.2:
botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => { /*addEventListener só funciona em um elemento, não em uma lista, por isso daria erro com 'botoes'*/
    // Passo 1.3:
    desselecionarBotao();
    // Passo 2.3:
    desselecionarPersonagem();
    // Passo 1.2 (continuação):
    botao.classList.add("selecionado");
    // Passo 2.2 (continuação):
    personagens[indice].classList.add("selecionado");
  });
});

// Passo 1.3:
function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

// Passo 2.3:
function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}