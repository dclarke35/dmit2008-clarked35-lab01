/* 
     template is JSX  

     React Component 
     jsx + data
*/
import { toElement } from './../utils/toElement';

function toDoItemTemplate(obj) {
    const status = obj.status;

    let statusColor = "border-green-500";
    let statusFontcolor = "text-gray-400";
    let dueDateFontColor = "text-gray-400";
    if(status == "Completed")
    {
        statusColor = "border-gray-400";
    }
    if(status == "Cancelled")
    {
        statusColor = "border-red-700";
        statusFontcolor = "text-red-800";
    }

	const template = `
        <div class="bg-gray-100 text-black border-l-8 ${statusColor} rounded-md px-3 py-2 my-2">
        <div class="flex justify-between">
            <p class="text-gray-400 align-self-bottom font-thin text-sm">${obj.category}</p>
            <p class="font-thin text-sm ${dueDateFontColor}">Due Date: ${obj.finish}</p>
            </div>
            <div class="flex justify-between">
            <p class="text-gray-800 font-thin text-lg">${obj.todo}</p>
            <p class="${statusFontcolor} font-thin text-sm">${obj.status}</p>
        </div>

        </div>
        `;

	return toElement(template);
}

export { toDoItemTemplate };

   