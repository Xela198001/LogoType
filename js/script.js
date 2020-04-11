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
}

function rating() {
    var rating = document.querySelectorAll('.product-info__rating');
    var el = document.querySelectorAll('.card-rating');
    // var lbl = document.querySelectorAll('div.card-sale-label');
    var dataRating;
    for (i = 0; i < rating.length; i++) {
       dataRating = rating[i].getAttribute('data-rating');
       rating[i].style.width = dataRating+'%';

       console.log(dataRating);
    
    };
}

setInterval(rating, 10000);