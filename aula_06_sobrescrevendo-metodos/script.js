/*
    Classes
    - Sobrescrevendo métodos
*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeNoise() {
    console.log('Algum som genérico do animal');
  }
}

class Dog extends Animal {
  makeNoise() {
    console.log('Au... Au... Au...');
  }
}

const dog = new Dog('Carlota');
console.log(dog.name);
dog.makeNoise();

class Cat extends Animal {
  makeNoise() {
    console.log('Miau... Miau... Miau...');
  }

  // Posso criar métodos exclusivos em cada classse
  run() {
    console.log('Correndo...');
  }
}

const cat = new Cat('Melancia');
console.log(cat.name);
cat.makeNoise();

cat.run();
