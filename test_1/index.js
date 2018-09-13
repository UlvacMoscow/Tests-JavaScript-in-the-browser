document.getElementById('mainPic').onclick = function ()  {
  this.src = 'i/preview.jpg';
  setTimeout(() => {
    this.src = 'i/photo.jpg'
  }, 2000);
  this.click = null;
};
