// // Pengulangan dengan for (yang di cetak variabel i)
// for(var i = 0; i < 3; i++){
//     console.log(i)
// }

// // Pengulangan dengan while (yang di cetak variabe kata)
// var i = 0;
// while(i < 4) {
//     console.log("Hello Worlds");
//     i++;
// }
// ============================================================================

// =================================================================
/**
 * Buatlah koding untuk cetak angka 1 sampai 10
 * Menggunakan:
 * 1. for
 * 2. while
 *  */ 
// Jawaban :

// for(var i = 1; i < 11; i++){
//     console.log(i)
// }

// var i = 1;
// while (i <= 10) {
//       console.log(i);
//       i++;
//     }
// ==============================================================================================

// ============================================================================================
/**
 * Latihan perulangan bersarang
 * Buatlah tampilan seperti ini
 * 1
 * 12
 * 123
 * 1234
 * 12345
 * menggunakan for
 */ 
// jawaban:

// // var i = 0;
// var n = '';
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < i + 1; j++) {
//     // console.log(j + 1);
//     n = n + String(j + 1);
//   }
//   console.log(n);
//   n = "";
// }
// ============================================================================================

// ============================================================================================
// // length adalah pengulangan jumlah tulisan
// var t = "fullstack";

// for (var i = 0; i < t.length; i++){
//     console.log(i);
// }

// // Pengecekan bilangan genap dan ganjil
// var i = 10;
// for (i = 0; i < 10; i++){
//     if ( i % 2 === 0){
//         console.log(i + "=bilangan genap");
//     } else {  
//         console.log(i + "=bilangan ganjil");
//     }
// }
//// ============================================================================================

//// ============================================================================================
/**
 * Algoritma
 * pilihan coupon code untuk cash back e-comerse
 * 
 * a. FreeOngkir
 * Jika pembelian lebih dari atau sama dengan 50.000, ada potongan 10%
 * Jika pembelian antara 30.000 dan 50.000, ada potongan 5%
 * Jika pembelian kurang dari 30.000 dan 50.000, ada potongan 2,5%
 * 
 * b. Free15%
 * Jika pembelian lebih dari atau sama dengan 30.000, ada potongan 15%
 * Jika pembeli kurang dari 30.000, ada potongan 0%
 */
// Jawaban:

// var voucher = "FreeOngkir";
// var pembelian = "50000";

// switch (voucher){
//     case "FreeOngkir":
//         // FreeOngkir
//         if (pembelian >=50000){
//             console.log("pembelian ="+ (pembelian));
//             console.log("potongan 10% sebesar ="+ (pembelian*0.1));
//             console.log("yang harus dibayar  ="+ (pembelian - pembelian*0.1));
//         } else if ((pembelian >= 30000) && (pembelian < 50000)){
//             console.log("potongan 5%");
//         } else {
//             console.log("potongan 2.5%");
//         }
//         break;
//     case "Free15%":
//         // Free15%
//         if (pembelian >= 30000){
//             console.log("potongan 15%");
//         } else {
//             console.log("potongan 0%")
//         }
//         break;
//     default:
//         console.log("tidak ada voucher");
// }
// // ==========================================================================================================


