let squareSide,
    rectangleWidth,
    rectangleHeight,
    circleRadius,
    triangleHeight,
    field;

document.addEventListener('DOMContentLoaded', () => {
    squareSide = document.getElementById('square-side');
    rectangleWidth = document.getElementById('rectangle-width');
    rectangleHeight = document.getElementById('rectangle-height');
    triangleHeight = document.getElementById('triangle-height');
    circleRadius = document.getElementById('circle-radius');
    field = document.getElementsByClassName('field')[0];
});

class Shape {
  constructor(type) {
        this.shape = document.createElement('div');
        this.shape.className = type;
  }

    draw() {
        field.appendChild(this.shape);
        
    }
}

class Square extends Shape {
    constructor() {
        super('square');
        this.shape.style.height = squareSide.value + 'px';
        this.shape.style.width = squareSide.value + 'px';
        this.draw();
    }
}

const makeSquare = () => {
    new Square();
}

class Rectangle extends Shape {
    constructor() {
        super('rectangle');
        this.shape.style.height = rectangleHeight.value + 'px';
        this.shape.style.width = rectangleWidth.value + 'px';
        this.draw();
    }
}

const makeRectangle = () => {
    new Rectangle();
}

class Circle extends Shape {
    constructor() {
        super('circle');
        this.shape.style.height = circleRadius.value + 'px';
        this.shape.style.width = circleRadius.value + 'px';
        this.draw();
    }
}

const makeCircle = () => {
    new Circle();
}

class Triangle extends Shape {
    constructor() {
        super('triangle');
        this.shape.style.height = triangleHeight.value + 'px';
        this.shape.style.width = triangleWidth.value + 'px';
        this.draw();
    }
}

const makeTriangle = () => {
    new Triangle();
}