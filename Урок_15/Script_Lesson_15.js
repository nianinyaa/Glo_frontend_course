const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')

const toDoData[];

const loadFromLocalStorage = function(){ // в принципе задаем эту функцию, но не вызываем ее, вызов - в конце, после всех функций
    const savedData = localStorage.getItem('todoData'); //откуда подтягивает данные,и почему так называем?
    if(savedData){
        toDoData = JSON.parse(savedData);
    }
}


const saveToLocalStorage = function(){ 
    localStorage.setItem('todoData', JSON.stringify(toDoData)); // почему todoData и toDoData ??
}


const render = function(){
    todoList.innerHTML = " ";
    todoCompleted.innerHTML = " ";

    toDoData.forEach(function(item){ // запуталсь, когда объявлять через const когда нет 
        const li = document.createElement('li');

        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo"> ' +item.text + '</span>'+
            '<div class="todo-buttons>'+
            '<button class="todo-remove"></button>'+            
            '<button class="todo-complete"></button>'+
            '</div>'

            // if(item == " "){
            //     render()
            // }

            if(item.completed){
                todoCompleted.append(li);
            }else{
                todoList.append(li)
            };

        li.querySelector('.todo-complete').addEventsListener('click', function(){
            item.completed =!item.completed;
            render();
        });

        li.querySelector('.todo-remove').addEventListener('click', function(){
            // let deleteText = 'Купить хлеб'; -  почему нельзя так оставить?
            const deleteIndex = toDoData.findIndex(function(item){
                return item.text === deleteText;
            })

            if(deleteIndex !== -1){
                toDoData.splice(deleteIndex,1); // метод splice изменяет исходный маасив, умеет убирать и добавлять элементы - в [] - какой элемент удаляем и сколько позиций удаляем 

                render();
            }
            // )   // ???
        });     

    }); 
    saveToLocalStorage();
        
}


todoControl.querySelector('submit', function(event){
    event.preventDefault();
    

const taskText = headerInput.value.trim();    
    if(taskText === ''){
        alert('Введите дело!');
        return; 
    }

    const newToDo = { // а вот тут уже есть const - почему?
            text: taskText,
            completed: false,   
        };
        toDoData.push(newToDo);
        render();
});


loadFromLocalStorage(); // непосредственно загружаем при открытии страницы 
render();


//ЗАДАНИЕ Учесть вариант отсутствия объекта в localstorage пользователя при первой загрузке страницы) - как делать? Вопрос к куратору, не знаю, какой метод подойдет 
