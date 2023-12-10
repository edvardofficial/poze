function submitForm() {
    var password = document.querySelector('.password').value;
    if (password == 'TheBeautyPhotoValeria') {
      alert("Permitemi săți arăt ce îmi este pe inimă❤️❤️")
      window.location.href = "./page/page.html";
    } else {
      alert('Parola nu este corectă');
    }
}
