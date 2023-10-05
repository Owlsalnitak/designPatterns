class Sanduiche {
  getDescricao() {
    return "Sanduíche";
  }
}
class FrangoAssado extends Sanduiche {
  getDescricao() {
    return "Sanduíche de frango assado";
  }
  custo() {
    return 4.50;
  }
}
class Peperoni extends Sanduiche {
  constructor(sanduiche) {
    super();
    this.sanduiche = sanduiche;
  }
  getDescricao() {
    return this.sanduiche.getDescricao() + " com pepperoni";
  }
  custo() {
    return this.sanduiche.custo() + 0.99;
  }
}
class QueijoMussarelaRalado extends Sanduiche {
  constructor(sanduiche) {
    super();
    this.sanduiche = sanduiche;
  }
  getDescricao() {
    return this.sanduiche.getDescricao() + " e queijo mussarela ralado";
  }
  custo() {
    return this.sanduiche.custo() + 2.00;
  }
}

// Uso do Decorator
const meuSanduiche = new FrangoAssado(); 
const sanduicheDecorado = new QueijoMussarelaRalado(new Peperoni(meuSanduiche)); 

console.log(`${sanduicheDecorado.getDescricao()}`);
console.log(`Custo: $${sanduicheDecorado.custo().toFixed(2)}`);
