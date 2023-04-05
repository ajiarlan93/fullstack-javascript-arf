// function hello(){
//     console.log("Hallo, selamat pagi!");
// }

// // pemanggilnya
// hello();
// =======================================================


// // =======================================================
// /** 
//  * buatlah cekbilangan genap atau ganjil?
//  */ 
// // Jawaban
// function checkbilangan (x) {
//     if (x % 2 === 0) {
//         console.log("genap");
//     } else {
//         console.log("ganjil");
//     }
// }

// checkbilangan(6)
// ===========================================================


// // =========================================================
// /** FUNGSI MODULER
//  * soal
//  * Buatlah 2 fungsi yang:
//  * 1. Mengubah kalimat menjadi larik
//  * 2. menghitung jumlah elemen dalam larik
//  * (contoh masukkan: "Hello selamat pagi" akan memberi hasil 3)
//  */
// // jawaban:
// function splitToArray(str) {
//     var tempArray = str.split (" ")
//     return tempArray;
// }

// function jumlahKata(kalimat) {
//     var result = splitToArray(kalimat);
//     var arraylength = result.length;
//     return arraylength
// }

// console.log(jumlahKata("Hello selamat malam kawan"));
// 
// =====================================================================================


// /**
//  * STUDY CASE
//  * 
//  * Buatlah simple calculator dengan menggunakan beberapa function :
//  * 1. Function tambah
//  * 2. Function kurang
//  * 3. Function kali
//  * 4. Function bagi
//  * 5. Function modulus
//  * 
//  * Fungsi calculator => main function
//  */
// // Jawaban :

// function perkalian(a,b){
//     return a*b;
// }
// function pembagian(a,b){
//     return a/b;
// }
// function penjumlahan(a,b){
//     return a+b;
// }
// function pengurangan(a,b){
//     return a-b;
// }

// function calculatorUtama(a,b,operasi){
//     var hasil;
//     switch (operasi){
//         case "perkalian":
//             hasil = perkalian(a,b);
//             break;
//         case "pembagian":
//             hasil = pembagian(a,b);
//             break;
//         case "penjumlahan":
//             hasil = penjumlahan(a,b);
//             break;
//         case "pengurangan":
//             hasil = pengurangan(a,b);
//             break;
//         default:
//             hasil = ("belum update");
//     }
//     return hasil;
// }
// var hasilUtama = calculatorUtama(3,5,"perkalian");
// console.log(hasilUtama);

// // ====================================================================================================

// // ====================================================================================================