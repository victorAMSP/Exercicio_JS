const btnTarefa = document.querySelector('.btn-tarefa');
const ul = document.querySelector('.tarefas');
const inputTarefa = document.querySelector('.input-tarefa');

btnTarefa.addEventListener('click', function(event) {
    const tarefa = inputTarefa.value;
    if (!tarefa) return;
    criaTarefa(tarefa);
});

inputTarefa.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        const tarefa = inputTarefa.value;
        if (!tarefa) return;
        criaTarefa(tarefa);
    }
});

document.addEventListener('click', function(event) {
    const el = event.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(tarefa) {
    const li = criaLi();
    li.innerHTML = tarefa;
    ul.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.classList.add('apagar');
    btnApagar.innerText = 'Apagar';
    li.appendChild(btnApagar);
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function salvarTarefas() {
    const liTarefas = ul.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();