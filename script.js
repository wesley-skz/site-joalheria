document.addEventListener('DOMContentLoaded', () => {

    // Array de objetos com informações das joias
    const joias = [
        { nome: "Colar Elegance", imagem: "colar.jpg", preco: "R$ 1.500" },
        { nome: "Brincos de Diamante", imagem: "brincos.jpg", preco: "R$ 3.200" },
        { nome: "Anel Solitário", imagem: "anel.jpg", preco: "R$ 2.800" }
    ];

    const galeria = document.querySelector('.galeria-joias');

    // Função para criar os cartões de joias
    joias.forEach(joia => {
        const cartao = document.createElement('div');
        cartao.className = 'cartao-joia';
        cartao.innerHTML = `
            <img src="${joia.imagem}" alt="${joia.nome}">
            <h3>${joia.nome}</h3>
            <p>${joia.preco}</p>
        `;
        galeria.appendChild(cartao);
    });

    // Marketing: Pop-up de boas-vindas
    setTimeout(() => {
        alert("Bem-vindo à Joalheria Brilhante! Inscreva-se para receber 10% de desconto na primeira compra!");
    }, 5000); // Aparece após 5 segundos

    // Marketing: Botão de chamada para ação (CTA)
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', () => {
        // Redireciona para a seção de coleções
        document.getElementById('colecoes').scrollIntoView({ behavior: 'smooth' });
    });
});
