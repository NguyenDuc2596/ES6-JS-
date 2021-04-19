// for of (dùng ARR)

const buaAn = {
    buaSang: "XOI",
    buaTrua: "PHO",
    buaToi: 'Cơm'
}
const bangChuCai = ['a', 'b', 'c']

// FOR IN
for (let moiBuaAn in buaAn) console.log(moiBuaAn); // chỉ hiện key(chứ ko in value): buaSang,buaTrua,buaToi
for (let moiBuaAn in buaAn) console.log(buaAn[moiBuaAn]) // Hiện value của từng key trong buaAn

for (let moiChuCai in bangChuCai) console.log(moiChuCai);// chỉ in ra số thứ tự(index), không in ra value

// ////ES6, for of
for (let moiChuCai of bangChuCai) console.log(moiChuCai); // in ra a,b,c(value)
// for (let moiBuaAn of buaAn) console.log(moiBuaAn) // không dùng for of được kiểu này


//bài tập// chạy từng kí tự trong tên xong viết hoa
const ten = 'jack '
for (let kiTu of ten) console.log(kiTu.toUpperCase());
//J
//A
//C
//K
// .toUpperCase() biến viết thường thành viết hoa






