function sale() {
var sale = document.querySelectorAll('span#sale');
var div = document.querySelectorAll('div#card-sale');
var lbl = document.querySelectorAll('div.card-sale-label');
for (i = 0; i < sale.length; i++) {
    if (sale[i].textContent == '') {
        div[i].innerHTML = '';
    };
    if (sale[i].textContent != '') {
        lbl[i].style.display = 'block';
    };

};
console.log(div)


}