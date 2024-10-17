// L1 - Task Rescheduling System: Managing Priorities Dynamically
let tasks = ['Complete assignment', 'Go for a walk', 'Practise Coding', 'Learn Bash Scripting', 'Read a book'];
tasks.shift();
tasks.unshift('Fix critical bug', 'Prepare presentation');
tasks[tasks.length - 1] = 'Update project documentation';
for (let i in tasks){
console.log(tasks[i]);
}
