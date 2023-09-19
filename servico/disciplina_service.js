class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length > 0) {
            throw new Error('Discipilna já cadastrada!!!');
        }
        const disciplinaNova = new Disciplina(codigo, nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    pesquisarPorCodigo(codigo) {
        const r = this.repositorio.listar().filter(disciplina => disciplina.codigo === codigo);
        return r[0];
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    inserirAlunoNaDisciplina(matricula, codigo) {
        const alunoPesquisado = controladorAluno.servico.pesquisarPorMatricula(matricula);
        if (alunoPesquisado.length === 0) {
            throw new Error("Aluno não foi cadastrado!");
        }
        const discPesquisada = this._repositorio.listar().filter(disc => disc.codigo === codigo);
        if (discPesquisada.length === 0) {
            throw new Error("Disciplina não foi cadastrada!");
        }
        if (discPesquisada[0].alunos.indexOf(alunoPesquisado[0]) !== -1) {
            throw new Error("Aluno já foi cadastrado nesta disciplina!");
        }
       this.repositorio.inserirAlunoNaDisciplina(alunoPesquisado[0], discPesquisada[0]);
        return alunoPesquisado[0];
    }

    removerDisciplina(codigo) {
        const idx = this.repositorio.disciplinas.indexOf(codigo);
        if(idx === -1) {
            throw new Error("Disciplina não foi cadastrada!");
        }
        this.repositorio.remover(idx);
    }

    
}
