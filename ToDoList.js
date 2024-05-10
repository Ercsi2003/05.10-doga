class ToDoList {
    tasks = [];

    constructor() {
         this.tasks = [];
    }

    addTask(task) {
        const array = [task, false];
        this.tasks.push(array);
    }

    removeTask(index) {
        this.tasks.slice(index);
    }

    completeTask(index) {
        this.tasks[index].completed = true;
    }

    viewTasks() {
        this.tasks.forEach(todo => {
            console.log(todo);
        });
        
    }
}