export const handleCounter = (setCount, count, mode) => {
  {
    mode === "plus" && setCount(count + 1);
  }
  {
    mode === "minus" && setCount(count - 1);
  }
};

export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return formatDate(result);
};

export const formatDate = (date) => {
  const day =
    date.getDate() < 10 ? "0" + String(date.getDate()) : String(date.getDate());
  const month =
    date.getMonth() + 1 < 10
      ? "0" + String(date.getMonth() + 1)
      : String(date.getMonth() + 1);
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
