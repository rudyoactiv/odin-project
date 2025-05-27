export function saveData(projects) {
  localStorage.setItem('todo-data', JSON.stringify(projects));
}

export function loadData() {
  const data = localStorage.getItem('todo-data');
  return data ? JSON.parse(data) : null;
}
