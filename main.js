const container = document.querySelector('.container'), 
successContainer = document.querySelector('.success-container'),
emailInput = document.querySelector('#email'),
submitBtn = document.querySelector('#submit-btn'),
dismissMessage = document.querySelector('#dismissMessage')



submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    if(!emailInput.value) {
        emailInput.classList.add('error')
        return
    }

    if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailInput.value)){
        container.style.display = 'none';
        successContainer.style.display = 'block'
    }else{
        emailInput.style.border = '1px solid red'
        emailInput.classList.add('error')
    }
})

emailInput.addEventListener('keyup', ()=>{
    if(!emailInput.value) {
        emailInput.style.border = '1px solid red'
        emailInput.classList.add('error')
    }else{
        emailInput.style.border = '1px solid gray'
        emailInput.classList.remove('error')
    }
})

dismissMessage.addEventListener('click', ()=>{
    successContainer.style.display = 'none'
    container.style.display = 'flex';
})
// This is emargency brance