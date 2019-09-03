/* 
  Процентное значение скиллов
  поле python применится к прогрессу
  <div class="c-progress type--python">
    <div class="c-progress__value"></div>
  </div>
  и т.д.
*/
const skills = {
  photoshop: 45,
  javascript: 55,
  python: 60,
  figma: 44,
  seo: 61
};

function setSkillsProgress(skills = skills, selector) {
  /*
    Разметка:
    <div class="c-progress type--photoshop">
      <div class="c-progress__value"></div>
    </div>
  */
  for (let key in skills) {
    const nodes = document.getElementsByClassName(`${selector} type--${key}`);
    if (nodes.length > 0) {
      const value = nodes.item(0).getElementsByClassName(selector + '__value');
      const progress = value.item(0);
      progress.style.width = `${skills[key]}%`;
    }
  }
}

setSkillsProgress(skills, 'c-progress');

function drawerInit() {
  const drawer = document.querySelector('.c-menu__drawer');
  const mobileMenu = document.querySelector('.c-menu--mobile');

  drawer.addEventListener('click', () => {
    const isMenuHidden =
      window.getComputedStyle(mobileMenu).opacity === '0' ? true : false;
    mobileMenu.style.opacity = isMenuHidden ? 1 : 0;
  });
}

drawerInit();
