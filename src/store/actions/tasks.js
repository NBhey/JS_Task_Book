export const loadTasks = () => async (dispatch) => {
  try {
    const response = await fetch('/data/tasks.json');
    const data = await response.json();
    dispatch({ type: 'SET_TASKS', payload: data.tasksArray });
  } catch (error) {
    console.error("Ошибка загрузки:", error);
  }
};