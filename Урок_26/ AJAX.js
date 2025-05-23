const getData = (url = './db.json') => {
  return fetch(url)
.then(response => {
  if(!response.ok){
    throw new Error('Ошибка') 
  }
  return response.json()
})
}

const sendData = (url = 'https://jsonplaceholder.typicode.com/posts', data, method = 'POST') => {
  return fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if(!response.ok) {
      throw new Error ('Ошибка отправки')
    }
    return response.json()
  })
}


setTimeout(() => {

getData()
.then(data => {
  return sendData(undefined, data, 'POST')// undefined - по умолчанию, была указана в начале 
})
.then(result => {console.log('Данные отправлены', result)
})
.catch(error => {console.error('Ошибка', error)
})
}, 2000)





