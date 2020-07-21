const root = document.querySelector('#root')
const textTitle = 'Dificuldade'

// Tagged Template String
const title = Title`
    color: red;
    ${textTitle};
`
root.insertAdjacentHTML('beforeend', title);