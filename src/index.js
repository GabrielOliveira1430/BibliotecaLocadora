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

const livro1 = new Livro("Aguas profundas", "Arthur N.S")
const livro2 = new Livro("sol e lua", " N.S de castro")






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

class Usuario {
  constructor(nome) {
    this.nome = nome;
    this.itensEmprestados = [];
  }

  pegarItem(item) {
    if (!item.emprestado) {
      
      item.emprestar();
      this.itensEmprestados.push(item);
      console.log(`${this.nome} pegou o item: ${item.titulo}`);
    } else {
      console.log(`O item ${item.titulo} já está emprestado`);
    }
  }

  devolverItem(item) {
    
    const index = this.itensEmprestados.indexOf(item);
    if (index !== -1) {
      item.devolver(); 
      this.itensEmprestados.splice(index, 1); 
      console.log(`${this.nome} devolveu o item: ${item.titulo}`);
    } else {
      console.log(`${this.nome} não tem o item: ${item.titulo} para devolver`);
    }
  }

  
  listarItens() {
    if (this.itensEmprestados.length === 0) {
      console.log(`${this.nome} não tem itens emprestados`);
    } else {
      console.log(`Itens emprestados por ${this.nome}:`);
      this.itensEmprestados.forEach(item => {
        console.log(`- ${item.titulo}`);
      });
    }
  }
}


   
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
        console.log(`O filme ${filme.titulo} foi adicionado a locadora`)

    }

    listarFilmes(){
        if(this.filme.length === 0){
            console.log(`A locadora está vazia`)
        }
        else{
            console.log(`filmes disponiveis na locadora`)
            this.filme.forEach(filme => console.log(`- ${filme.titulo} (${filme.emprestado ? "Emprestado" : "Disponível"})`))
        }
    }
   }

   
const biblioteca = new Biblioteca();
const locadora = new Locadora();
const usuarios = []




   
    const readline =require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout


    })
function mostrarMenu() {
  console.log("\n==== MENU ====");
  console.log("1 - Adicionar livro");
  console.log("2 - Adicionar filme");
  console.log("3 - Adicionar usuário");
  console.log("4 - Listar livros");
  console.log("5 - Listar filmes");
  console.log("6 - Usuário pegar item");
  console.log("7 - Usuário devolver item");
  console.log("8 - Listar itens do usuário");
  console.log("0 - Sair");
}

function iniciar() {
  mostrarMenu();
  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        rl.question("Título do livro: ", (titulo) => {
          rl.question("Autor do livro: ", (autor) => {
            biblioteca.adicionarLivro(new Livro(titulo, autor));
            iniciar();
          });
        });
        break;

      case "2":
        rl.question("Título do filme: ", (titulo) => {
          rl.question("Diretor do filme: ", (diretor) => {
            locadora.adicionarFilme(new Filmes(titulo, diretor));
            iniciar();
          });
        });
        break;

      case "3":
        rl.question("Nome do usuário: ", (nome) => {
          usuarios.push(new Usuario(nome));
          console.log(`Usuário ${nome} adicionado.`);
          iniciar();
        });
        break;

      case "4":
        biblioteca.listarLivros();
        iniciar();
        break;

      case "5":
        locadora.listarFilmes();
        iniciar();
        break;

      case "6":
        if (usuarios.length === 0) {
          console.log("Nenhum usuário cadastrado.");
          iniciar();
          break;
        }
        rl.question("Nome do usuário: ", (nomeUser) => {
          const user = usuarios.find(u => u.nome === nomeUser);
          if (!user) {
            console.log("Usuário não encontrado.");
            iniciar();
            return;
          }
          rl.question("Digite L para Livro ou F para Filme: ", (tipo) => {
            if (tipo.toUpperCase() === "L") {
              biblioteca.listarLivros();
              rl.question("Digite o título do livro: ", (titulo) => {
                const item = biblioteca.livros.find(l => l.titulo === titulo);
                if (item) user.pegarItem(item);
                else console.log("Livro não encontrado.");
                iniciar();
              });
            } else {
              locadora.listarFilmes();
              rl.question("Digite o título do filme: ", (titulo) => {
                const item = locadora.filmes.find(f => f.titulo === titulo);
                if (item) user.pegarItem(item);
                else console.log("Filme não encontrado.");
                iniciar();
              });
            }
          });
        });
        break;

      case "7":
        rl.question("Nome do usuário: ", (nomeUser) => {
          const user = usuarios.find(u => u.nome === nomeUser);
          if (!user) {
            console.log("Usuário não encontrado.");
            iniciar();
            return;
          }
          user.listarItens();
          rl.question("Digite o título do item para devolver: ", (titulo) => {
            const item = user.itensEmprestados.find(i => i.titulo === titulo);
            if (item) user.devolverItem(item);
            else console.log("Item não encontrado na lista do usuário.");
            iniciar();
          });
        });
        break;

      case "8":
        rl.question("Nome do usuário: ", (nomeUser) => {
          const user = usuarios.find(u => u.nome === nomeUser);
          if (user) user.listarItens();
          else console.log("Usuário não encontrado.");
          iniciar();
        });
        break;

      case "0":
        console.log("Saindo...");
        rl.close();
        break;

      default:
        console.log("Opção inválida.");
        iniciar();
    }
  });
}


iniciar();
