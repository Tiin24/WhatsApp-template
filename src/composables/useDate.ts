export const generateRandomDate = (
  start = new Date(2023, 0, 1),
  end = new Date()
) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};