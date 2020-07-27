// Soal Ke - 1

var kataPertama = "saya ";
var kataKedua = "senang ";
var kataKetiga = "belajar ";
var kataKeempat = "javascript";
var upper = kataKeempat.toUpperCase();

console.log(kataPertama + kataKedua + kataKetiga + upper);


// Soal Ke - 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var nilai = parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat);
console.log(nilai)

// Soal ke - 3

var kalimat = 'wah javascript itu keren sekali';

var teks_1 = kalimat.substring(0, 3);
var teks_2 = kalimat.substring(4, 14);
var teks_3 = kalimat.substring(15, 18);
var teks_4 = kalimat.substring(19, 24);
var teks_5 = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + teks_1);
console.log('Kata Kedua: ' + teks_2);
console.log('Kata Ketiga: ' + teks_3);
console.log('Kata Keempat: ' + teks_4);
console.log('Kata Kelima: ' + teks_5);



// Soal Ke - 4

var nilai = 70

if (nilai >= 80) {
    console.log("indeksnya A")
}

if (nilai >= 70 && nilai < 80) {
    console.log("indeksnya B")
}

if (nilai >= 60 && nilai < 70) {
    console.log("indeksnya C")
}

if (nilai >= 50 && nilai < 60) {
    console.log("indeksnya D")
}
if (nilai < 50) {
    console.log(" indeksnya E")
}

// Soal Ke 5

var tanggal = "28";
var bulan = "08";
var tahun = "1997";

switch (bulan == 08) {
    case 08:
        {
            bulan = "Agustus";
            break;
        }
    case 07:
        {
            bulan = "Juli";
            break;
        }
    case 06:
        {
            bulan = "Juni"
            break;
        }
    default:
        {
            console.log(tanggal + parseInt(bulan) + tahun);
            break;
        }
}