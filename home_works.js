const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')


const regExp = /^[a-z0-9._]+@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'адрес эл.почты сохронен'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'адрес эл.почты не правильный'
        gmailResult.style.color = 'red'
    }
}





const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')


function moveRight(childBlock,parentBlock, distance, step) {
    if (distance > 0){
        if (childBlock.offsetLeft + step <= parentBlock.offsetWidth - childBlock.offsetWidth){
            childBlock.style.left = `${childBlock.offsetLeft + step}px`
            setTimeout(() => moveRight(childBlock, parentBlock, distance - step, step), 1000)
        }
    }
}

const distance = 500
const step = 50
moveRight(childBlock, parentBlock, distance, step)