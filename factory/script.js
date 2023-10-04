//classe Pai
class Computador {
    constructor(ram, hdd, cpu, type) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
        this.type = type;
    }
    getRAM() {
        return this.ram + " GB";
    }

    getHDD() {
        return this.hdd + " GB";
    }

    getCPU() {
        return this.cpu + " GHz";
    }

    getType() {
        return this.type;
    }

    toString() {
        return `Tipo: ${this.getType()}, RAM: ${this.getRAM()}, HDD: ${this.getHDD()}, CPU: ${this.getCPU()}`;
    }
}
//classes extendidas da classe Pai 
class PC extends Computador {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu, "PC");
    }
}

class Servidor extends Computador {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu, "Servidor");
    }
}
//classe factory
class ComputadorFactory {
    static criarComputador(tipo, ram, hdd, cpu) {
        if (tipo === "PC") {
            return new PC(ram, hdd, cpu);
        } else if (tipo === "Servidor") {
            return new Servidor(ram, hdd, cpu);
        } else {
            throw new Error(`Tipo de computador não suportado: ${tipo}`);
        }
    }
}
// chamada dos clases 
const pc = ComputadorFactory.criarComputador("PC", 8, 500, 2.4);
const servidor = ComputadorFactory.criarComputador("Servidor", 32, 2000, 3.0);

console.log(pc.toString());
console.log(servidor.toString());

