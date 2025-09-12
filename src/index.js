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
        this.emprestado == true;
        console.log(`O livro foi emprestado com sucesso`)
        return true;
    }

    devolver(){
        if(!this.emprestado){
            console.log("O livro estava emprestado")
            
            
            return false
        }
        this.emprestado === false
        console.log("O livro foi devolvido")
        
        return true

    }
}

let livro1 = new Livro("Aguas profundas", "Arthur N.S")
let livro2 = new Livro("sol e lua", " N.S de castro")


   
    