export function renderProjects(projects, currentIndex, switchProject, deleteProject) {
  const list = document.getElementById('project-list');
  list.innerHTML = '';

  projects.forEach((project, i) => {
    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    li.style.justifyContent = 'space-between';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = project.name;
    nameSpan.style.cursor = 'pointer';
    if (i === currentIndex) nameSpan.style.fontWeight = 'bold';
    nameSpan.addEventListener('click', () => switchProject(i));
    li.appendChild(nameSpan);

    const delBtn = document.createElement('button');
    delBtn.textContent = '🗑';
    delBtn.style.marginLeft = '8px';
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent triggering switchProject
      deleteProject(i);
    });
    li.appendChild(delBtn);

    list.appendChild(li);
  });

  if (projects[currentIndex]) {
    document.getElementById('current-project-name').textContent = projects[currentIndex].name;
  } else {
    document.getElementById('current-project-name').textContent = '';
  }
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
