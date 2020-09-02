var lista = {}

var itens = ["Elmo","Mana","Hp"]


window.onload = imprimirImagens()
function abrirTelaAdd(){

    const telaProduto = document.getElementById("telaPro")
    telaProduto.style.background = "red";                   //Destaca a tela

    telaProduto.innerHTML = "Selecione a imagem do produto:" //Informação da tela
    var pegaImage = document.createElement("INPUT")           //Upload da foto
    pegaImage.setAttribute("type", "file")  
    pegaImage.id = "imageUp"
    telaProduto.appendChild(pegaImage)   
                            //Adiciona o botão Upload   

    telaProduto.innerHTML += "<br>Digite o nome do produto: "   //Informação da tela
    var nomeProd = document.createElement("input")              //Input do nome do produto"                                       
    telaProduto.appendChild(nomeProd)                           //Adiciona o input
    
    var buttonConf = document.createElement("button")//Botão de confirmação
    buttonConf.id = "addPro"                         //ID para o css
    buttonConf.textContent = "Adicionar"
    buttonConf.addEventListener("click",function(){
        alert("funfa")
        }
        //var item = document.getElementById("itens")
        //item.appendChild(this.pegaImage)
        

)
    telaProduto.appendChild(buttonConf)

}


class Gerente{
    nome = ''


    

    addProduto(){
        //prod.push(nome)

        
    }

}

function carregaDivs(prod = JSON.parse(localStorage['lista']) ){   //Recupera a lista salva

    var valores = Object.keys(prod)         //Pega as chaves de acessos da lista
    var tamanhoBag = valores.length 
    var myItens = document.getElementById("meusItens")
    for(var ind = 0; ind < 28; ind++){          //Preenche todo o espaço com possiveis locais de itens

        var divisao = document.createElement("figure")
        divisao.id = "item" + ind
        myItens.appendChild(divisao)
        if(ind < tamanhoBag){                   
            if(prod[valores[ind]] > 0){         //Verifica se a quantidade do item é maior que 0 para imprimi-lo

                var divisaoQuant = document.createElement("span")   //Texto com o número de itens que comprou
                var imagem = new Image()        //Criação de imagem 1
                var icone = new Image()         //Icone X
                icone.src = "iconeX.png"        //Atribuição de valores
                icone.id = "icone"+ind             //2
                icone.title = "Excluir"         //3
                imagem.width = 100              //3
                imagem.height = 100             //4
                imagem.src = valores[ind] + ".png"  //5
                imagem.title = valores[ind]     //6
                divisaoQuant.textContent = prod[valores[ind]]   //7
                divisaoQuant.id = "texto"               //8
                icone.addEventListener("click", function(){

                    var confirma = confirm("Deseja excluir o item?")

                    if(confirma){
                        var indice = this.id.substring(5,10)        //Pega o indice do item a ser excluido, tirando a inicial da id = "icone"
                        var prod = JSON.parse(localStorage['lista'])    //Recupera o objeto da memória
                        var chaves = Object.keys(prod)                  //Pega as chaves de acesso
                        delete prod[chaves[Number(indice)]]             //Exclui a chave
                        localStorage["lista"] = JSON.stringify(prod); //Salvo a lista para recuperar na nova aba
                        location.reload()
                    }


                })
                document.getElementById(divisao.id).appendChild(imagem)        //Adiciona a imagem na divisão
                document.getElementById(divisao.id).appendChild(divisaoQuant)   //Adiciona o texto na divisão
                document.getElementById(divisao.id).appendChild(icone)        //Adiciona a imagem na divisão
                }
        }
        
        
    }

}
function mostrarInv(){
    localStorage["lista"] = JSON.stringify(lista); //Salvo a lista para recuperar na nova aba
    open("Inventário.html", "minhaJanela", "height=500,width=500")  //Abre a aba de inventário
    window.onload = carregaDivs()       //Carrega a função para preencher o inventário
}



function abrirJanela() {
    var senha = prompt("Digite a senha:")
    
    if (senha != "123"){
        alert("Senha incorreta")
    }
    else{
        var ger = new Gerente()
        open("gerente.html", "minhaJanela", "height=500,width=500") //Abre a janela caso a senha esteja correta

    }
  }

function comprar(nome,invent = lista){
    
    var quant = prompt("Digite a quantidade a ser comprada:")
    if(invent[nome] == undefined){      //Verifica se ele já foi criado ou não
        invent[nome] = Number(quant)
    }
    else{
        invent[nome] += Number(quant)       //Cria um objeto
   }

   alert(invent[nome])
    //localStorage["lista"] = JSON.stringify(lista); //Salvo o array para recuperar na nova aba
}

function playAudio(url,nome) {
    var a = new Audio(url);
    a.playbackRate = 1.5        //Velocidade do som
    a.play();
    a.onended = function() {
        comprar(nome)
    }}


function imprimirImagens(prod = itens){
    var item = document.getElementById("itens")
    for(var ind = 0; ind < prod.length; ind++){     //Percorre a lista de itens
        var imagem = new Image()
        imagem.src = prod[ind] + ".png"             
        imagem.title = imagem.id = prod[ind]        //Cria uma imagem do item
        var divisao = document.createElement("figure")  
        divisao.id = "item1" + ind                  //id configurada da caixa do item
        item.appendChild(divisao)
        imagem.addEventListener("click", function(){       //Som ao clicar no item
            playAudio("TimeisMoney.mp3",this.id)

        }) 
        document.getElementById(divisao.id).appendChild(imagem)

        
    }   


}
