let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

// Login page

  const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link"),
      createPw = document.querySelector("#createPw"),
      confirmPw = document.querySelector("#confirmPw"),
      alertIcon = document.querySelector(".errorIcon"),
      alertText = document.querySelector(".txt"),
      submitBtn = document.querySelector("#button");

      //show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
      eyeIcon.addEventListener("click", ()=>{
          pwFields.forEach(pwField =>{
              if(pwField.type ==="password"){
                  pwField.type = "text";

                  pwShowHide.forEach(icon =>{
                      icon.classList.replace("uil-eye-slash", "uil-eye");
                  })
              }else{
                  pwField.type = "password";

                  pwShowHide.forEach(icon =>{
                      icon.classList.replace("uil-eye", "uil-eye-slash");
                  })
              }
          }) 
      })
  })

  //to appear signup and login form
  $(document).ready(function() {
    signUp.addEventListener("click", ( )=>{
      container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

    // to check and confirm input field's password

    createPw.addEventListener("input", ()=>{
      let inputValue = createPw.value.trim(); //trim function do not count more than one space

      if(inputValue.length >=8 ){
        confirmPw.removeAttribute("disabled");
        submitBtn.removeAttribute("disabled");
        submitBtn.classList.add("active");
      }else{
        confirmPw.setAttribute("disabled", true);
        submitBtn.setAttribute("disabled", true);
        submitBtn.classList.remove("active");
        confirmPw.value = "";
        alertText.style.color = "#a6a6a6";
        alertText.innerText = "Enter at least 8 characters";
        alertIcon.style.display = "none";
      }
    });

    submitBtn.addEventListener("click", ()=>{
      if(createPw.value === confirmPw.value){
        alertText.innerText = "Password matched";
        alertIcon.style.display = "none";
        alertText.style.color = "#4070F4";
      }else {
        alertText.innerText = "Password didn't matched";
        alertIcon.style.display = "block";
        alertText.style.color = "#D93025";
      }
    });
  });

// CART


// --quantity button----
var productSubtotalAmt = document.getElementById('productSubtotalAmt');
var deliveryCharge = document.getElementById('deliveryCharge');
var totalCartAmt = document.getElementById('totalCartAmt');


const decreaseNumber = (incdec,itemPrice) => {
  var itemVal = document.getElementById(incdec);
  var itemPrice = document.getElementById(itemPrice);


  if(itemVal.value <= 0){
    itemVal.value = 0;
  }else{
    itemVal.value = parseInt(itemVal.value) - 1;
    itemPrice.innerHTML = parseInt(itemPrice.innerHTML) - 100 ;
    productSubtotalAmt.innerHTML = parseInt(productSubtotalAmt.innerHTML) - 100 ;
    totalCartAmt.innerHTML = parseInt(productSubtotalAmt.innerHTML) + parseInt(deliveryCharge.innerHTML) ;
  }
}
const increaseNumber = (incdec,itemPrice) => {
  var itemVal = document.getElementById(incdec);
  var itemPrice = document.getElementById(itemPrice);


  if(itemVal.value >= 10){
    itemVal.value = 10;
    alert('Max 10 allowed');
  }else{
    itemVal.value = parseInt(itemVal.value) + 1;
    itemPrice.innerHTML = parseInt(itemPrice.innerHTML) + 100;
    productSubtotalAmt.innerHTML = parseInt(productSubtotalAmt.innerHTML) + 100 ;
    totalCartAmt.innerHTML = parseInt(productSubtotalAmt.innerHTML) + parseInt(deliveryCharge.innerHTML) ;

  }
}

  // working cart

if (document.readyState == 'loading'){
  document.addEventListener("DOMContentLoader", ready)
} else{
  ready()
}

  // making functions

function ready(){
  //remove items from cart
  var removeCartButton = document.getElementsByClassName('cart-remove')
  console.log(removeCartButton)
  for (var i = 0; i < removeCartButton.length; i++){
    var button = removeCartButton[i]
    button.addEventListener('click', removeCartItem)
  }
}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.remove()
}


function switchVisible() {
  if (document.getElementById('check')) {

      if (document.getElementById('check').style.display == 'none') {
          document.getElementById('check').style.display = 'none';
          document.getElementById('wrapper').style.display = 'none';
      }
      else {
          document.getElementById('check').style.display = 'none';
          document.getElementById('wrapper').style.display = 'flex';
      }
  }
}