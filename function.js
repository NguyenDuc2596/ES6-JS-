// Cái này ES5
function congHaiSo(x, y) {
    return x + y
}
const tong = congHaiSo(1, 2)
console.log(tong); // giá trị là 3

///////////////////////////////////////////////////////////////
//ES6( ArrowFunciton)
const congHaiSo = (x, y) => {
    return x + y
}
const tong = congHaiSo(1, 2)
console.log(tong); // giá trị là 3

//<---->//
const vietTen = (ten) => { 
     console.log(ten)
}
vietTen('Duc') // nhận được: Duc

//<---->//
//Nếu chỉ có 1 tham số(không cần dấu() ) và chỉ có 1 dòng lệnh(không cần viết dấu {}, trừ TH chữ return phải có {})
const vietTen = ten  => console.log(ten);
vietTen('Duc')

//<---->//
const nhanDoi = x => x * 2
console.log(nhanDoi(4)); // nhận được giá trị là 8

///<---->//
const congHaiSo = (x, y) => x + y // vì chỉ có 1 dòng lệnh
console.log(congHaiSo(2, 3)); // gia trị nhận được là 5




