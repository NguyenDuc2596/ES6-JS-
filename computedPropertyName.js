// Đặt biến gán string, chuyển dữ liệu(string) của biến thành key
const computedPropertyName = 'buaToi'
const buaAn = {
    buaSang: "Xoi",
    buaTrua: "Com",
    [computedPropertyName]: "Bun"
} // Nó không phải chữ bữa tối ,mà nó lấy biến giá trị biến computedPropertyName nó gán vào tên key trong buaAn
console.log(buaAn); //{ buaSang: 'Xoi', buaTrua: 'Com', buaToi: 'Bun' }

const buaAnKhac ={
    buaSang:"Xoi",
    buaTrua:"Com",
    [computedPropertyName + 'HomNay']: 'Bun'
}
console.log(buaAnKhac);// { buaSang: 'Xoi', buaTrua: 'Com', buaToiHomNay: 'Bun' }

///// Bai Tap/////
const ten = "Ten"
const nguoi = {
    [`hoVa${ten}`]: 'Duc',
    quocTich: 'VietNam'
}
console.log(nguoi);//{ hoVaTen: 'Duc', quocTich: 'VietNam' }

const nguoiKhac = {
    ...nguoi,
    [`hoVa${ten}`]: 'Thuy',
    tuoi: 23
}
console.log(nguoiKhac);//{ hoVaTen: 'Thuy', quocTich: 'VietNam', tuoi: 23 }
