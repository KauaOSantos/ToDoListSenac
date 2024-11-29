const tarefa = document.querySelector(".tarefa");
const btnTarefa = tarefa.querySelector(".btnTarefa");

btnTarefa.addEventListener("click", ()=>{
    alterarStatus(tarefa);
});

class Tarefa {
    constructor(titulo) {
        this.titulo = titulo;
        this.addEventoTarefa;
        
        // Ajustar essa parte de baixo para que 
        alterarStatus(tarefa){
            const statusTarefa = ['default', 'feito', 'incompleto', 'nao-feito'];
            let valorInput = tarefa.querySelector('input');
            let statusAtual = statusTarefa.indexOf(valorInput.value);
        
            let proximoStatus = (statusAtual + 1 ) % statusTarefa.length;
            valorInput.value = statusTarefa[proximoStatus];
        
            statusTarefa.forEach(statusAtual => {
                tarefa.classList.remove(statusAtual)
            })
        
            tarefa.classList.add(statusTarefa[proximoStatus])
            console.log(valorInput)
    }
    // ajustar aqui tbm
    add
        this.btnTarefa = this.tarefa.querySelector(".btnTarefa"); 
        this.statusTarefa = ['default', 'feito', 'incompleto', 'nao-feito'];
        this.valorInput = this.tarefa.querySelector('input');
        this.btnTarefa.addEventListener("click", () => this.alterarStatus());
    }

    alterarStatus() {
        let statusAtual = this.statusTarefa.indexOf(this.valorInput.value);
        let proximoStatus = (statusAtual + 1) % this.statusTarefa.length;
        this.valorInput.value = this.statusTarefa[proximoStatus];
        this.statusTarefa.forEach(status => {
            this.tarefa.classList.remove(status);
        });

        this.tarefa.classList.add(this.statusTarefa[proximoStatus]);

        console.log(this.valorInput);
    }
}
const elementoTarefa = document.querySelector(".tarefa");
const minhaTarefa = new Tarefa(elementoTarefa);