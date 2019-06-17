

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TASK_FETCH':
      return { isFetching: true }
    case 'TASK_SUCCESS':
      return { isFetching: false, task: action.payload }
    case 'TASK_FETCH':
      return { isFetching: false, error: action.payload }
  }
}

export {}
