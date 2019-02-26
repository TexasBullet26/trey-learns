## JavaScript Loops

Loops are a way to repeat a series of instructions and typically run a finite number of times. JavaScript has the following types of loops:

### for

-   `for`: creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by one or more statements that will be executed in the loop.

```javascript
for (initialization; condition; finalExpression) {
    statement(s);
}
```

### while

-   `while`: creates a loop that executes its internal statement(s) as long as the specified _condition_ evaluates to `true`. The condition is evaluated before executing the statement.

```javascript
while (condition) {
    statement(s);
}
```

Print all the integers from 1 to 10:

```javascript
function main(input) {
    var i = 1;

    while (i <= input) {
        process.stdout.write(i + ' ');

        i++;
    }
}
```

### do-while

-   `do-while`: creates a loop that executes its internal statement(s) until the specified _condition_ evaluates to `false`. The condition is evaluated after executing the internal statement(s), so the contents of the loop always execute _at least_ once.

```javascript
do {
    statement(s);
} while (condition);
```

Print all the integers in the range from 1 to some number given as input:

```javascript
function main(input) {
    var i = 1;

    do {
        process.stdout.write(i + ' ');

        i++;
    } while (i <= input);
}
```

### for-in

-   `for-in`: iterates (in an arbitrary order) over the _name_ of each enumerable property in an object, allowing statements to be executed for each distinct property.

```javascript
for (var variable in object) {
    // insert code that uses variable here
}
```

```javascript
var tannerLanzer = {
    firstName: 'Tanner',
    lastName: 'Lanzer',
    dateOfBirth: 'July 05, 1990',
    nationality: 'American',
};

for (var property in tannerLanzer) {
    console.log('tannerLanzer.' + property + ' = ' + tannerLanzer[property]);
}
```

Create a `Monster` object named `monster`, then print the object followed by its individual properties:

```javascript
class Monster {
    constructor(name, home, description) {
        this.name = name;
        this.home = home;
        this.description = description;
    }
}

function main(input) {
    var monster = new Monster(input[0], input[1], input[2]);

    // Print array
    console.log(monster);

    // Print each of its elements on a new line
    for (let property in monster) {
        console.log(property + ': ' + monster[property]);
    }
}
```

### for-of

-   `for-of`: iterates over iterable objects such as an _Array_, _Map_, _Set_, _String_, _TypedArray_, _arguments object_, etc. It essentially iterates over the _value_ of each distinct property in the structure, such as each letter in a word or each element in an array.

```javascript
for (let variable of iterable) {
    statement(s);
}
```

```javascript
function main(input) {
    // Split the words read as input into an array of words
    var array = input.split(new RegExp('[ \n]+'));

    // Print array
    console.log(array);

    // Print each of its elements on a new line
    for (let value of array) {
        console.log(value);
    }
}
```

**Input**:
hi bye
hello goodbye

**Output**:

```
[ 'hi', 'bye', 'hello', 'goodbye' ]
hi
bye
hello
goodbye
```

Iterate over the set of _Key-Value_ pairs in a _Map_, first printing each _Key-Value_ pair and then printing each individual _Key_ and its paired _Value_:

```javascript
'use strict';

let actress = new Map([
    ['firstName', 'Julia'],
    ['lastName', 'Roberts'],
    ['dateOfBirth', 'October 28, 1967'],
    ['nationality', 'American'],
    ['firstMovie', 'Satisfaction'],
]);

// Print each Key-Value pair in the map
for (let info of actress) {
    console.log(info);
}

// Print each key and value as "Key: Value"
console.log();
for (let info of actress) {
    console.log(info[0] + ': ' + info[1]);
}
```

**Output**:

```
[ 'firstName', 'Julia' ]
[ 'lastName', 'Roberts' ]
[ 'dateOfBirth', 'October 28, 1967' ]
[ 'nationality', 'American' ]
[ 'firstMovie', 'Satisfaction' ]

firstName: Julia
lastName: Roberts
dateOfBirth: October 28, 1967
nationality: American
firstMovie: Satisfaction
```
