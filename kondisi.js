// var angka = 1;
// if (angka == 2)
// {
//     console.log("angka satu")
// }
// else
// {
//     console.log("angka selain satu")
// }

// 
// if ((angka == 2) && (angka == 1))
// {
//     console.log("Angka true");
// }
// else
// {
//     console.log("Angka kondisi false");
// }

// // =================================================================
// // kondisi 2
// var angka = 2;
// if (angka < 2)
// {
//     console.log("angka di bawah 2");
// }
// else if (angka > 2)
// {
//     console.log("angka di atas 2");
// }
// else { console.log("angka 2");}
// }


// contoh KASUS
// // ==================================================================
// // Soal : Jika umur sudah atau lebih dari 17, maka cetaklah bisa bikin KTP, 
// // jika tidak maka cetak belum bisa bikin KTP
// 
// var umur = 17;
// if (umur >= 17) {
//     console.log("bisa bikin KTP");
// } else if (umur < 17) {
//     console.log("belum bisa bikin KTP")
// }


// // ================================================================================
// // Buatlah kode untuk memilih minuman, minuman yang tersedia adalah (kopi dan teh) dgn switc case
// 
// var minuman = "soda";
// switch (minuman) {
//     case 'kopi':
//         console.log('anda pilih kopi');
//         break;
//     case 'teh':
//         console.log('anda pilih teh');
//         break;
//     default:
//         console.log('gak jadi minum');
// }


// ============================================================================================
// Buatlah aplikasi tiket masuk sebuah wahana dengan ketentuan sebagai berikut :
// - jika anak berumur di bawah 17 atau lebih tidak boleh masuk (jika di bawah 17 tahun boleh masuk);dan
// - jika tinggi anak di bawah 150 cm tidak boleh masuk dan jika lebih dari atau sama dengan 150 cm boleh masuk wahana.
// 
// var umur  = 16;
// var tinggi = 149;

// if (umur < 17){
//     if (tinggi < 150){
//         console.log("Tidak Boleh Masuk");
//     }else {
//         console.log("Boleh Masuk");
//     }

//     }
//     else {
//         console.log("tidak boleh masuk")}


// ===============================================================================================
// fungsi tolowercase untuk merubah string menjadi huruf kecil semua
// fungsi toUppercase untuk merubah string menjadi huruf besar semua
// 
// var minuman = "kopi";
// if (minuman.toLowerCase() == "kopi")
// {
//     console.log("anda memilih kopi");
//     console.log(minuman.toLowerCase());
//     console.log(minuman.toUpperCase());    
// }
// else 
// {
//     cconsole.log("anda tidak memilih kopi");
// }


// // ==================================================================================================
// // klasifikasi level untuk karakter dari sebuah game
// // 1. jika power lebih dari 100, maka status disebut "Expert"
// // 2. jika power lebih dari 70 sampai 100, maka status disebut "Pro"
// // 3. jika power lebih dari 50 sampai 70, maka status disebut "Normal"
// // 4. jika power lebih dari 30 sampai 50, maka status disebut "Basic"
// // 5. jika power dibawah 30, maka status disebut "Beginner"

// var power = 20;

// if (power > 100) {
//   console.log('Expert');
// } else if (power > 70 && power <= 100) {
//   console.log('Pro');
// } else if (power > 50 && power <= 70) {
//   console.log('Normal');
// } else if (power > 30 && power <= 50) {
//   console.log('Basic');
// } else {
//   console.log('Beginner');
// }


// // ==============================================================================================
// // 
// var minuman = 'Plain Tea';
// switch (minuman) {
//   case ' ':
//     console.log('input minuman');
//     break;
//   case 'Sweet Tea':
//     console.log('You Choose Sweat Tea, Thanks');
//     break;
//   case 'Plain Tea':
//     console.log('You Choose Plain Tea, Thanks');
//     break;
//   case 'Boba':
//     console.log('You Choose Boba, Thanks');
//     break;
//   case 'Milk Coffee':
//     console.log('You Choose Milk Coffee, Thanks');
//     break;
//   case 'Choco Ice':
//     console.log('You Choose Choco Ice, Thanks');
//     break;
//   default:
//     if (minuman === ' ') {
//       console.log('input minuman');
//     } else {
//       console.log('minuman is not defined');
//     }
// }


// // ===================================================================================================
// // 
// var pembelian = 40000;
// var coupon = 'Free15%';

// switch (coupon) {
//   case 'FreeOngkir':
//     // ......
//     if (pembelian >= 50000) {
//       console.log('Pembelian = ' + pembelian);
//       console.log('Potongan 10% sebesar =' + pembelian * 0.1);
//       console.log('yang harus dibayar =' + (pembelian - pembelian * 0.1));
//     } else if (pembelian >= 30000 && pembelian < 50000) {
//       console.log('Pembelian = ' + pembelian);
//       console.log('Potongan 5% sebesar =' + pembelian * 0.05);
//       console.log('yang harus dibayar =' + (pembelian - pembelian * 0.05));
//     } else if (pembelian < 30000) {
//       console.log('Pembelian = ' + pembelian);
//       console.log('Potongan 2.5% sebesar =' + pembelian * 0.025);
//       console.log('yang harus dibayar =' + (pembelian - pembelian * 0.025));
//     }
//     break;
//   case 'Free15%':
//     // .....
//     if (pembelian >= 30000) {
//       console.log('Pembelian = ' + pembelian);
//       console.log('Potongan 15% sebesar =' + pembelian * 0.15);
//       console.log('yang harus dibayar =' + (pembelian - pembelian * 0.15));
//     } else {
//       console.log('tidak ada potongan');
//     }
//     break;

//   default:
//     console.log('tidak ada coupon');
//     break;
// }
