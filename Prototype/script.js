class Veiculo{
    constructor(modelo, marca, cor, numRodas ){
        this.modelo = modelo;
        this.marcar = marca;
        this.cor = cor;
        this.numRodas = numRodas;
    }
    clone(){
        const veic = Object.getPrototypeOf(this);
        return new veic.constructor(this.modelo, this.marcar, this.cor, this.numRodas)
    }
    represent(){
        return `Modelo: ${this.modelo}, Marca: ${this.marcar}, Cor: ${this.cor}, Número De Rodas: ${this.numRodas}`
    }
}
class Carro extends Veiculo{
    constructor(modelo, marca, cor, numRodas, numPortas ){
        super(modelo, marca, cor, numRodas);
        this.numPortas = numPortas;
    }
    represent(){
        return `Carro ---
        Modelo: ${this.modelo}, Marca: ${this.marcar}, Cor: ${this.cor}, 
        Número De Rodas: ${this.numRodas}, Número de Portas: ${this.numPortas}`
    }
}
class Aviao extends Veiculo{
    constructor(modelo, marca, cor, numRodas, numPortas, categoria){
        super(modelo, marca, cor, numRodas, numPortas);
        this.categoria = categoria;
    }
    represent(){
        return `Avião ---
        Modelo: ${this.modelo}, Marca: ${this.marcar}, Cor: ${this.cor}, 
        Número De Rodas: ${this.numRodas}, Número de Portas: ${this.numPortas}, Categoria: ${this.categoria}`
    }
}

class Aplicacao{
    criarVeiculos(){
        const veiculo1 = new Carro('Honca Civic', 2020, 'Preto', 4, 4)
        const veiculo2 = new Carro('BMW', 2022, 'Preto', 4, 2)
        const veiculo3 = new Aviao('PR-XBM', 'TAM', 'Branco', 18, 2, 'Comercial')
        const veiculo4 = new Aviao('EMBRAER', 'AZUL', 'Branco e Azul', 18, 2, 'Comercial')
        
        this.veiculos = [veiculo1, veiculo2, veiculo3, veiculo4]
    }

    clonarveic(){
        const clones = [];
        for(const veiculo of this.veiculos){
            clones.push(veiculo.clone())
        }
        return clones;
    }
    imprimir(veiculos){
        for(const veiculo of veiculos){
            console.log(veiculo.represent());
        }
    }
}

const app = new Aplicacao();
app.criarVeiculos();
const clonarveiculos = app.clonarveic();
app.imprimir(clonarveiculos)