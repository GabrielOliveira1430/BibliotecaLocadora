class Livro{
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = false;

    }

    emprestar(){
        if(this.emprestado){
            console.log(`O livro ${this.titulo} está emprestado`)
            return false;
        }
        this.emprestado = true;
        console.log(`O livro foi emprestado com sucesso`)
        return true;
    }

    devolver(){
        if(!this.emprestado){
            console.log("O livro estava emprestado")
            
            
            return false;
        }
        this.emprestado = false;
        console.log("O livro foi devolvido")
        
        return true

    }
}

let livro1 = new Livro("Aguas profundas", "Arthur N.S")
let livro2 = new Livro("sol e lua", " N.S de castro")





class Filmes{
    constructor(titulo, diretor){
        this.titulo = titulo;
        this.diretor = diretor;
        this.emprestado = false

    }

    emprestar(){
        if(this.emprestado){
            console.log(`O filme ${this.titulo} do diretor ${this.diretor} está emprestado`)
            return false;
        }

        this.emprestado = true;
        console.log(`O filme ${this.titulo} do diretor ${this.diretor} foi emprestado com sucesso`)
        return true
    }

    devolver(){
        if(!this.emprestado){
            console.log(`O filme ${this.titulo} do diretor ${this.diretor} estava emprestado`)
            return false
        }
        this.emprestado = false;
        console.log(`O filme ${this.titulo} do diretor ${this.diretor} foi devolvido`)
        return true
    }


}

let filme1 = new Filmes("A volta", "Franco N.O")
let filme2 = new Filmes("A Ida", "Erika V.")

class Usuario{
    constructor(nome){
        this.nome = nome;
        this.itensEmprestados = []

    }

    pegarItem(item){
        if(!item.emprestado){
            item.emprestar()
            this.itensEmprestados.push(item)
            console.log(`${this.nome} pegou o item: ${item.titulo}`)
        }
        else{console.log(`O item ${item.titulo} já está emprestado`)}
    }
    devolverItem(item){
        const index = this.itensEmprestados.idexof(item)
        if(index !== -1){ // só devolve se estiver na lista do usuario
            item.devolver()// marca como devolver
            this.itensEmprestados.splice(index, 1)//remove da lista
            console.log(`${this.nome} devolveu o item: ${item.titulo}`)
        }else{
            console.log(`${this.nome} não tem o item: ${item.titulo} para devolver`)
        }


    }

    listarIntens(){
        if(this.itensEmprestados.length === 0){
            console.log(`${this.nome} não tem itens emprestados`)
        }
        else{
            console.log(`itens emprestados por ${this.nome}`)
            this.itensEmprestados.forEach(item => {
                console.log(`${item.titulo}`)
            }) 
        }
    }
}

let usuario1 = new Usuario("Ana Oliveira")
let usuario2 = new Usuario("Paulo Souza")



   
   class Biblioteca{
    constructor(){
        this.livros = []

    }
    adicionarLivro(livro){
        this.livros.push(livro)
        console.log(`Livro ${livro.titulo} adicionado a biblioteca`)

    }
    listarLivros(){
        if(this.livros.length === 0){
            console.log(`A biblioteca está vazia`)
        }
        else{
            console.log(`Livros disponiveis na biblioteca`)
            this.livros.forEach(livro => console.log(`${livro.titulo}`))
        }
    }

   }

   class Locadora{
    constructor(){
        this.filme = []
    }

    adicionarFilme(filme){
        
        this.filme.push(filme)
        console.log(`O filme ${titulo.filme} adicionado a locadora`)

    }

    listarFilmes(){
        if(this.filme.length === 0){
            console.log(`A locadora está vazia`)
        }
        else{
            console.log(`filmes disponiveis na locadora`)
            this.filme.forEach(filme => console.log(`${filme.titulo}`))
        }
    }
   }
    