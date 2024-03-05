let popupBg = document.querySelector('.popupBg')
let popup = document.querySelector('.popup')
let buttonOpenPopup = document.querySelector('.openPopup')
let buttonSignUp = document.querySelector('.butSignUp')
let signUpBg = document.querySelector('.signUpBg')
let buttonLogIn = document.querySelector('.butLogIn')
let signUpPop = document.querySelector('.signUpPop')



buttonOpenPopup.addEventListener('click', function() {
    popupBg.classList.add('active')
})



buttonSignUp.addEventListener('click', function() {
    signUpBg.classList.add('active')
    if (signUpBg === 'active') {
        popupBg.classList.remove('active')
    }
})



buttonLogIn.addEventListener('click', function() {
    popupBg.classList.add('active')
    if (popupBg.classList.value === 'popupBg active') {
        signUpBg.classList.remove('active')
    }
})



document.addEventListener('click', function(e) {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    } else if (e.target === signUpBg) {
        signUpBg.classList.remove('active');
        signUpPop.classList.remove('active');
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});