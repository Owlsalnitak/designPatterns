class Strategy {
    execute(a, b) {
    }
  }
  class Soma extends Strategy {
    execute(a, b) {
      return a + b;
    }
  }
  class Subtracao extends Strategy {
    execute(a, b) {
      return a - b;
    }
  }
  class Multiplicacao extends Strategy {
    execute(a, b) {
      return a * b;
    }
  }
  function main() {
    const a = parseInt(prompt("Digite o primeiro número:"));
    const b = parseInt(prompt("Digite o segundo número:"));
    const operacao = prompt("Escolha a operação (soma, subtracao, multiplicacao):");
  
    let strategy;
  
    if (operacao === "soma") {
      strategy = new Soma();
    } else if (operacao === "subtracao") {
      strategy = new Subtracao();
    } else if (operacao === "multiplicacao") {
      strategy = new Multiplicacao();
    } else {
      console.log("Operação inválida.");
      return;
    }
  
    const resultado = strategy.execute(a, b);
    console.log(`Resultado da operação ${operacao}: ${resultado}`);
  }
main();
  