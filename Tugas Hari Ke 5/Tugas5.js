// Soal 1
function tampilkan() {
    console.log("Hallo Sanbers");
}

tampilkan();

// Soal 2
{
    function kalikan(angka_1, angka_2) {
        return angka_1 * angka_2
    }
    var angka_1 = 12
    var angka_2 = 4

    var hasilnya = kalikan(angka_1, angka_2)
    console.log(hasilnya)
}

// Soal 3
{
    function introduce(name, age, address, hobby) {
        return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
    }
    var name = "Pandu Zamora"
    var age = 22
    var address = "Jalan Jalan Aja"
    var hobby = "Bikin Kesel Orang"

    var perkenalan = introduce(name, age, address, hobby)
    console.log(perkenalan)
}

{
    function introduce(name, age, address, hobby) {
        return `Nama Saya Adalah ${name}, Umur Saya ${age}, Alamat Saya Di ${address}, & Saya mempunyai hobby yaitu ${hobby}!!!`
    }
    var name = "Pandu Zamora"
    var age = 22
    var address = "jalan jalan"
    var hobby = "ngoding"

    var kenalan = introduce(name, age, address, hobby)
    console.log(kenalan)
}

{
    function jeniskelamin(jk, nama) {
        return `bapak ${jeniskelamin}, ibu ${jeniskelamin}, + ${nama}`
    }
    var jeniskelamin = "";
    var nama = "";

    var panggilan = jeniskelamin(jk, nama)
    console.log(panggilan)

}