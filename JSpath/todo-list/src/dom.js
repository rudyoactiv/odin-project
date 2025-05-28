export function renderProjects(projects, currentIndex, switchProject, deleteProject) {
  const list = document.getElementById('project-list');
  list.innerHTML = '';

  projects.forEach((project, i) => {
    const li = document.createElement('li');
    li.classList.add('project-tab');

    const nameSpan = document.createElement('span');
    nameSpan.textContent = project.name;
    nameSpan.style.cursor = 'pointer';
    if (i === currentIndex) li.style.backgroundColor = '#b4b4b4';
    li.addEventListener('click', () => switchProject(i));
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
  li.classList.add('todo', `priority-${todo.priority}`);
  if (todo.complete) li.classList.add('completed');

  li.innerHTML = `
      <span class="todo-title">
        ${todo.title}${todo.dueDate ? ` (${todo.dueDate})` : ''}
      </span>
      ${todo.description ? `<span class="todo-description">${todo.description}</span>` : ''}
    <div class="todo-actions">
      <button class="todo-done-btn" data-index="${i}">✓</button>
      <button class="todo-delete-btn" data-index="${i}">🗑</button>
    </div>
  `;

  // Add event listeners to buttons
  li.querySelector('.todo-done-btn').addEventListener('click', () => toggle(i));
  li.querySelector('.todo-delete-btn').addEventListener('click', () => remove(i));

  list.appendChild(li);
});
}
