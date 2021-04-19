// Tạo ra 1 OJ(ARR) mới từ OJ(ARR) cũ mà không thay đổi dữ liệu cái cũ
/////////OJ/////////
const buaAn = {
    buaSang: "XOI",
    buaTrua: "PHO",
    buaToi: 'Cơm'
}
console.log(buaAn);
const buaAn1 = { ...buaAn, buaChieu: 'Chè' }// bẻ tất cả key:value của buaAn để thêm vào OJ buaAn1 nhưng không thay đổi dữ liệu buaAn
console.log(buaAn1);
const buaAn2 = { ...buaAn, buaTrua: 'Bun', buaToi: "Chaos" }
//Nếu trong buaAn2 có chữa key của buaAn nhưng value thay đổi thì buaAn2 sẽ nhận các value thay đổi, còn buaAn sẽ không thay đổi Value
console.log(buaAn2);
/////ARR///////////////
const tapHopSo = [0, 1, 2]
const tapHopSo1 = [...tapHopSo, 3, 4, 5]
console.log(tapHopSo1);

//////////////////////// Bài tập////////////////
// const sinhVien = [
//     {
//         ten: "A",
//         nam: 3
//     },
//     {
//         ten: "B",
//         nam: 4
//     },
// ]
const sinhVien = {
    ten: "DUC",
    nam: 1
}
const sinhVienSapTotNghiep = {
    ...sinhVien,
    nam: 4,
    sapTotNghiep: true
}
console.log(sinhVienSapTotNghiep);