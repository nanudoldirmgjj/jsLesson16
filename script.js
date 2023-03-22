/*
Задание 1

Создать класс Auto. В конструкторе класса задаются параметры: марка, модель, цвет, год выпуска, объем двигателя. В классе должен быть метод, который определяет текущую дату и высчитывает возраст машины.

Создать из класса 2 объекта с разными характеристиками.

1) Для каждого объекта вывысти в консоль текст: Автомобиль марки ..., возраст - ... лет.

2) Вывести фразу: ... (цвет) ... (марка) ... (модель) новее, чем ... (цвет) ... (марка) ... (модель) на ... лет. */

class Auto {
    constructor (brand, model, color, year, capacity) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
        this.capacity = capacity;
    }

    howOld() {
        let curDate = new Date().getFullYear();
        return curDate - this.year;
    }
}

function BY (Auto) {
    console.log (`Автомобиль марки: ${Auto.brand}, возраст - ${Auto.howOld()}`);
}

function whoIsNewer (a1, a2) {
    let theNewerOne = a1.howOld() > a2.howOld() ? a2 : a1;
    let theOlderOne = theNewerOne == a1 ? a2 : a1;

    console.log(`${theNewerOne.color} ${theNewerOne.brand} ${theNewerOne.model} is newer then ${theOlderOne.color} ${theOlderOne.brand} ${theOlderOne.model} on ${theOlderOne.howOld() - theNewerOne.howOld()} years`);
}

const Auto1 = new Auto('bmw', 'iX', 'green', 2019, 200);
const Auto2 = new Auto('tesla', 'EM', 'red', 2021, 200);

BY(Auto1);
BY(Auto2);

whoIsNewer(Auto1, Auto2);














class Logo {
    constructor(url) {
      this.top = 200;
      this.left = 200;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
    }
  
    init() {
      // метод должен создать тег img
      // вложить в него src картинки (this.imgUrl)
      // и записать в this.html
      // + запускаем render
      // + странице должен залиться фон черным

      this.html = `<img src="${this.imgUrl}" alt="">`;
      this.render();
      document.body.style.background = 'black';
    }
    
    render() {
      // метод должен отрисовать изображение (this.html) на странице
      // применить фиксированное позиционирование
      // использовать this.top и this.left для указания позиции
      // использовать this.width для указания ширины

     let a = document.querySelector('img');
     if (a) a.remove();
      document.body.innerHTML += this.html;
      let img = document.querySelector('img');
      img.style.position = 'fixed';
      img.style.top = this.top + 'px';
      img.style.left = this.left + 'px';
      img.style.width = this.width + 'px';
    }
  
    moveUp() {
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся ВЫШЕ на 20px
      // + дергаем render

      this.top -= 20;
      this.render();
    }
    moveDown() {
      // метод должен изменять top нашего объекта так, чтобы элемент передвинулся НИЖЕ на 20px
      // + дергаем render

      this.top += 20;
      this.render();
    }
    moveLeft() {
      // метод должен изменять left нашего объекта так, чтобы элемент передвинулся ЛЕВЕЕ на 20px
      // + дергаем render

      this.left -= 20;
      this.render();
    }
    moveRight() {
      // метод должен изменять left нашего объекта так, чтобы элемент передвинулся ПРАВЕЕ на 20px
      // + дергаем render

      this.left += 20;
      this.render();
    }
  }
  
  const imgUrl = 'https://bit.ly/2tcDito';
  let mfLogotip = new Logo(imgUrl);
  
  // запускаем наше микро-приложение
  mfLogotip.init();
  
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();





  /*
Задание 3


Добавить к приложению желтый круг (пример ЗДЕСЬ)

Реализовать с помощью класса Circle, который принимает аргументы size (ширина и высота фигуры), color (цвет фигуры). При вызове метода render() из экземпляра класса Circle должен отрисоваться круг с заданными стилями.

Сделать по примеру из последнего видео в уроке.
  */
  class Circle {
    constructor (width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.render();
    }

    createTemplate () {
        return `
        <div style="
        width: ${this.width}px; 
        height: ${this.height}px; 
        background-color:  ${this.color};
        border-radius: 50%;   "> 
         </div>`;
        }

        render() {
        document.body.innerHTML += this.createTemplate();
        }

}

const cir1 = new Circle(100, 100, "yellow");







/*
Задание 4


Создайте класс Calculator, который создаёт объекты. У класса есть конструктор, который запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта, и два метода:
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
*/

class Calculator {
    constructor() {
        this.firstNum = prompt('введите первое число' );
        this.secondNum = prompt('введите второе число' );
    }
    sum() {
        return Number(this.firstNum) + Number(this.secondNum);
    }
    mul() {
        return this.firstNum * this.secondNum;
    }
}

let calc = new Calculator();
console.log(calc.sum(), calc.mul());


/*
Задание 5

Создать класс Shape, с конструктором и методом render(), Далее создать 3 дополнительных класса Square, Circle, Rectrangle, которые должны наследоваться от класса Shape, а также должны переписать или дополнить его метод render(). При вызове данных методов должны рисоваться соответствующие фигуры. В качестве аргументов принимаются цвет бэкграунда и размеры.

Пример создания и вызова метода отрисовки для каждой из фигур:

let square1 = new Square('red', 50);
square1.render();
let circle1 = new Circle('green', 150);
circle1.render();
let rectangle1 = new Rectangle('blue', 250, 100);
rectangle1.render();
*/



class Shape {
  constructor(color, width, height ) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  render() {
   document.body.innerHTML += this.createF();
  }
}

class Square extends Shape {
  constructor(color, width ) {
    super(color, width);
  }
  createF() {
    return `
       <div style="
        width: ${this.width}px; 
        height: ${this.width}px; 
        background-color:  ${this.color};
         "> 
         </div>`
    
  }
}

let s1 = new Square('purple', 100);
s1.render();

class Cir extends Shape {
  constructor(color, width ) {
    super(color, width);
  }
  createF() {
    return `
       <div style="
        width: ${this.width}px; 
        height: ${this.width}px; 
        background-color:  ${this.color};
        border-radius: 50%;   "> 
         </div>`
    
  }
}
let c1 = new Cir('green', 120);
c1.render();

class Rectangle extends Shape {

  createF() {
    return `
       <div style="
        width: ${this.width}px; 
        height: ${this.height}px; 
        background-color:  ${this.color};
         "> 
         </div>`
    
  }
}

let sq1 = new Rectangle('blue', 100, 150);
sq1.render();