class Runner {
  #name;
  #id;
  #position;

  constructor(name, id) {
    this.#name = name;
    this.#id = id;
    this.#position = 0;
  }

  get name() {
    return this.#name;
  }

  get id() {
    return this.#id;
  }

  get position() {
    return this.#position;
  }

  run(number) {
    if (number === 1) {
      this.#position += 3;

      return;
    } else if (number <= 3) {
      this.#position += 1;

      return;
    } else {
      this.#position += 2;

      return;
    }
  }
}

class Random {
  constructor() {}

  roll() {
    let roll = Math.round(Math.random() * (6 - 1) + 1);

    return roll;
  }
}

class Race {
  #runners;
  constructor() {
    this.#runners = [];
  }

  get runners() {
    return this.#runners;
  }

  inscription(runner) {
    this.runners.push(runner);
  }

  start() {
    if (this.runners.length < 2) {
      console.log(
        'Se necesita mas de 1 participante para poder comenzar la carrera'
      );

      return;
    } else {
      while (this.runners[0].position < 100 && this.runners[1].position < 100) {
        this.runners[0].run(roll1.roll());

        this.runners[1].run(roll2.roll());

        console.log(
          `El corredor ${this.runners[0].id} va en la posicion: ${this.runners[0].position}`
        );
        console.log(
          `El corredor ${this.runners[1].id} va en la posicion: ${this.runners[1].position}`
        );

        if (
          this.runners[0].position >= 100 &&
          this.runners[1].position >= 100
        ) {
          console.log(`Es un empate!`);
          return;
        } else if (this.runners[0].position >= 100) {
          console.log(`El ganador es ${this.runners[0].name}`);

          return;
        } else if (this.runners[1].position >= 100) {
          console.log(`El ganador es ${this.runners[1].name}`);
          return;
        }
      }
    }
  }
}

let roll1 = new Random();
let roll2 = new Random();
let runner1 = new Runner('Chompiras', 1);
let runner2 = new Runner('Chacalito', 2);
let race1 = new Race();
race1.inscription(runner1);
console.log(race1.runners);
race1.inscription(runner2);
console.log(race1.runners);
race1.start();
// console.log(runner1.position);
// runner1.run();
// console.log(runner1.position);

/*Tarea 

Carrera entre dos corredores, 100 pasos
Probabilidad Avance 
1/6 +3 cuadros
2/6 +1 cuadro
3/6 +2 cuadros 
Mostrar el avance de la carrera y posición de los corredores todo el tiempo y al final decir quien gano o si hubo empate. ejemplo de salida: c1 esta en 3 c2 esta en 8 
.... 
c1 esta en 6 c2 esta en 10 
.... 
.... 
c2 gano
 
clase dado {lanzar()}
 
clase corredor
   constructor(nombre)
     this  nombre=nombre
           posicion=0
     this dado=new Dado();
 
  correr()
      let cara=this.dado.lanzar();
      if cara==1
      this.posicion+= un valor
 
 
 
            1         2         3         4
   12345678901234567890123456789012345678901234567890
          A
           B
 
Probabilidad Avance 
1/6 +3 cuadros   1
2/6 +1 cuadro    2 3
3/6 +2 cuadros   4 5 6
      
Carrera
 
 
 
 
 
   c1=new Corredor(“A”)
   c2=new Corredor(“B”)
 
mientras (c1.posicion<100 && c2.posicion<100)
   c1.correr();
   c2.correr();
   ….console.log(c1.posicion +  “    “ + c2.posicion);
 
 
quien gano o si hubo empate...
*/
