const board = document.querySelector('#board')
const colors = ['#90afc5', '#336b87', '#763626', '#f34a4a', '#f1d3bc', '#004445', '#2c7873', '#6fb98f']
const SQUARES_NUMBER = 600 //кол-во квадратиков

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div') //создаем элементы div
    square.classList.add('square') //добавляем стили к элементам

    square.addEventListener('mouseover', setColor) //добавляем слушатель, который определяет наведение мыши
    square.addEventListener('mouseleave', removeColor)//добавляем слушатель, который определяет когда курсор убрали

    board.append(square)//добавляем эти элементы в HTML
}
function setColor(event){
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(event){
    const element = event.target
    element.style.backgroundColor='#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors [Math.floor(Math.random()*colors.length)]
}