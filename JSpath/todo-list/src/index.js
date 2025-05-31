import Project from "./Project";
import Todo from "./Todo";
import { renderProjects, renderTodos } from "./dom";
import { saveData, loadData } from "./storage";
import "./style.css";

let projects = [];
let currentProjectIndex = 0;

const data = loadData();
if (data) {
  projects = data.map((p) => {
    const proj = new Project(p.name);
    p.todos.forEach((t) => {
      const todo = new Todo(t.title, t.description, t.dueDate, t.priority);
      todo.complete = t.complete;
      proj.addTodo(todo);
    });
    return proj;
  });
} else {
  projects.push(new Project("Default"));
}

function update() {
  renderProjects(projects, currentProjectIndex, switchProject, deleteProject);
  if (projects[currentProjectIndex]) {
    renderTodos(projects[currentProjectIndex], toggleTodo, deleteTodo);
  } else {
    document.getElementById("todo-list").innerHTML = "";
  }
  saveData(projects);
}

function deleteProject(index) {
  projects.splice(index, 1);
  if (currentProjectIndex >= projects.length) {
    currentProjectIndex = projects.length - 1;
  }
  if (projects.length === 0) {
    projects.push(new Project("Default"));
    currentProjectIndex = 0;
  }
  update();
}

function switchProject(index) {
  currentProjectIndex = index;
  update();
  document.querySelector("aside").classList.add("sidebar-hidden");
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

const popup = document.getElementById("todo-popup");
const addTodoBtn = document.getElementById("add-todo-btn");

addTodoBtn.addEventListener("click", () => {
  popup.classList.toggle("hidden");
  // if pop up has hidden then this button is normal, if it has no hidden then rotate the button 45 degrees
  if (popup.classList.contains("hidden")) {
    addTodoBtn.style.transform = "rotate(0)";
  } else {
    addTodoBtn.style.transform = "rotate(45deg)";
  }
});

document.getElementById("add-project").addEventListener("click", () => {
  const name = document.getElementById("new-project-name").value;
  addProject(name);
  document.getElementById("new-project-name").value = "";
});

document.getElementById("add-todo").addEventListener("click", () => {
  const title = document.getElementById("todo-title").value;
  const desc = document.getElementById("todo-description").value;
  const due = document.getElementById("todo-due-date").value;
  const prio = document.getElementById("todo-priority").value;

  addTodo(title, desc, due, prio);

  document.getElementById("todo-title").value = "";
  document.getElementById("todo-description").value = "";
  document.getElementById("todo-due-date").value = "";

  popup.classList.add("hidden");
});

document.getElementById("sidebar-btn").addEventListener("click", () => {
  document.querySelector("aside").classList.toggle("sidebar-hidden");
  const sidebarBtn = document.getElementById("sidebar-btn");
  if (document.querySelector("aside").classList.contains("sidebar-hidden")) {
    sidebarBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 52 52">
        <path fill="currentColor" d="M10 14h32v4H10zm0 12h32v4H10zm0 12h32v4H10z" />
      </svg>
    `;
  } else {
    sidebarBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 52 52">
        <path fill="currentColor" d="M13 13l26 26m0-26L13 39" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
      </svg>
    `;
  }
});

update();
