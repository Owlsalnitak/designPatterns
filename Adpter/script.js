class Pato {
    grasnar() {
      console.log("Quack! Quack!");
    }
  
    voar() {
      console.log("Voando como um pato");
    }
  }
class Galinha {
    cacarejar() {
      console.log("Cocoricó!");
    }
  
    bicar() {
      console.log("Bicando como uma galinha");
    }
  }
  
class AdaptadorPato {
    constructor(pato) {
      this.pato = pato;
    }
  
    cacarejar() {
      this.pato.grasnar();
    }
  
    bicar() {
      this.pato.voar();
    }
  }
  
function AdapatorPatoDemo() {
    const pato = new Pato();
    const adaptador = new AdaptadorPato(pato);
  
    console.log("Pato fazendo suas ações:");
    pato.grasnar();
    pato.voar();
  
    console.log("Usando o adaptador para fazer o Pato agir como uma Galinha:");
    adaptador.cacarejar();
    adaptador.bicar();
  }
AdapatorPatoDemo();
  