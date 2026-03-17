
// format for date: MM/DD/YYYY
// to set a day in the future or past, call function like this: dateOnly(7) for 7 days in the future, or dateOnly(-7) for 7 days in the past
function dateOnly(daysOffset: number =0): string {
  const today = new Date();
  today.setDate(today.getDate() + daysOffset);
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  const year = today.getFullYear().toString();

  return `${month}/${day}/${year}`;
};

export { dateOnly };
