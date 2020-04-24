// -------------------- Start Menu Header Mobile -----------------
  // -------------------- Start Menu Header Mobile -----------------

  const btnMenu = document.getElementById('menu__mobile');
  const menuMobile = document.getElementById('container__menu');

  
  btnMenu.addEventListener('click', (event) => {
    
    if(!menuMobile.hasAttribute('open')){
      menuMobile.style.height = '300px';
      menuMobile.style.visibility = 'visible';
      menuMobile.setAttribute('open', true);
    }else{
      menuMobile.style.height = '0px';
      menuMobile.style.visibility = 'hidden';
      menuMobile.removeAttribute('open');
    }
  })

 // -------------------- Start Menu Header Mobile -----------------
// -------------------- Start Menu Header Mobile -----------------

// -------------------- Start Slider hover -----------------
  // -------------------- Start Slider hover -----------------

  const sldrItem = document.getElementsByClassName('slider--item');
  const items = [];

  for(let i = 0; i < sldrItem.length; i++){

    items.push(sldrItem[i]);

    sldrItem[i].addEventListener('mouseover', (event) => {
      event.currentTarget.classList.add('slider--item-selected');
      items.forEach((item) => {
        if(!item.classList.contains('slider--item-selected')){
          item.classList.add('slider--item-noSelected');
        }
      })
    })

    sldrItem[i].addEventListener('mouseout', (event) => {
      event.currentTarget.classList.remove('slider--item-selected');
      items.forEach((item) => {
        if(!item.classList.contains('slider--item-selected')){
          item.classList.remove('slider--item-noSelected');
        }
      })
    })

  }

 // -------------------- Start Slider hover -----------------
// -------------------- Start Slider hover -----------------