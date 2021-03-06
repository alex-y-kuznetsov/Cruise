'use strict';

(function () {
  var loginOpener = document.querySelector(".login__dropdown");
  var loginMenu = document.querySelector(".login__fields");

  var openLoginHandler = function (evt) {
    evt.preventDefault();
    loginMenu.classList.toggle('login__fields--hidden');
  };

  loginOpener.addEventListener('click', openLoginHandler);
})();
