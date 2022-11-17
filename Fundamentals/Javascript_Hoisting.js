// // 1================
var hello = 'world';
console.log(hello);
// // output: world 

// var Hello assigned a value of world in Variable declaration
// And console log 

// // 2================

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// // output: magnet

// 3============================

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// // output : super cool

// 4==================================

var food = 'chicken';
console.log(food);
// output : chicken
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
//  output : half-chicken
    var food = 'gone';
}

// 5============================================

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// output : Error (Mean() is not a Function)

// 6===========================================

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    // output : rock
    console.log(genre);
    var genre = "r&b";

    console.log(genre);
    // output : r&b
}
console.log(genre);
// output : disco


// output : rock
// output : r&b
// output : disco

// 7===============================

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// output: san jose
// output: seattle
// output : burbank
// output: san jose

// 8==================================

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

// output : Error 














