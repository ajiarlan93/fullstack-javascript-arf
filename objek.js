// /**
//  * OBJECT
//  */
// // var student = {
// //     name: "Vincent",
// //     gpa: 3.21,
// //     isGraduated: true,
// //     skills: ["js", "c", "python", "golang", "flutter"],
// //     profile: {
// //         address: "jakarta",
// //         city: "jakarta",
// //     },
// //     "able to code": "yes",
// //     100: 1,
      
// //     mentionName: function () {
// //         console.log("My name is " + this.name);
// //     },
// //     mentionSkills: function () {
// //         console.log("My skills are : ");
// //         for (var i = 0; i < this.skills.length; i++) {
// //         console.log(i + 1 + ". " + this.skills[i]);
// //         }
// //     },
// // };
// // // // cara akses
// // console.log(student.name);
// // console.log(student.gpa);
// // console.log(student["isGraduated"]);
// // console.log(student["able to code"])
// // console.log(student["100"])
// // console.log(student.skills);
// // console.log(student.profile.address);
// // console.log(student.profile.city);

// // student.mentionName()
// // student.mentionSkills();

// /**
//  *cara looping object 
// */
// // for(var key in student){
// // console.log(key + ": " + student[key])
// // }
// //
// // ==================================================================



// ==================================================================
/**
 * LATIHAN SOAL
 * 
 * ubah larik berikut
 * var buah = ["durian", 75000, true];
 * menjadi object
 * |
 *      jenis : "durian",
 *      harga : 75000,
 *      enak : true
 */
// Jawaban:


// // ========================================================================
// /**
//  * LATIHAN
//  * 
//  * Buatlah methot dari object berikut untuk menampilkan profil:
//  * -Nama    : Caca
//  * -Berat   : 45 kg
//  * -Tinggi  : 155 cm
//  * -Hobi    : Nonton, makan
//  */
// var caca = {
//     name: "caca",
//     weight: 45,
//     height: 155,
//     hobbies: ["Nonton", "Makan", "Coding"],
  
//     sebutkanHobby: function () {
//         console.log("Hobby Caca: ");
//         for (var i = 0; i < this.hobbies.length; i++) {
//             console.log(i + 1 + ". " + this.hobbies[i]);
//         }
//     },
// };
// // 
// caca.sebutkanHobby();
// 
//==============================================================================



// // // =============================================================================
// // /**
// //  * Study Case 1
// //  * Buatlah sebuah function untuk menentukan jumlah huruf vocal dalam sebuah string
// //  * 
// //  * contoh:
// //  * countVowels("buka puasa bersama teman kuliah")
// //  * 
// //  * result:
// //  * {
// //  *      a: 7,
// //  *      i: 1,
// //  *      u: 3,
// //  *      e: 2,
// //  *      o: 0
// //  * }
// //  */
// // // Jawaban:

// function countVowels(str) {
//     var result = {
//       a: 0,
//       i: 0,
//       u: 0,
//       e: 0,
//       o: 0,
//     };
  
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === "a") {
//         result.a++;
//         } else if (str[i] === "i") {
//         result.i++;
//          } else if (str[i] === "u") {
//         result.u++;
//          } else if (str[i] === "e") {
//         result.e++;
//         } else if (str[i] === "o") {
//         result.o++;
//         }
//     }
  
//     return result;
// }
  
// console.log(countVowels("buka puasa bersama teman kuliah"));



// // /**
// //  * Study Case 2
// //  * Buatlah sebuah function untuk menghitung voting.
// //  * 
// //  * Di dalam sebuah kota kecil, akan diadakan sebuah pemilihan wali kota baru.
// //  * terdapat 3 kandidat: Vincent, Ncent, Admin
// //  * 
// //  * Hitung jumlah vote tiap-tiap kandidat
// //  * 
// //  * contoh:
// //  * var vote = ["Vincent","Ncent","Admin","Ncent","Vincent"]
// //  * countVotes(votes)
// //  * 
// //  * Result:
// //  * {
// //  *      Vincent: 3,
// //  *      Ncent: 2,
// //  *      Admin: 1
// //  * }
// //  */
// // // Jawaban:

// function countVotes(votes){
//     var result= {
//         Vincent: 0,
//         Ncent:0,
//         Admin: 0
//     }
  
//     for(var i=0; i<votes.length; i++){
//         if(votes[i] === "Vincent"){
//             result.Vincent++
//         } else if(votes[i] === "Ncent"){
//             result.Ncent++;
//         } else if(votes[i] ==="Admin"){
//             result.Admin++
//         }
//     }
      
//     return result;
// }
  
// console.log(countVotes(["Vincent","Ncent","Vincent","Admin","Ncent","Vincent"]))



// /**
// * Study Case 3
// * 
// * Buatlah sebuah function untuk cek siapa pemenang dari vote di atas
// * 
// * Result:
// * Vincent menang dengan 3 suara.
// */
// // Jawaban:
  
// function voteWinner(votes){
//     var voteCounts = countVotes(votes)
  
//     var winner = ""
//     var winnerScore = 0;
  
//     for(var key in voteCounts){
//         if(voteCounts[key] > winnerScore){
//             winnerScore = voteCounts[key]
//             winner = key
//         }
//     }
  
//     return winner + ' menang dengan ' + winnerScore + " suara."
// }
  
// console.log(voteWinner(["Vincent","Ncent","Vincent","Admin","Ncent","Vincent"]))
// ======================================================================================



// ======================================================================================
// /**
//  *  ARRAY OF OBJECTS
//  */
  
// var items = [
//     {
//         id: 1,
//         name: "Asus ROG",
//         price: 15000000,
//         stock: 10,
//         isAvailable: true
//     },
//     {
//         id: 2,
//         name: "Dell Legion",
//         price: 15000000,
//         stock: 5,
//         isAvailable: true
//     },
//     {
//         id: 3,
//         name: "Acer Predator",
//         price: 15000000,
//         stock: 1,
//         isAvailable: true
//     }
// ]

  
// function itemsList(){
//     console.log("Item List: ");
//     for(var i = 0; i < items.length; i++){
//         console.log(items[i].id + ". " + items[i].name)
//     }
// }
  
// function additem(name, price, stock){
//     var id = items[items.length-1].id + 1;
//     var isAvailable = true
  
//     var tempObj = {
//         id, name, price, stock, isAvailable
//     }
  
//     items.push(tempObj)
  
// }
  
// additem("Asus", 10000000, 5)
// additem("Dell", 10000000, 10)


// console.log(items)
// console.table(items)
// itemsList()