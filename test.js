/* name = '민수';

const bruce = {
    name: 'bruce'
};

const madeline = {
    name: 'MadeLine'
};

function greet() {
    console.log( this.name, this.birth, this.occup);    
}



greet();
greet.call(bruce);
greet.call(madeline);

function update(birth, occup) {
    this.birth = birth;
    this.occup = occup;
}

update.call(bruce, 2000, 'men');
console.log(bruce);

update.call(madeline, 2018, 'women');


var module = {
    x: 42,
    getX: function() {
        return this.x;
    }
}

var unboundGetX = module.getX;
console.log(unboundGetX());

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX()) */

function Parent(name) {
    this.name = name;
}

Parent.prototype.getName = function() {
    return this.name;
};

function Child(name) {
    Parent.call(this, name);
    this.age = 0;
};

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.getAge = function() {
    return this.age;
};
var c = new Child();


class Parent {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}



class Child extends Parent {
    constructor(name) {
        super(name);
        this.age = 0;
    }
    getAge() {
        return this.age;
    }
}