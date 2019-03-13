const initialState = {
  total: 0,
  actions: []
};

export type State = {
  total: number;
  actions: number[];
};

type Action = {
  type: string;
  number: number;
};

export default function(state: State = initialState, action: Action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        total: state.total + action.number,
        actions: [...state.actions, action.number]
      };
    case "UNDO":
      const newActions = [...state.actions];
      const last = newActions.pop() || 0;
      return {
        ...state,
        total: state.total - last,
        actions: newActions
      };
    default:
      return state;
  }
}
