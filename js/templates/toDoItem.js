/* 
     template is JSX  

     React Component 
     jsx + data
*/
import { toElement } from './../utils/toElement';

function toDoItemTemplate(obj) {
	const template = `
        <div class="bg-gray-100 text-black border-l-8 border-green-500 rounded-md px-3 py-2 my-2">
            <div class="flex justify-between text-gray-500 font-thin text-sm pt-1">
                <p>${obj.status}</p>
                <span>Due Date: ${obj.finish}</span>
            </div>
            <p class="text-gray-500 font-thin text-lg pt-1">${obj.todo}</p>

        </div>
        `
    ;

	return toElement(template);
}

export { toDoItemTemplate };

   