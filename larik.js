/**
 * Kumpulan variabel yang memiliki indeks.
 * Indeks larik dimulai dari 0 (nol)
 */

const { log } = require("console")

// var angka = [1,2,3,4,5]
// var items = ["laptop", "hp", "mouse "]

// var score = [100,50,75];
// console.log(score[0]);
// console.log(score[1]);
// console.log(score[2]);
// console.log(score.length);
// // 

// var items = ["laptop", "hp", "komputer"];
// console.log(items);
// console.log(items[0]);

// /** push untuk menambahkan ke dalam array */
// items.push("mouse")
// console.log(items);

// /** pop untuk menghapus value dari belakang */
// items.pop();
// console.log(items);

// const cars = ["mobilio", "jazz", "brio"];
// console.log(cars)



// /** Larik Multi Dimensi*/
// // larik 2 dimensi :
// var score = [
//     [10, 20, 30],
//     [15, 25, 35],
//     [5, 7, 9]
// ];
// console.log(score[0][0])
// console.log(score[1][0])
// console.log(score.length)


// ===================================================================================================
// Soal
// var murid = [
//     [1, "Vincen", 3.5],
//     [2, "Udin", 3.0],
//     [3, "Mamang", 2.1]
// ]
/** Bikin kode yang hasilnya:
 * 1. Vincent, IPK = 3.5, Lulus
 * 2. Udin, IPK = 3.0, Lulus
 * 3. Mamang, IPK = 2.1, Gagal
 * (Syarat lulus, IPK minimum 3.0)
*/
// (kondisi)?"nilai true";"nilai false"
// 1
// metode 1
// console.log(murid[0][1] + ", IPK ="+ murid[0][2] , (murid[0][2] >= 3 )?"lulus":"gagal");

// // metode 2
// if (murid[0][2] >= 3){
//     console.log(murid[0][1] + ", IPK ="+ murid[0][2]+", lulus");
// } else {
//     console.log(murid[0][1] + ", IPK ="+ murid[0][2]+", gagal");
// }

// // 2
// // metode 1
// console.log(murid[1][1] + ", IPK ="+ murid[1][2] , (murid[1][2] >= 3 )?"lulus":"gagal");

// // metode 2
// if (murid[1][2] >= 3){
//     console.log(murid[1][1] + ", IPK ="+ murid[1][2]+", lulus");
// } else {
//     console.log(murid[1][1] + ", IPK ="+ murid[1][2]+", gagal");
// }

// // 3
// // metode 1
// console.log(murid[2][1] + ", IPK ="+ murid[2][2] , (murid[2][2] >= 3 )?"lulus":"gagal");

// // metode 2
// if (murid[2][2] >= 3){
//     console.log(murid[2][1] + ", IPK ="+ murid[2][2]+", lulus");
// } else {
//     console.log(murid[2][1] + ", IPK ="+ murid[2][2]+", gagal");
// }

// // cara efektif pertama
// for (i=0; i < murid.length; i++) {
//     console,log(murid[i][1] + ", IPK ="+ murid[i][2] + ((murid[i][2] >= 3 )?"lulus":"gagal"));
// }

// // efektif kedua
// for (i=0; i < murid.length; i++) {
//     if (murid[i][2] >= 3) {
//         console.log(murid[i][1] + ", IPK ="+ murid[i][2]+", lulus");
//     }else {
//         console.log(murid[i][1] + ", IPK ="+ murid[i][2]+", gagal");
//     }
// }
// 
// // ========================================================================================================
// // 
// // 
// // ========================================================================================================
// /** concat untuk menggabungkan array */
// var array1 = ["dono","dwi"];
// var array2 = ["aji","hendra","bain"];
// console.log(array1.concat(array2));

// // modif
// console.log(murid.concat(array1));