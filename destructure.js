// Viết code sạch đẹp
const buaAn = {
    anSang: 'Com',
    anTrua: 'Pho',
    anToi: 'Chao'
}

const traiCay = ['cam', 'tao', 'buoi']

// // console.log(`Sang nay toi an ${buaAn.anSang}`);
// // console.log(`Trua nay toi an ${buaAn.anTrua}`);
// // console.log(`Toi nay toi an ${buaAn.anToi}`);
// // // Bữa ăn bị lặp lại

// console.log(`Trai cay so 0 la ${traicay[0]}`);
// console.log(`Trai cay so 1 la ${traicay[1]}`);
// console.log(`Trai cay so 2 la ${traicay[2]}`);
// // //Trái cây bị lặp lại

/////////////////Destructure///////////////////////////////////////////////////////////////////
// Với OJ
const { anSang, anTrua, anToi } = buaAn // buaAn là OJ, ta bẻ cái OJ ra thành 3 cái
//3 cái tên biến  này phải trùng tên với 3 cái key của OJ buaAn, 
//Làm như trên lấy dữ liệu của cái key gán cho từng biến(vd:Biến anSang giờ nhận giá trị 'Com')
console.log(`Sang nay toi an ${anSang}`);

//<------------------------------------------>//
//Với ARR
const [cam, xxx, buoi] = traiCay // bẻ thành arr ra gán giá trị cho các biến(Tên biến là bất kì)
console.log(`qua so 0 la ${cam})`);
console.log(`qua so 1 la ${xxx})`);
console.log(`qua so 2 la ${buoi})`);
///////////////////////////////////////////////////////// Thực hành//////////////////
const sinhVien = {
    ten: "DUC",
    tuoi: 25
}
const { ten, tuoi } = sinhVien;
console.log(`ten cua toi la ${ten}, tuoi cua toi la ${tuoi}`);