const createFetch = () => ({
  type: 'TASK_FETCH' as const
})

const createSuccess = (task: Task) => ({
  type: 'TASK_SUCCESS' as const,
  payload: task
})

const createError = (error: Error) => ({
  type: 'TASK_ERROR' as const,
  payload: error
})

type PossibleActions =
  | ReturnType<typeof createFetch>
  | ReturnType<typeof createSuccess>
  | ReturnType<typeof createError>

const taskReducer = (state = {}, action: PossibleActions) => {
  switch (action.type) {
    case 'TASK_FETCH':
      return { isFetching: true }
    case 'TASK_SUCCESS':
      return { isFetching: false, task: action.payload }
    case 'TASK_ERROR':
      return { isFetching: false, error: action.payload }
  }

  const _exhaustiveCheck: never = action

  return state
}

const a = taskReducer({}, createFetch())

export {}
