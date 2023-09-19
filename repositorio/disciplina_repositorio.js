class DisciplinaRepositorio {

    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    remover(codigo) {
        const codigoDisciplinaRemover = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (codigoDisciplinaRemover > -1) {
            this.alunos.splice(codigoDisciplinaRemover, 1);
        }
    }

    listar() {
        return this.disciplinas;
    }

    inserirAlunoNaDisciplina(aluno, disciplina) {
        const index = this.disciplinas.indexOf(disciplina);
        this.disciplinas[index].alunos.push(aluno);
    }

    atualizarNome(indice, novoNome) {
        this.disciplinas[indice].nome = novoNome;
    }
}
