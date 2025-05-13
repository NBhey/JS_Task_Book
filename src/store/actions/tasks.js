export const fetchTasks = () => async (dispatch) => {
  dispatch({ type: 'TASKS_REQUEST_START' });
  
  try {
    // Добавляем timestamp к URL чтобы избежать кеширования
    const response = await fetch(`/data/tasks.json?t=${Date.now()}`);
    if (!response.ok) throw new Error('Ошибка загрузки');
    
    const data = await response.json();
    if (!data.tasksArray) throw new Error('Некорректные данные');
    
    dispatch({
      type: 'TASKS_REQUEST_SUCCESS',
      payload: data.tasksArray
    });
  } catch (err) {
    dispatch({
      type: 'TASKS_REQUEST_ERROR',
      payload: err.message
    });
  }
};