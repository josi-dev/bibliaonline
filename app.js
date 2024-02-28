

     /*fetch("https://api.getbible.net/v2/almeida/1/1.json").then(response => response.json()).then(response => {&&})
    let dadosLocais = localStorage.setItem('livro','Genesis')
    let ddd = localStorage.getItem('livro')*/
    
    
     fetch("https://api.getbible.net/v2/almeida/1.json").then(response => response.json()).then(response => {
        for (i = 0; i < response.chapters[0].verses.length; i++) {
            let primeiroLegend = document.createElement("legend")
            document.getElementById("boxVersus").appendChild(primeiroLegend)
           primeiroLegend.innerHTML =(i+1) + " - " + response.chapters[0].verses[i].text
        }
        
        
        for (i = 0; i < response.chapters.length; i++) {
            let primeiroChapter = document.createElement("option")
            primeiroChapter.innerHTML = i+1
            document.getElementById("selecaoCapitulos").appendChild(primeiroChapter)
        }
        
        
    })
    
    
    
    
    let api; 
    
    function mudancaLivro() {
    let selectLivros = document.getElementById("selecaoLivros").value
    //⬇️remove option do select capitulo⬇️
    let option = [...document.querySelectorAll("#selecaoCapitulos option")]
    
    option.map(ele => {
        document.querySelector("#selecaoCapitulos").removeChild(ele)
    })
    //⬆️remove option do select capitulo⬆️
    
    
    let posicaoLivroArray = nomesLivros.indexOf(selectLivros)
    
    
    
     fetch(`https://api.getbible.net/v2/almeida/${(posicaoLivroArray+1)}.json`).then(response => response.json()).then(response => {api = response; //then continua abaixo
        
        
        for (i = 0; i < response.chapters.length; i++) {
        let newElementOption = document.createElement("option")
        
        let menuUl = document.getElementById("selecaoCapitulos").appendChild(newElementOption)
        
        newElementOption.innerHTML = i+1
    }//1° loop for
        
        
            mudancaCapitulo()
        
        
        
        
        })//final fetch
    


    
    }//fim da function mudancaLivro
    
    
    function mudancaCapitulo() {
        let selectChapter = document.getElementById("selecaoCapitulos").value
        let legend = [...document.querySelectorAll("#boxVersus legend")]
        
        legend.map(ele => {
            document.querySelector("#boxVersus").removeChild(ele)
        })
        
        
        
        for (i = 0; i < api.chapters[(selectChapter-1)].verses.length; i++) {

    let newElementLegend = document.createElement("legend")
    newElementLegend.innerText = (i+1) + " - " + api.chapters[(selectChapter-1)].verses[i].text
    document.getElementById("boxVersus").appendChild(newElementLegend)
    console.log()
        }//2° loop for
        
    }
    
    
/* adicionando conteudo nos option */
    let nomesLivros = ["Gênesis","Êxodo","Levítico","Números","Deuteronômio","Josué","Juízes","Rute","1 Samuel","2 Samuel","1 Reis","2 Reis","1 Crônicas","2 Crônicas","Esdras","Neemias","Ester","Jó","Salmos","Provérbios","Eclesiastes","Cantares","Isaías","Jeremias","Lamentações","Ezequiel","Daniel","Oseias","Joel","Amós","Obadias","Jonas","Miqueias","Naum","Habacuque","Sofonias","Ageu","Zacarias","Malaquias","Mateus","Marcos","Lucas","João","Atos","Romanos","1 Coríntios","2 Coríntios","Gálatas","Efésios","Filipenses","Colossenses","1 Tessalonicenses","2 Tessalonicenses","1 Timóteo","2 Timóteo","Tito","Filemom","Hebreus","Tiago","1 Pedro","2 Pedro","1 João","2 João","3 João","Judas","Apocalipse"]
    
 
    for (i = 0; i < nomesLivros.length; i++) {
        let newElementOption = document.createElement("option")
        
        let menuUl = document.getElementById("selecaoLivros").appendChild(newElementOption)
        newElementOption.innerHTML = nomesLivros[i]
    }
    



    

    
// ------- adicionando versículos na bíblia
    



  


/* adicionando conteudo nos LI */


function caminhoDirecionar(secao) {
    switch (secao) {
        case  'Livros':
            document.getElementById("secao").style.display = 'none'
            document.getElementById("livros").style.display = 'block'
            
            break;
        case 'frases diária':
        document.getElementById("secao").style.display = 'none'
        document.getElementById("FraseDiaria").style.display = 'grid'
        
            break;
            
        case 'Sobre':
        document.getElementById("secao").style.display = 'none'
        document.getElementById("Sobre").style.display = 'block'
            break;
        case 'Quiz':
        location.href = "./quiz/quiz.html"
            break;
        default:
            
      }
}



function fecharPalavraDiaria() {
     document.querySelector("dialog").removeAttribute("open")
     document.getElementById("corpo").style.display = 'block'
}


/* ------- livros --------- */
