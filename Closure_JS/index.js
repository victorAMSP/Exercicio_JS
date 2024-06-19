// Função closure
// Uma closure é uma função que "lembra" do ambiente — ou escopo léxico — em que foi criada.
// Em outras palavras, uma closure permite acessar variáveis de um escopo exterior a ela.

// Exemplo de closure

function init() {
    const exemplo = 'Essa variável';

    return function () {
        console.log(`1 - O valor da variável exemplo é: ${exemplo}.`);

        return function () {
            console.log(`2 - O valor da variável exemplo é: ${exemplo}.`);

            return function () {
                console.log(`3 - O valor da variável exemplo é: ${exemplo}.`);
            };
        };
    };
}

const initFn1 = init(); // 1 - O valor da variável exemplo é: Essa variável.
const initFn2 = initFn1(); // 2 - O valor da variável exemplo é: Essa variável.
const initFn3 = initFn2(); // 3 - O valor da variável exemplo é: Essa variável.

init()()()(); // 1 - O valor da variável exemplo é: Essa variável.
// 2 - O valor da variável exemplo é: Essa variável.
// 3 - O valor da variável exemplo é: Essa variável.

// Exemplo de closure com parâmetros

function init2() {
    const exemplo = 'Essa variável';

    return function (nome) {
        return function (sobrenome) {
            console.log(`Olá ${nome} ${sobrenome}.`);
        };
    };
}

const initFn4 = init2(); // undefined
const initFn5 = initFn4('Luiz'); // undefined
initFn5('Otávio'); // Olá Luiz Otávio.

init2()('Luiz')('Otávio'); // Olá Luiz Otávio.
// No exemplo acima, a função init2 retorna uma função que recebe um parâmetro nome e retorna outra função que recebe um parâmetro sobrenome.
// A função init2 é chamada e atribuída à variável initFn4. Como a função init2 não recebe nenhum parâmetro, ela retorna undefined.
// A função initFn4 é chamada com o parâmetro 'Luiz' e atribuída à variável initFn5. Como a função initFn4 não retorna nada, ela também retorna undefined.
// A função initFn5 é chamada com o parâmetro 'Otávio' e exibe a mensagem Olá Luiz Otávio..

// Exemplo de closure com parâmetros e retorno

function init3() {
    const exemplo = 'Essa variável';

    return function (nome) {
        return function (sobrenome) {
            return function () {
                console.log(`${nome} ${sobrenome}.`);
            };
        };
    };
}

const initFn6 = init3(); // undefined
const initFn7 = initFn6('Luiz'); // undefined
const initFn8 = initFn7('Otávio'); // undefined
initFn8(); // Luiz Otávio.

init3()('Luiz')('Otávio')(); // Luiz Otávio.
// No exemplo acima, a função init3 retorna uma função que recebe um parâmetro nome e retorna outra função que recebe um parâmetro sobrenome e retorna outra função que não recebe parâmetros.
// A função init3 é chamada e atribuída à variável initFn6. Como a função init3 não recebe nenhum parâmetro, ela retorna undefined.
// A função initFn6 é chamada com o parâmetro 'Luiz' e atribuída à variável initFn7. Como a função initFn6 não retorna nada, ela também retorna undefined.
// A função initFn7 é chamada com o parâmetro 'Otávio' e atribuída à variável initFn8. Como a função initFn7 não retorna nada, ela também retorna undefined.
// A função initFn8 é chamada e exibe a mensagem Luiz Otávio..

// Exemplo de closure para criar um contador

function contador() {
    let contador = 0;

    return function () {
        contador++;
        return contador;
    };
}

const incrementar = contador();
console.log(incrementar()); // 1
console.log(incrementar()); // 2
console.log(incrementar()); // 3

// No exemplo acima, a função contador retorna uma função que incrementa o valor da variável contador a cada chamada.
// A função contador é chamada e atribuída à variável incrementar.
// A função incrementar é chamada e exibe o valor 1.
// A função incrementar é chamada novamente e exibe o valor 2.
// A função incrementar é chamada novamente e exibe o valor 3.

// Exemplo de closure para criar uma função factory

function criaPessoa(nome, sobrenome) {
    return {
        get nome() {
            return `${nome} ${sobrenome}`;
        },
        set nome(value) {
            const partes = value.split(' ');
            this.nome = `${partes.shift()} ${partes.join(' ')}`;
        }
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio');
pessoa1.nome = 'Luiz Fernando';
console.log(pessoa1.nome); // Luiz Fernando

// No exemplo acima, a função criaPessoa retorna um objeto com as propriedades nome e sobrenome.
// A propriedade nome é uma função getter que retorna o nome completo da pessoa.
// A propriedade nome é uma função setter que altera o nome completo da pessoa.
// A função criaPessoa é chamada com os parâmetros 'Luiz' e 'Otávio' e atribuída à variável pessoa1.
// O nome da pessoa1 é alterado para 'Luiz Fernando'.
// O nome da pessoa1 é exibido no console.

