import { getToDoData } from './lib/firebase/api';
import { toDoItemTemplate } from './templates/toDoItem';


let store = []

async function appInit() {
	const toDos = await getToDoData();
	store = Object.values(toDos).map((obj)=> {
        return toDoItemTemplate(obj)
    })

    const container = document.createElement('div');

    const store10 = store.splice(0,10)
    store10.forEach(markup => container.appendChild(markup))
 
    document.querySelector('#root').insertAdjacentElement('beforeend', container)
}

appInit();

