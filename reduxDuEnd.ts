type FetchAction = {
  type: 'TASK_FETCH'
}

type SuccessAction = {
  type: 'TASK_SUCCESS'
  payload: Task
}

type ErrorAction = {
  type: 'TASK_ERROR'
  payload: Error
}

type PossibleActions = FetchAction | SuccessAction | ErrorAction

type State = { isFetching: boolean; task?: Task; error?: Error }

const taskReducer = (state = {} as State, action: PossibleActions): State => {
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

export {}
