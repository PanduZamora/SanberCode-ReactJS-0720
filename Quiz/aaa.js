var index = 0;
var daftarAlatTulis = ["2. Pensil", "5. Penghapus", "3. Pulpen", "4. Penggaris", "1. Buku"];

while (index < daftarAlatTulis.length) {
    console.log(daftarAlatTulis.sort()[index]);
    index++;
}

var row = 8;

for (var i = 1; i <= row; i++) {
    var num = '';

    for (var j = i; j <= row; j++) {
        num += "#";
    }
    console.log(num);
}

// Lingkaran
{
    function luaslingkaran() {
        var jari2 = parseFloat(document.funday.nilai_jari2.value);
        if (isNaN(jari2)) {
            jari2 = 0.0;
        }
        var hasil = 3.14 * jari2 * jari2;
        console.log("Jadi, luas lingkaran adalah : " + hasil);
    }
}

// Persegi
{
    var luas;
    var keliling;
    var lebar;
    var panjang;

    function hitung() {
        lebar = parseFloat;
        panjang = parseFloat;
        luas = panjang * lebar;
        keliling = 2 * (panjang + lebar);
        console.log(luas);
        console.log(keliling);
    }
}

// Segitiga
{
    var alas;
    var tinggi;
    var luas;

    function hitungluas() {
        alas = console.log("alas").value;
        tinggi = console.log("tinggi").value;
        luas = (alas * tinggi) * 0.5;
        console.log("luas").value = luas;
    }
}