var lista = {}
var flag = 0
var flagHp = 0
var flagMana = 0
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

function carregaDivs(prod = JSON.parse(localStorage['lista'])){   //Recupera a lista salva
    /* var barraHp = document.getElementById("progress-bar")
    var barraMana = document.getElementById("progress-bar2")
    alert(flagH) 
    if(flagHp > 0){
        var barra = JSON.parse(localStorage["Hp"])
        barraHp.innerHTML = barra
    } */
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
                divisaoQuant.id = "texto"+ind
                var imagem = new Image()        //Criação de imagem 1
                var icone = new Image()         //Icone X
                icone.src = "iconeX.png"        //Atribuição de valores
                icone.id = "icone"+ind             //2
                icone.title = "Excluir"         //3
                imagem.width = 100              //3
                imagem.height = 100             //4
                imagem.src = valores[ind] + ".png"  //5
                imagem.title = valores[ind]     //6
                if(valores[ind] == "Hp"){
                    divisao.addEventListener("dblclick", function(e){
                        addVida()
                        var ind = e.currentTarget.id
                        var indice = ind.substring(4,10)        //Pega o indice do item a ser diminuido, tirando a inicial da id = "icone"
                        var prod = JSON.parse(localStorage['lista'])    //Recupera o objeto da memória
                        var chaves = Object.keys(prod)                  //Pega as chaves de acesso
                        var pegaNo = document.getElementById(ind)
                        var pegaId = pegaNo.children[1].id
                        var quant = document.getElementById(pegaId).textContent - 1
                        document.getElementById(pegaId).textContent = quant

                        if(prod[chaves[Number(indice)]] - 1  == 0){
                           
                            delete prod[chaves[Number(indice)]]             //Exclui a chave
                            location.reload()
                            
                        }
                        else{
                            prod[chaves[Number(indice)]] -= 1
                        }
                        
                        
                        localStorage["lista"] = JSON.stringify(prod); //Salvo a lista para recuperar na nova aba
                        
                        })

                        divisao.addEventListener("touchend", function(e){
                            addVida()
                            var ind = e.currentTarget.id
                            var indice = ind.substring(4,10)        //Pega o indice do item a ser diminuido, tirando a inicial da id = "icone"
                            var prod = JSON.parse(localStorage['lista'])    //Recupera o objeto da memória
                            var chaves = Object.keys(prod)                  //Pega as chaves de acesso
                            var pegaNo = document.getElementById(ind)
                            var pegaId = pegaNo.children[1].id
                            var quant = document.getElementById(pegaId).textContent - 1
                            document.getElementById(pegaId).textContent = quant
    
                            if(prod[chaves[Number(indice)]] - 1  == 0){
                               
                                delete prod[chaves[Number(indice)]]             //Exclui a chave
                                location.reload()
                                
                            }
                            else{
                                prod[chaves[Number(indice)]] -= 1
                            }
                            
                            
                            localStorage["lista"] = JSON.stringify(prod); //Salvo a lista para recuperar na nova aba
                            
                            })
                }

                else if(valores[ind] == "Mana"){
                    divisao.addEventListener("dblclick", function(e){
                        addMana()
                        var ind = e.currentTarget.id
                        var indice = ind.substring(4,10)        //Pega o indice do item a ser diminuido, tirando a inicial da id = "icone"
                        var prod = JSON.parse(localStorage['lista'])    //Recupera o objeto da memória
                        var chaves = Object.keys(prod)                  //Pega as chaves de acesso
                        var pegaNo = document.getElementById(ind)
                        var pegaId = pegaNo.children[1].id
                        var quant = document.getElementById(pegaId).textContent - 1
                        document.getElementById(pegaId).textContent = quant

                        if(prod[chaves[Number(indice)]] - 1  == 0){
                            
                            delete prod[chaves[Number(indice)]]             //Exclui a chave
                            location.reload()
                            
                        }
                        else{
                            prod[chaves[Number(indice)]] -= 1
                        }
                        
                        
                        localStorage["lista"] = JSON.stringify(prod); //Salvo a lista para recuperar na nova aba
                        
                        }
                    )
                }

                divisaoQuant.textContent = prod[valores[ind]]   //7
                            //8
                icone.addEventListener("click", function(){

                    var quant = prompt("Quantos itens deseja excluir: ")

                    var indice = this.id.substring(5,10)        //Pega o indice do item a ser excluido, tirando a inicial da id = "icone"
                    var prod = JSON.parse(localStorage['lista'])    //Recupera o objeto da memória
                    var chaves = Object.keys(prod)                  //Pega as chaves de acesso

                    if(quant >= prod[chaves[Number(indice)]]){
                        delete prod[chaves[Number(indice)]]             //Exclui a chave
                    }
                    else{
                        prod[chaves[Number(indice)]] -= quant
                    }
                    
                    localStorage["lista"] = JSON.stringify(prod); //Salvo a lista para recuperar na nova aba
                    location.reload()


                })
                document.getElementById(divisao.id).appendChild(imagem)        //Adiciona a imagem na divisão
                document.getElementById(divisao.id).appendChild(divisaoQuant)   //Adiciona o texto na divisão
                document.getElementById(divisao.id).appendChild(icone)        //Adiciona a imagem na divisão
                }
        }
        
        
    }

}

function mostrarInv(){
    open("Inventário.html", "minhaJanela")  //Abre a aba de inventário
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

function comprar(nome, invent = lista){

    var quant = prompt("Digite a quantidade a ser comprada:")
    if(Number(quant) > 0){
    if(flag > 0){       //Verifica Se é a primeira compra ou não
        invent = JSON.parse(localStorage['lista'])
    }

    
    if(invent[nome] == undefined){      //Verifica se ele já foi criado ou não
        invent[nome] = Number(quant)
    }
    else{
        invent[nome] += Number(quant)       //Cria um objeto
   }
   
   var imageConfirm = document.getElementById("confirm")
   imageConfirm.style.visibility = "visible"
   imageConfirm.addEventListener("click", function(){
       document.getElementById("confirm").style.visibility = "hidden"
   })
   flag +=1
    localStorage["lista"] = JSON.stringify(invent); //Salvo o array para recuperar na nova aba
}
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



function addVida(){
    if(flagHp > 0){

    }
    var barraVida = document.getElementById("rethp")
    var tamanhoBV = parseFloat(window.getComputedStyle(barraVida).width)
    var aumento = (tamanhoBV*10)/100
    var bar = document.getElementById("progress-bar")
    var barraAtual = parseFloat(window.getComputedStyle(bar).width)
    barraAtual += aumento
    var texto = "Vida"
    flagHp = 1
    if (barraAtual > tamanhoBV){
        barraAtual = tamanhoBV
    }

    else{
        var perct = porcentagem(tamanhoBV,barraAtual)
        if(perct < 25){
            bar.style.backgroundColor = "red"
            
        }
        else if(perct < 50){
            bar.style.backgroundColor = "#ff8c00"

        }
        else if(perct < 80){
            bar.style.backgroundColor = "rgb(209, 231, 5)"

        }
        else{
            bar.style.backgroundColor =  "#00FF00"   

        }
        localStorage["Hp"] = JSON.stringify(texto+" " + Math.round(perct) + "/100")
        bar.innerHTML = texto +" " + Math.round(perct) +"/100"
    }




    bar.style.width = barraAtual +"px"
}

function addMana(){
    var barraMana = document.getElementById("retmana")
    var tamanhoBM = parseFloat(window.getComputedStyle(barraMana).width)
    
    var aumentoM = (tamanhoBM*10)/100
    
    var bar = document.getElementById("progress-bar2")
    var barraAtual = parseFloat(window.getComputedStyle(bar).width)
    barraAtual += aumentoM
    var texto = "Mana"
    if (barraAtual > tamanhoBM){
        barraAtual = tamanhoBM
    }

    else{
        var perct = porcentagem(tamanhoBM,barraAtual)
        if(perct < 25){
            bar.style.backgroundColor = "#B0C4DE"	
            
        }
        else if(perct < 50){
            bar.style.backgroundColor = "#ADD8E6"	

        }
        else if(perct < 80){
            bar.style.backgroundColor =  "#00BFFF"   

        }
        else{
            bar.style.backgroundColor =  "#0080FF"

        }
        bar.innerHTML = texto + " " + Math.round(perct) +"/100"
    }




    bar.style.width = barraAtual +"px"
}

function porcentagem(barraCompleta, barraAtual){
    
    var perc = (100 * barraAtual)/barraCompleta
    return perc
}

 
