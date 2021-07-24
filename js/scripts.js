var qtdProdutos = localStorage.getItem('qtdProdutos');

function buscarProdutos() {
    var resposta = prompt('É a sua primeira vez aqui? 1 = Sim, 2 = Não');

    if(resposta == '1'){
        localStorage.setItem('qtdProdutos', '0');
    }else if(resposta == '2'){
        let secaoProdutos = document.getElementsByClassName('main__produtos')[0];

        for(let i = 1; i <= qtdProdutos; i++){
            let produto = JSON.parse(localStorage.getItem(`produto_${i}`));
            
            secaoProdutos.innerHTML += `
            <div class="main__produto produto">
                <p class="produto__id">${produto.id}</p>
                <div class="produto__imagem">
                    <img src="imagens/${produto.nomeImagem}.jpg" alt="Foto do Produto">
                </div>
                <p class="produto__nome">${produto.nome}</p>
                <p class="produto__descricao">${produto.descricao}</p>
                <p class="produto__preco">R$ ${produto.preco}</p>
            </div>`;
        }
    }
}

function cadastrarProduto() {
    let nomeProduto = document.getElementById("nomeProduto").value;
    let nomeImagem = document.getElementById("imagemProduto").value;
    let descricao = document.getElementById("descricaoProduto").value;
    let preco = document.getElementById("precoProduto").value;

    if(nomeProduto == "" || nomeImagem == "" || descricao == "" || preco == ""){
        window.alert("Por favor preencha todos os campos!");
    }else{ 

        let idProduto = Number.parseInt(localStorage.getItem('qtdProdutos')) + 1;
        localStorage.setItem('qtdProdutos', `${idProduto}`);
    
        let produto = {
            id: idProduto,
            nome: nomeProduto,
            nomeImagem: nomeImagem,
            descricao: descricao,
            preco: preco
        }
    
        localStorage.setItem(`produto_${idProduto}`, JSON.stringify(produto));
    
        window.alert("Produto cadastrado com sucesso!");
    }
}

/*function excluirProduto() {
    let idProduto = document.getElementById("idProduto").value;
    localStorage.removeItem(`produto_${idProduto}`);
    localStorage.setItem("qtdProdutos", `${qtdProdutos-1}`);
    window.alert("Produto excluído com sucesso");
}*/