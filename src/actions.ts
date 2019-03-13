export const addNumber = (number: number) => ({
  type: "ADD",
  number
});

export const undo = () => ({
  type: "UNDO"
});
