class Lanche {
    constructor(n, desc, prec, pao, acomp, obs, img, i){
        this.nome = n;
        this.descricao = desc;
        this.preco = prec;
        this.pao = pao;
        this.acompanhamento = acomp;
        this.observacao = obs;
        this.imagem = img;
        this.id = i;
    }

    card(){
        let article = document.createElement("article");
        article.classList.add("dog-card");
        article.innerHTML = `
            <img src="./imgspr/${this.imagem}" />
            <div class="dog-card-body">
                <h3>${this.nome}</h3>
                <div class="dog-meta">Preço: ${this.preco}</div>
                <div class="dog-meta">Pão: ${this.pao}</div>
                <a class="btn" href="detalharpr.html?id=${this.id}">Ver detalhes →</a>
            </div>
        `;
        return article;
    }

    detalhe(){
        return `
            <div class="detail-photo">
                <img src="./imgspr/${this.imagem}" />
            </div>
            <div class="detail-info">
                <h1>${this.nome}</h1>
                <p>${this.descricao}</p>
                <ul class="detail-list">
                    <li>Valor: ${this.preco}</li>
                    <li>Pão: ${this.pao}</li>
                    <li>Acompanhamento: ${this.acompanhamento}</li>
                    <li>Preparo: ${this.observacao}</li>
                </ul>
            </div>
        `
    }
}

const l1 = new Lanche(
    "Pão Francês de Frango Cremoso",
    "Pão francês crocante por fora e macio por dentro, recheado com frango desfiado super suculento e bem temperado, coberto com queijo derretido, vinagrete fresquinho de tomate e milho, e finalizado com cheiro-verde.",
    "R$ 16,90",
    "Pão Francês Crocante",
    "Maionese especial da casa",
    "Feito na hora, bem quentinho",
    "pao_frango.jpg",
    1
);

const l2 = new Lanche(
    "Pão Francês de Carne Desfiada",
    "Pão francês quentinho e crocante com recheio generoso de carne bovina desfiada e suculenta ao molho, muito queijo derretido, toque fresco de tomate picado, milho e salsinha.",
    "R$ 18,90",
    "Pão Francês Crocante",
    "Maionese temperada da casa",
    "Feito na hora, bem quentinho",
    "pao_carne.jpg",
    2
);

const l3 = new Lanche(
    "Pão Francês de Calabresa Acebolada",
    "Pão francês crocante recheado com rodelas de linguiça calabresa dourada na chapa com cebola caramelizada, coberto com queijo derretido, tomate picado, milho e cheiro-verde.",
    "R$ 16,90",
    "Pão Francês Crocante",
    "Maionese especial da casa",
    "Dourado na chapa na hora",
    "pao_calabresa.jpg",
    3
);

const l4 = new Lanche(
    "Pão Francês de Salmão Grelhado",
    "Uma opção especial e irresistível. Pão francês crocante com lascas suculentas de salmão grelhado, coberto com queijo cremoso derretido, tomate picado, milho e salsinha fresca.",
    "R$ 24,90",
    "Pão Francês Crocante",
    "Maionese da casa",
    "Salmão grelhado fresco",
    "pao_salmao.jpg",
    4
);

const l5 = new Lanche(
    "Misto Supremo (Queijo e Presunto)",
    "O clássico elevado ao máximo. Pão francês crocante recheado com fatias dobradas de presunto selecionado e uma camada absurdamente generosa de queijo mussarela derretendo.",
    "R$ 12,90",
    "Pão Francês Crocante",
    "Maionese temperada da casa",
    "Queijo derretido na hora",
    "pao_presunto.jpg",
    5
);

const l6 = new Lanche(
    "Pão Francês com Ovo e Queijo",
    "Simples, perfeito e cheio de sabor. Pão francês crocante recheado com ovos fritos na medida certa e muito queijo mussarela derretido escorrendo.",
    "R$ 11,90",
    "Pão Francês Crocante",
    "Maionese especial da casa",
    "Ovos fritos na hora",
    "pao_ovo.jpg",
    6
);

const lista = [l1, l2, l3, l4, l5, l6];