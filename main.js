const myToDoList = new ToDoList();

document.addEventListener("DOMContentLoaded", () => {
    const taskinput = document.getElementById("taskInput");
    const addtaskButton = document.getElementById("addTaskButton");
    let dataOutput = document.getElementById("dataOutput");
    const array = [];
    const outarray = [];
    addtaskButton.addEventListener("click", event => {
        dataOutput.innerHTML = "";
        event.preventDefault();
        const task = taskinput.value;
        array.push(task);
        myToDoList.addTask(task);
        myToDoList.viewTasks();
        let output = `
        <tr>
            <td style="border: 1px solid maroon">${task}</td>
            <td style="border: 1px solid maroon">Ongoing</td>
            <td>
                <button class="btn" style="background-color: rgb(236, 72, 72); color: white; height:40px; border: 2px solid maroon;" onclick="CompleteTask(${array.indexOf(task)})">Complete</button>
                <button class="btn" style="background-color: maroon; color: white; height:40px; border: 2px solid maroon;" onclick="RemoveTask(${array.indexOf(task)})">Remove</button>
            </td>
        </tr>
    `

        outarray.push(output);
        outarray.forEach(element => {
            dataOutput.innerHTML += element;
        })
        taskinput.value = "";


    });


    function CompleteTask(index) {
        myToDoList.completeTask(index);
        dataOutput.innerHTML = "";
        outarray[index] = `
        <tr>
            <td style="border: 1px solid maroon">${array[index]}</td>
            <td style="border: 1px solid maroon">Completed</td>
            <td>
                <button class="btn" style="background-color: maroon; color: white; height:40px; border: 2px solid maroon;" onclick="RemoveTask(${array.indexOf(array[index])})">Remove</button>
            </td>
        </tr>
    `


            outarray.forEach(element => {
            dataOutput.innerHTML += element;
        });


    };

    function RemoveTask(index) {
        myToDoList.removeTask(index);
        dataOutput.innerHTML = "";
        outarray[index] = "";
        outarray.forEach(element => {
            dataOutput.innerHTML += element;
        })
    }

    window.CompleteTask = CompleteTask;
    window.RemoveTask = RemoveTask;
});



