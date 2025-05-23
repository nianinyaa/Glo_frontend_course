const dataPromise = fetch('db.json')

dataPromise
.then(response => response.json())
.then(data => console.log('Сервер работает корректно', data))
.catch(error => console.log('Ошибка', error))

setTimeout(() => {
    dataPromise
    .then(response => response.json())
    .then(data => console.log('Второе использование', data))
    .catch(error => console.log('Ошибка', error))
}, 2000);


const sendData = ({'https:jsonplaceholder.typicode.com/posts', data = {}, method = 'GET'}) => {
    return fetch('https:jsonplaceholder.typicode.com/posts', {
     method: method ,
 body: JSON.stringify(user),
 headers: {
   'Content-type': 'application/json; charset=UTF-8',
 },
}) 
}


