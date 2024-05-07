
window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form')
    const input=document.querySelector('#new-task-input')
    const tasks=document.querySelector('#tasks')
    // const existing_to_do=localStorage.getItem('to_do_tasks')
    // console.log('existing_to_do', existing_to_do)
    // if (existing_to_do){
    //     tasks.innerHTML=existing_to_do
    // }
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const task=input.value
        input.value=''
        const taskElement=document.createElement('div')
        taskElement.classList.add('task')
        const contentElement=document.createElement('div')
        contentElement.classList.add('content')
        taskElement.appendChild(contentElement)
        const inputElement=document.createElement('input')
        inputElement.classList.add('text')
        inputElement.type='text'
        inputElement.setAttribute('readonly', 'readonly')
        inputElement.value=task
        contentElement.appendChild(inputElement)
        const completeButton=document.createElement('button')
        completeButton.classList.add('complete')
        completeButton.innerText='Mark as Complete'
        const deleteButton=document.createElement('button')
        deleteButton.classList.add('delete')
        deleteButton.innerText='Delete'
        const actionElement=document.createElement('div')
        actionElement.classList.add('actions')
        actionElement.appendChild(completeButton)
        actionElement.appendChild(deleteButton)
        taskElement.appendChild(actionElement)
    

        tasks.appendChild(taskElement)
    //    localStorage.setItem('to_do_tasks', tasks.innerHTML)
        deleteButton.addEventListener('click',() => {
          tasks.removeChild(taskElement)
        }) 
        completeButton.addEventListener('click',() => {
            if (taskElement.style.opacity === '0.5') {
                taskElement.style.opacity = '1';
                completeButton.innerText = 'Mark as Complete';
            } else {
                taskElement.style.opacity = '0.5';
                completeButton.innerText = 'Mark as Incomplete';
            }
        })

    })
})



