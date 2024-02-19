
// searchbox popup start 
function showsearchbox() {
    const searchbox = document.getElementById('searchbox').style.display = "block";
    const cardlist = document.getElementById('mycart').style.display = "none";
}

function hidesearchbox() {
    const cardlist = document.getElementById('searchbox').style.display = "none";
}


// mycart list popup
function showcardlist() {
    const searchbox = document.getElementById('searchbox').style.display = "none";
    const cardlist = document.getElementById('mycart').style.display = "block";
}

function hidecardlist() {
    const cardlist = document.getElementById('mycart').style.display = "none";
}


// user signup  popup show
function showsignpopup() {
    const userfornm = document.getElementById('signup-popup-form').style.display = "block";
    const user = document.getElementById('login-popup-form').style.display = "none";
}


// user login  popup show
function showloginpopup() {
    const userfornm = document.getElementById('login-popup-form').style.display = "block";
    const user = document.getElementById('signup-popup-form').style.display = "none";
}




//For  product details page img chenge

function chengeimg1() {
    const subimg = document.getElementById('subimg1');
    images.src = 'Img/tomato sub (1).png'
}

function chengeimg2() {
    const subimg = document.getElementById('subimg2');
    images.src = 'Img/Veg (2).png'
}
function chengeimg3() {
    const subimg = document.getElementById('subimg3');
    images.src = 'Img/tomato sub (2).png'

}
function chengeimg4() {
    const subimg = document.getElementById('subimg4');
    images.src = 'Img/tomato sub .jpg'
}



// for  product details page  counting

// Select increment and decrement buttons
const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");

// Select total count
const totalCount = document.getElementById("total-count");

// Variable to track count
var count = 0;

// Display initial count value
totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
    count++;
    totalCount.innerHTML = count;
};

// Function to decrement count
const handleDecrement = () => {
    count--;
    totalCount.innerHTML = count;
};



// Add click event to buttons
// incrementCount.addEventListener("click", handleIncrement)
// decrementCount.addEventListener("click", handleDecrement);



// const plus = document.querySelector(".plus"),
//     minus = document.querySelector(".minus"),
//     num = document.querySelector(".num");
// let a = 1;
// plus.addEventListener("click", () => {

//     a++;
//     a = (a < 10) ? "0" + a : a;
//     num.innerText = a;

// });

// minus.addEventListener("click", () => {

//     if (a > 1) {
//         a--;
//         a = (a < 10) ? "0" + a : a;
//         num.innerText = a;
//     }

// });





// for plus minus quentiry of product page


// function plus() {
//     var minus = document.getElementById('minus')
//     var total = document.getElementById('total');
//     var plus = document.getElementById('plus')
//     var price = document.getElementById('price').value = price * 2
//     x = total.value++;
//     console.log(total.value)
//     if (x => 1) {
//         minus.style.display = "block"
//     }

// }
// function minus() {
//     var minus = document.getElementById('minus')
//     var total = document.getElementById('total');
//     var plus = document.getElementById('plus')
//     x = total.value--;
//     console.log(total.value)
//     if (x <= 1) {
//         minus.style.display = "none"
//     }

// }
