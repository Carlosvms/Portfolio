// Titulo dinâmico com efeito de digitação
const texto = 'Tecnologia com propósito.';
const destaque = document.getElementById('destaque');

const titulo = document.getElementById('titulo-dinamico');

let i = 0;
let textoAtual = '';

function digitar() {
  if (i < texto.length) {
    textoAtual += texto[i];
    titulo.firstChild.textContent = textoAtual;
    i++;
    setTimeout(digitar, 80);
  } else {
    destaque.style.transition = 'opacity 1.5s';
    destaque.style.opacity = 1;
  }
}

// Preparar o h1 para receber texto puro sem o conteúdo
titulo.firstChild.textContent = '';
digitar();

// Efeito visual nos botões de rede
const links = document.querySelectorAll(".apresentacao__links__navegacao");

links.forEach(link => {
    link.addEventListener("click", () => {
        link.style.transform = "scale(0.95)";
        setTimeout(() => link.style.transform = "scale(1)", 100);
    });
});

// Ativar animação ao rolar a página
const elementosAnimados = document.querySelectorAll('.scroll-animado');

//const observer = new IntersectionObserver(entries => {
//  entries.forEach(entry => {
//   if (entry.isIntersecting) {
//      entry.target.classList.add('ativo');
//      observer.unobserve(entry.target);
//    }
//  });
//}, {
//  threshold: 0.1
//});

//elementosAnimados.forEach(el => observer.observe(el));

elementosAnimados.forEach(el => el.classList.add('ativo'));