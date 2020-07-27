// Soal 1
console.log('========================= Soal Pertama =========================')

for (step = 0; step < 10; step++) {
    console.log(step + ' I Love Coding');
}

console.log('========================= Looping Kedua =========================')

for (counter = 10; counter > 0; counter--) {
    console.log(counter + ' I will become a frontend developer');
}

// Soal No 2
console.log('========================= Soal Kedua =========================')

var n = 20;
var x;

for (x = 1; x <= n; x++) {
    if (x % 3 === 0 && x % 2 == 1) {
        console.log(x + ' - I Love Coding');
    } else if (x % 2 === 0) {
        console.log(x + ' - Berkualitas');
    } else if (x % 2 === 1) {
        console.log(x + ' - Santai');
    }
}


// Soal 3
console.log('========================= Soal Ketiga =========================')

function makeLine(length) {
    var line = "";
    for (var i = 1; i <= length; i++) {
        for (var j = 1; j <= i; j++) {
            line += "#";
        }
        line += "\n";

    }
    return line + "\n";
}
console.log(makeLine(8));

// Soal No 4
console.log('========================= Soal Keempat =========================')

var string = "saya sangat senang belajar javascript";
var explode = string.split(" ");
console.log(explode);


// Soal No 5
console.log('========================= Soal Kelima =========================')

var array = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var implode = array.join(" ");
console.log(implode);