// ES5
function congHaiSo(x, y) {
    if (y === undefined) {
        y = 2
    }
    return x + y
}
const tongxy = congHaiSo(4, 5);
console.log(tongxy); // giá trị nhận được là 9 ; 

const tong = congHaiSo(3)
console.log(tong);// giá trị nhận được là 5(không cho giá trị y, mặc định y =2)

//////////////////////////////////////////////////////////
                               //ES6//
const congHaiSo = (x, y = 2) => x + y    // khai báo ArrowFunction
const tong = congHaiSo(3) ; console.log(tong) // giá trị sẽ là 5
const tong = congHaiSo(3, 5); console.log(tong);// giá trị sẽ là 8

//----> cái trên chính là tham số mặc định(defaultParameter)
 const nhanHaiSo =(x,y =5) => x*y
 const tich =nhanHaiSo(3)
 console.log(tich); // nhận giá trị là 15 vì không truyền tham số y thì nó tự mặc định y bằng 5

