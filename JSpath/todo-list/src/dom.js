export function renderProjects(projects, currentIndex, switchProject) {
  const list = document.getElementById('project-list');
  list.innerHTML = '';

  projects.forEach((project, i) => {
    const li = document.createElement('li');
    li.textContent = project.name;
    if (i === currentIndex) li.style.fontWeight = 'bold';
    li.addEventListener('click', () => switchProject(i));
    list.appendChild(li);
  });

  document.getElementById('current-project-name').textContent = projects[currentIndex].name;
}

export function renderTodos(project, toggle, remove) {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  project.getTodos().forEach((todo, i) => {
    const li = document.createElement('li');
    li.classList.add('todo');
    if (todo.complete) li.classList.add('completed');

    const title = document.createElement('span');
    title.textContent = `${todo.title} (${todo.dueDate})`;
    title.classList.add(`priority-${todo.priority}`);
    li.appendChild(title);

    const doneBtn = document.createElement('button');
    doneBtn.textContent = '✓';
    doneBtn.addEventListener('click', () => toggle(i));
    li.appendChild(doneBtn);

    const delBtn = document.createElement('button');
    delBtn.textContent = '🗑';
    delBtn.addEventListener('click', () => remove(i));
    li.appendChild(delBtn);

    list.appendChild(li);
  });
}
