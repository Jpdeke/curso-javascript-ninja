/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['joao', 1 , 3 , 5 , true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction1 (arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction1(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2 (arg , x) {
    return (arg[x]);
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr1 = [ 'pedro', 1.9 , true , ['joao',20], {b: 2}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( myFunction1(arr1 , 0) ); //(0) "pedro"
console.log( myFunction1(arr1 , 1) ); //(1) 1.9
console.log( myFunction1(arr1 , 2) ); //(2) True
console.log( myFunction1(arr1 , 3) ); //(3) ['joao',20]
console.log( myFunction1(arr1 , 4) ); //(4) {b: 2}
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book ( parmet ) {
     let allBooks = {
        'Segredos do Ninja Js':{
            quantidadePaginas: 480,
            autor: 'John Resing & Bear Bibeault',
            editora: 'Novatec'                        
        },
        'Introducao ao Mundo Js': {
            quantidadePaginas: 220,
            autor: 'Bruce Lawson & Remy Sharp',
            editora: 'Alta Books'
        },
        'Aulas Gratuitas do Verdadeiro': {
            quantidadePaginas: 20,
            autor: 'Fallen o Vardadeiro',
            editora: 'Gamers Academy' 
        }          
    };   
    return !parmet ? allBooks : allBooks[ parmet ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( 'O livro Aulas Gratuitas do Verdadeiro tem ' + book( 'Aulas Gratuitas do Verdadeiro' ).quantidadePaginas+ " páginas!" );
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O Autor do Livro Introducao ao Mundo Js é '+book('Introducao ao Mundo Js').autor );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Segredos do Ninja Js foi publicado pela editora "+book('Segredos do Ninja Js').editora);

