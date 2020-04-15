# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x , y){
  somando = x+y;
  return somando;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
vari1 = 5;
cari2 = 14;
resultado = soma(vari1 , vari2);

// Qual o valor atualizado dessa variável?
19

// Declare uma nova variável, sem valor.
var vazia;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function incremento(x){
  ++x;
  return alert("O valor da variável agora é "+x);
}

// Invoque a função criada acima.
incremento(vazia);

// Qual o retorno da função? (Use comentários de bloco).
/*
  'O valor da variavel agora é 1'
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function doit (x , y , z){
var resultado = 0;
  if(x != null && y != null && z != null){
    resultado = (x*y*z+2);
    return resultado;
  }else if( x === null || y === null || z === null ){
    return alert("Preencha todos os valores corretamente !");
  }else{
    return alert("Erro na função!");
  } 
}

// Invoque a função criada acima, passando só dois números como argumento.
doit(6,7);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente !

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
x=1;
y=2;
z=3;
doit(x,y,z);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
  8
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function doit2 (x,y,z){
  if(x != null && y == null && z == null){
    return x;
  }else if(x != null && y != null && z == null){
    return x+y;
  }else if(x != null && y != null && z != null){
    return ((x+y)/z);
  }else if(x == null && y == null && z == null){
    return false;
  }else{
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
x = 5;y = 5; z = 2;
doit2();
doit2(x);
doit2(x,y);
doit2(x,y,z)
```
