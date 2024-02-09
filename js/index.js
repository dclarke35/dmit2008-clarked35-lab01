import { getToDoData } from './lib/firebase/api';
import { toDoItemTemplate } from './templates/toDoItem';

let store = []

async function appInit() {
	const toDos = await getToDoData();
	console.log(toDos)
}

appInit();
