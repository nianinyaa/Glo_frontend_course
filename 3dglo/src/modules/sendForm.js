// const sendForm = (idForm) =>  {
//     const form = document.getElementById(idForm)

//     let user = {
//         name: 'Alex',
//         age: 24
//     }

// const sendData = (data) => {
//     return fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST', 
//         body: JSON.stringify(data), 
//         headers: {
//             "Content-Type": "application/json"
//         }

//     }).then(res => res.json())
// }


//     form.addEventListener('submit', (event) => {
//         event.preventDefault()// останваливает стандартное поведение страницы, когда исполлзуется метод get и перезагружаетс] страница
        
//         const formData = new FormData(form) // метод сбора ВСЕХ данных из формы. собирает все данные из формы, но только с тех элементов, у которых есть аттрибут name.
//         //если у input не будет name, то ему не за что зацепитьс -> давать инпутам name
//          const formBody = {}//создаем пустой объект
        
        
//         formData.forEach((val, key) =>{
//             formBody[key] = val
//         }) // принимает колбек, который каждую итерацию принимате value, callback  
//         // с каждой итерацией будем обращаться к объекту body и записывать в него свойства 

//         console.log('submit');

//         sendData({formBody }).then(data => {
//             console.log(data)
//         } )
         

//     })

// }


//ЕСЛИ НУЖНО ВНЕСТИ ДОП ДАННЫЕ. проверка заполненности полей или наличия класса success - эта проверка один из способов,есть еще 
// const sendForm = ({formId, someElem = []}) =>  {
//     const form = document.getElementById(formId)

//     const validate = (list) => {
//         let success = true

//         list.forEach(input => {
//             if(!input.classList.contains('success')){ // для проверки ставим отрицание 
//                 success = false
//             }
//         })

//         return success 
//     }

// const sendData = (data) => {
//     return fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST', 
//         body: JSON.stringify(data), 
//         headers: {
//             "Content-Type": "application/json"
//         }

//     }).then(res => res.json())
// }


//     form.addEventListener('submit', (event) => {
//         event.preventDefault()
        
//         const formElements = form.querySelectorAll('input')


//         const formData = new FormData(form) 
//          const formBody = {}
        
        
//         formData.forEach((val, key) =>{
//             formBody[key] = val
//         }) 
    
//         someElem.forEach(elem => { 
//             const element = document.getElementById(elem.id)
//             console.log(element )
//             if(elem.type === 'block'){ 
//                 formBody[elem.id] = element.textContent
//             } else if (elem.type === 'input') {
//                 formBody[elem.id] = element.value
//             }
//                 console.log(elem)
//         })


//         console.log('submit');

//         if(validate(formElements)){ 
//         sendData(formBody).then(data => {
//             console.log(data)
//         })
//     }else{
//         alert('Данные не отправлены')
//     }
// })
// }



// export default sendForm


//ЕЩЕ ОДИН СПОСОБ ПРОВЕРИТЬ ЗАПОЛНЕННОСТЬ ПОЛЕЙ 
const sendForm = ({formId, someElem = []}) =>  {
    const form = document.getElementById(formId)

// Делаем сообщение, что идет загрузка, отправляются данные и очищается это сообщение

const statusBlock = document.createElement('div')
const loadText = 'Загрузка...'
const errorText = 'Ошибка'
const successText = 'Спасибо! Наш менеджер с вами свяжется!'
const validatePhone = (phone) => /^[0-9+()\- ]+$/.test(phone)
const validateName = (name) => /^[а-яёА-ЯЁ\s]+$/.test(name)
const validateMessage = (message) => /^[а-яёА-ЯЁ0-9\s.,!?;:"'\-()]+$/.test(message)


    const validate = (list) => {// не доработана валидация
        let success = true

        return success 
    }

const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: {
            "Content-Type": "application/json"
        }

    }).then(res => res.json())
}


const submitForm = () => {
    const formElements = form.querySelectorAll('input')

        const formData = new FormData(form) 
        const formBody = {}
        
        statusBlock.textContent = loadText
        form.append(statusBlock)

        
        formData.forEach((val, key) =>{
            formBody[key] = val
        }) 
    
        someElem.forEach(elem => { 
            const element = document.getElementById(elem.id)
            console.log(element )
            if(elem.type === 'block'){ 
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
                console.log(elem)
        })


        console.log('submit');

        // после того как данные улетели на сервер, нам нужно очистить все  value - делать лучше в цепочке then 

        if(validate(formElements)){ 
        sendData(formBody).then(data => {

            statusBlock.textContent = successText


            formElements.forEach(input => {
                input.value = ''
            })
        })
        .catch(error => {
            statusBlock.textContent = errorText
        })
    }else{
        alert('Данные не отправлены')
    }
}

try {
    if(!form){
        throw new Error('Верните форму')
    }

    const phoneInput = form.querySelector('[name="user_phone"]')
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {

            e.target.value = e.target.value.replace(/[^0-9+()\-]/g, '')
        })
    }


    const textInput = form.querySelector('[name="user_name"]')
    if(textInput)[
        textInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ\s]/g, '');
        })
    ]


    const messageInput = form.querySelector('[name="user_message"]');
    if (messageInput) {
      messageInput.addEventListener('input', (e) => {
        // Удаляем запрещённые символы
        e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ0-9\s.,!?;:"'\-()]/g, '');
      });
    }
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        submitForm()  
})
} catch (error) {
    console.log(error.message)
}
    
}

export default sendForm