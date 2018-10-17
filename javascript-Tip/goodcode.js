




//////// console
const foo ={name:'tom', age:30, nervous:false};
const bar ={name:'dick', age:40, nervous:false};
const baz ={name:'harry', age:50, nervous:true};

//bad code
/* console.log(foo);
console.log(bar);
console.log(baz); */

// good code 
/* console.log('%c My Friends','color:orange; font-size:30px; font-style:bold '); 
console.log({foo, bar, baz})
console.table([foo,bar,baz])


console.time('loop');
let i = 0;
while(i<100){
    i++
    console.log(i);
}

console.timeEnd('loop');



const deleteMe = () => console.trace('bye bye database');
deleteMe();
 */

//////// destructuring

const turtle ={
    name:'Bob turtle',
    legs: 4,
    shell: true,
    type:'amphibious',
    meal: 10,
    diet: 'berries'
}

//bad code
function feed(animal){
    console.log(1);
    return `Feed ${animal.name}${animal.meal} kilos of ${animal.diet}`;
}

//Good Code
function feed2({name, meal, diet}){
    return `Feed ${name}${meal} kilos of ${diet}`;
}

//or
function feed3(animal){
    const { name, meal, diet} = animal
    return `Feed ${name}${meal} kilos of ${diet}`;
}


// console.log(feed(turtle));
// console.log(feed2(turtle));
// console.log(feed3(turtle));

//////////////// template literals
const horse = {
    name : 'Topher',
    size: 'lagre',
    skills: ['jousting', 'racing'],
    age: 7
}
///bad code
let bio = horse.name + ' is a ' + horse.size + ' horse skilled in ' + horse.skills.join(' & ');
// good code

const {name, size, skills } = horse;
let nbio =`${name} is a ${size} horse skilled in ${skills.join(' & ')}`

// console.log( bio );
// console.log( nbio );

//Advanced Tag Example
function horseAge(str, age){
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge`This horse is ${horse.age}`;
console.log(bio2);



///////////////// Spread Syntax

const pikachu = {name : 'Pikachu'};
const stats = { hp: 40, attack: 60, defense: 45 }

//bad
pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;

//or

const lvl0 = Object.assign(pikachu, stats)
const lvl1 = Object.assign(pikachu, {hp: 45})

console.log(lvl0, lvl1);

// good code

const lvl10={...pikachu,...stats}
const lvl11={...pikachu,hp: 45}


//array
let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];
//bad code
pokemon.push('Bulbasaur');
pokemon.push('Metapod');
pokemon.push('Weedle');
//good code
pokemon=[...pokemon,'Bulbasaur','Metapod','Weedle']; //push
pokemon=['Bulbasaur','Metapod','Weedle',...pokemon];// unShift
pokemon=['Bulbasaur','Metapod',...pokemon,'Weedle',];


/////////////// loops
const orders = [500, 30, 99, 15, 223];


//bad code

let total = 0;
const withTax = [];
const highValue = [];
for(i=0; i< orders.length; i++){
    // Reduce
    total += orders[i];

    // map
    withTax.push(orders[i] * 1.1);

    //filter
    if(orders[i] > 100){
        highValue.push(orders[i]);
    }
}

// good code
// reduce 
const total2 = orders.reduce((acc, cur) => acc + cur)
//map
const withTax2 = orders.map(v=> v*1.1);
//filter
const highValue2 = orders.filter(v => v > 100);


////////////////  async , await

const random = ()=>{
    return Promise.resolve(Math.random());
}

//bad code
const sumRandomAsyncNums = ()=>{
    let first;
    let second;
    let third;
    
    return random()
    .then(v=>{
        first =v;
        return random();
    })
    .then(v=>{
        second =v;
        return random();
    })
    .then(v=>{
        third =v;
        return first + second + third;
    })
    .then(v=>{
        console.log(`Result ${v}`)
    });
}


// good code

const sumRandomAsyncNums = async()=>{
    const first = await random();   
    const second = await random();   
    const third = await random();
    
    console.log(`Result ${first + second + third}`);

    if(await random()){

    }

    const randos = Promise.all([
        random(),
        random(),
        random()
    ])

    for (const r of await randos){

    }

}