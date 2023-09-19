class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const codigoElemento = document.querySelector("#codigo");
        const nomeDisciplinaElemento = document.querySelector("#nome-disciplina");
        const disciplinaInserida = this.servico.inserir(Number(codigoElemento.value), nomeDisciplinaElemento.value);
        const listaDisciplinasElemento = document.querySelector("#lista-disciplinas");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Nome: ${disciplina.nome} - Codigo: ${disciplina.codigo}`;
        elementoDestino.appendChild(disciplinaElemento);
    }

    inserirAlunoNaDisciplina() {
        const matriculaElemento = document.querySelector( '#matricula-na-disciplina' );
        const codigoElemento = document.querySelector( '#codigo-discplina' );
        const alunoInserido = this.servico.inserirAlunoNaDisciplina( matriculaElemento.value, Number(codigoElemento.value) );
        const listaDisciplinasElemento = document.querySelector('#lista-alunos');
        
        if (alunoInserido) {
            this.inserirAlunosNoHTML( codigoElemento.value, alunoInserido.nome, listaDisciplinasElemento );
        }
    }

    inserirDisciplinasNoHTML(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Codigo: ${disciplina.codigo} - Nome: ${disciplina.nome}`;
        elementoDestino.appendChild(disciplinaElemento );
    }

    inserirAlunosNoHTML(codigo, aluno, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Codigo da disciplina: ${codigo} - Aluno: ${aluno}`;
        elementoDestino.appendChild(disciplinaElemento);
    }

}
