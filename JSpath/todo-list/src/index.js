import Project from './Project';
import Todo from './Todo';
import { renderProjects, renderTodos } from './dom';
import { saveData, loadData } from './storage';

let projects = [];
let currentProjectIndex = 0;

const data = loadData();
if (data) {
  projects = data.map(p => {
    const proj = new Project(p.name);
    p.todos.forEach(t => {
      const todo = new Todo(t.title, t.description, t.dueDate, t.priority);
      todo.complete = t.complete;
      proj.addTodo(todo);
    });
    return proj;
  });
} else {
  projects.push(new Project('Default'));
}

function update() {
  renderProjects(projects, currentProjectIndex, switchProject);
  renderTodos(projects[currentProjectIndex], toggleTodo, deleteTodo);
  saveData(projects);
}

function switchProject(index) {
  currentProjectIndex = index;
  update();
}

function addProject(name) {
  if (!name.trim()) return;
  projects.push(new Project(name));
  update();
}

function addTodo(title, description, dueDate, priority) {
  if (!title.trim()) return;
  const todo = new Todo(title, description, dueDate, priority);
  projects[currentProjectIndex].addTodo(todo);
  update();
}

function deleteTodo(index) {
  projects[currentProjectIndex].removeTodo(index);
  update();
}

function toggleTodo(index) {
  projects[currentProjectIndex].todos[index].toggleComplete();
  update();
}

document.getElementById('add-project').addEventListener('click', () => {
  const name = document.getElementById('new-project-name').value;
  addProject(name);
  document.getElementById('new-project-name').value = '';
});

document.getElementById('add-todo').addEventListener('click', () => {
  const title = document.getElementById('todo-title').value;
  const desc = document.getElementById('todo-description').value;
  const due = document.getElementById('todo-due-date').value;
  const prio = document.getElementById('todo-priority').value;

  addTodo(title, desc, due, prio);

  document.getElementById('todo-title').value = '';
  document.getElementById('todo-description').value = '';
  document.getElementById('todo-due-date').value = '';
});

update();