function formatDate(date: Date): string {
  const year: number = date.getFullYear();
  let month: number | string = date.getMonth() + 1;
  let day: number | string = date.getDate();

  // Add leading zero if month or day is a single digit
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  // Output will be in the format YYYY-MM-DD
  return `${year}-${month}-${day}`;
}
