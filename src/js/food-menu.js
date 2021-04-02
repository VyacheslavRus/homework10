import menuTemplate from '../templates/menu.hbs'
import menuData from '../menu.json'

const foodMenu = menuTemplate(menuData)

const renderMenu = document.querySelector('.js-menu')
renderMenu.insertAdjacentHTML('beforeend', foodMenu)