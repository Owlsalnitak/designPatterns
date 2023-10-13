class Observable {
    constructor() {
      this.observers = [];
    }
    addObserver(observer) {
      this.observers.push(observer);
    }
    removeObserver(observer) {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
    notifyObservers(event, data) {
      this.observers.forEach((observer) => {
        observer.update(event, data);
      });
    }
  }
  class Editor extends Observable {
    constructor() {
      super();
      this.content = [];
    }
    insertLine(lineNumber, text) {
      if (lineNumber < 0) {
        console.log("Número de linha inválido.");
        return;
      }
      if (lineNumber > this.content.length) {
        lineNumber = this.content.length;
      }
      this.content.splice(lineNumber, 0, text);
      this.notifyObservers("lineInserted", { lineNumber, text });
    }
    removeLine(lineNumber) {
      if (lineNumber < 0 || lineNumber >= this.content.length) {
        console.log("Número de linha inválido.");
        return;
      }
      this.content.splice(lineNumber, 1);
      this.notifyObservers("lineRemoved", { lineNumber });
    }
  }
  class TextEditor {
    constructor(editor) {
      this.editor = editor;
      this.editor.addObserver(this);
    }
    update(event, data) {
      if (event === "lineInserted") {
        console.log(`Linha ${data.lineNumber}: "${data.text}" inserida.`);
      } else if (event === "lineRemoved") {
        console.log(`Linha ${data.lineNumber} removida.`);
      }
    }
  }
  
  function main() {
    const editor = new Editor();
  
    editor.insertLine(0, "Primeira linha de texto.");
    editor.insertLine(1, "Segunda linha de texto.");
    editor.insertLine(1, "Linha intermediária.");
    editor.removeLine(1);
  
    const textEditor = new TextEditor(editor);
    const inputLines = [];
  
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.setPrompt("Digite uma linha de texto (ou 'EOF' para finalizar): ");
    rl.prompt("");
  
    rl.on("line", (line) => {
      if (line === "EOF") {
        rl.close();
      } else {
        inputLines.push(line);
        editor.insertLine(editor.content.length, line);
      }
  
      rl.prompt();
    });
    rl.on("close", () => {
      editor.notifyObservers("save");
      console.log("Editor fechado.");
    });
  }
  main();
  