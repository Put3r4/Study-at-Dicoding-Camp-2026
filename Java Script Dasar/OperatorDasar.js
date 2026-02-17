// Operator OR : ||
// Operator AND : &&

// Case 1
let totalBelanjaA = 125000;
let jenisMemberA = 'Bronze';

if (totalBelanjaA > 100000 && jenisMemberA == 'Silver') {
  console.log('Selamat, Anda mendapat diskon sebesar 10%');
} else {
  console.log('Maaf, saat ini Anda belum mendapat diskon');
}

// Case 2
let totalBelanjaB = 125000;
let jenisMemberB = 'Bronze';

if (totalBelanjaB > 100000 || jenisMemberB == 'Silver') {
  console.log('Selamat, Anda mendapat diskon sebesar 10%');
} else {
  console.log('Maaf, saat ini Anda belum mendapat diskon');
}
