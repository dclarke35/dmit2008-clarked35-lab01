import { getToDoData } from './lib/firebase/api';
import { toDoItemTemplate } from './templates/toDoItem';


let store = []

async function appInit() {
	const toDos = await getToDoData();
	store = Object.values(toDos).map((obj)=> {
        return toDoItemTemplate(obj)
    })
    
    const container = document.createElement('div');
    store.forEach(markup => container.appendChild(markup))

    document.querySelector('#root').insertAdjacentElement('beforeend', container)
}

appInit();

