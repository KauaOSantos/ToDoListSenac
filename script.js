const tarefa = document.querySelector(".tarefa");
const btnTarefa = tarefa.querySelector(".btnTarefa");

btnTarefa.addEventListener("click", ()=>{
    alterarStatus(tarefa);
});

class Tarefa {
    constructor(titulo) {
        this.titulo = titulo;
        this.statusTarefa = ['default', 'feito', 'incompleto', 'nao-feito'];

        this.tarefa = document.createElement("div");
        this.tarefa.classList.add("tarefa");

        this.tituloElemento = document.createElement("h2");
        this.tituloElemento.textContent = this.titulo;

        this.btnTarefa = document.createElement("button");
        this.btnTarefa.classList.add("btnTarefa");

        this.valorInput = document.createElement("input");
        this.valorInput.type = "hidden";
        this.valorInput.value = "default";

        this.tarefa.appendChild(this.tituloElemento);
        this.tarefa.appendChild(this.btnTarefa);
        this.tarefa.appendChild(this.valorInput);

        this.btnTarefa.addEventListener("click", () => {
            this.alterarStatus();
            toastr.info(`Status da tarefa "${this.titulo}" alterado!`);
        });
    }

    alterarStatus() {
        let statusAtual = this.statusTarefa.indexOf(this.valorInput.value);
        let proximoStatus = (statusAtual + 1) % this.statusTarefa.length;
        this.valorInput.value = this.statusTarefa[proximoStatus];

        this.statusTarefa.forEach(status => {
            this.tarefa.classList.remove(status);
        });

        this.tarefa.classList.add(this.statusTarefa[proximoStatus]);
    }

    getElemento() {
        return this.tarefa;
    }
}

const form = document.forms["formAddTarefa"];
const inputTarefa = document.getElementById("inputTarefa");
const listaTarefa = document.getElementById("listaTarefa");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let titulo = inputTarefa.value.trim();
    if (titulo === "") {
        toastr.error("Por favor, digite uma descrição para a tarefa.");
        return;
    }

    let novaTarefa = new Tarefa(titulo);
    listaTarefa.appendChild(novaTarefa.getElemento());

    toastr.success(`Tarefa "${titulo}" adicionada com sucesso!`);

    inputTarefa.value = ""; 
});