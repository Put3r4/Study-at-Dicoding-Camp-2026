// == : Membandingkan dua nilai apakah sama
// != : Membandingan dua nilai apakah tidak sama
// === : Membandingkan dua nilai apakah identik (bahkan tipe datanya)
// !== : Membandingkan dua nilai apakah tidak identik
// > : Perbandingan lebih besar
// >= : Perbandinga lebih besar / sama dengan
// < : Perbandingan lebih kurang
// <= : Perbandingan lebih kurang / sama dengan

// Case 1
const aString = '10';
const aInt = 10;

console.log(aInt == aString);
console.log(aInt === aString);

// Case 2
const score = 83;

if (score > 80) {
  console.log('Nilai Anda A');
} else if (score > 70) {
  console.log('Nilai Anda B');
} else if (score > 60) {
  console.log('Nilai Anda C');
} else {
  console.log('Anda Tidak Lulus !');
}

// else if digunakan untuk logika percabangan yang lebih banyak
