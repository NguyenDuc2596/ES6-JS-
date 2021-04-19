// ES5
// function congHaiSo(x, y) {
//     if (y === undefined) {
//         y = 2
//     }
//     return x + y
// }
// const tong = congHaiSo(4, 5);
// console.log(tong);
/////////////////////////////////////////////
//ES6
// const congHaiSo = (x, y = 2) => x + y    // khai báo ArrowFunction
//const tong = congHaiSo(3)
//const tong = congHaiSo(3, 5)
//console.log(tong); //nếu không gán giá trị cho y thì mặc định giá trị y =2
//----> cái trên chính là tham số mặc định(defaultParameter)
 const nhanHaiSo =(x,y =5) => x*y
 const tich =nhanHaiSo(3)
 console.log(tich); // nhận giá trị là 15 vì không truyền tham số y thì nó tự mặc định y bằng 5

