//Biến

//(Code Js ít-gần như không dùng var)
// var  anToi ='Com'
// var x = 100
// if(x>50){var anToi ="Pho"}
// console.log(anToi);
// var anToi ='Pho'
// var có giá trị bị thay đổi trong toàn cục
// khai báo bằng var dẫn tới rất nhiều lỗi

/////////////////////////////////////////////////////////////////////////////////
let anToi = 'Com'
let x = 100
if (x > 50) {
    let anToi = 'Pho' //lúc này anToi ở đây khác hoàn toàn anToi khai báo let anToi = 'Com'(bên ngoài) chứ không phải thay đổi giá trị
    anToi = 'Pho' // khi không để let thì anToi trong này chính là anToi khai báo let bên ngoài(đã thay đổi giá trị từ cơm sang phở)
    console.log(anToi) // mang giá trị Pho 
}
console.log(anToi); // mang giá trị 'Com' nếu anToi = 'Pho' không tồn tại trong {} bên trên(vì let anToi = 'Pho' chỉ có giá trị trong {} , let còn gọi là biến cục bộ )
                    //mang giá trị là "Pho" nếu let anToi = 'Pho' không tồn tại trong {} bên trên.

//<---->//
let anToi = 'Pho' // let anToi da duoc khai báo là 'Com' nên không thể khái báo let anToi  là phở, nếu chỉ nằm bên ngoài
console.log(anToi) //SyntaxError: Identifier 'antoi' has already been declared(Định danh 'antoi' đã được khai báo).

//<---->//
anToi = "Phosadas";// có thể thay đổi dữ liệu của biến đã được khai báo bằng let
console.log(anToi);// Phosadas

//(có thể khai báo cùng 1 biến let nếu 1 cái ngoài {}, 1 cái bên trong{}). 
// có thể thay đổi dữ liệu của biến đã được khai báo bằng let




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const anToi = 'Com'
anToi = 'Pho'
console.log(anToi) //SyntaxError: Identifier 'anToi' has already been declared
//(Lỗi vì khai báo 1 cái hằng số)
// ---> Không thể cập nhập(thêm), không thể khai báo lại

//<---->//
const buaAn ={
    anTrua: 'com',
    anToi : 'pho'
}
const buaAn ={
    anSang:'xoi' 
} 
console.log(buaAn); //ReferenceError: anToi is not defined (Không thêm dữ liệu)
//<---->//
const buaAn = {
    anTrua: 'com',
    anToi: 'pho'
}
buaAn.anTrua = 'bun'
console.log(buaAn);//cho ra : { anTrua: 'bun', anToi: 'pho' }
//--->Không được phép chỉnh sửa buaAn, nhưng có thể chỉnh sử dữ liệu bên trong cái buaAn(vd:anTrua,anToi),áp dụng cho cả
//  OJ và ARR, FUNCTION
// Không thêm mới được dữ liệu nhưng có thể chỉnh sửa dữ liệu bên trong(chỉnh những cái đã tồn tại)

////////////////////////////
//---> H trở đi lập trình JS chỉ dùng const và let, ưu tiên const
//
