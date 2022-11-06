exports.diffMonth = (date) => {
  console.log(date);
  const today = new Date();
  const thisMonth = Number(today.getMonth());
  const thisYear = Number(today.getFullYear());
  const thisDay = Number(today.getDate());

  const theDate = new Date(date);
  const theMonth = Number(theDate.getMonth());
  const theYear = Number(theDate.getFullYear());
  const theDay = Number(theDate.getDate());

  const diffYear = thisYear - theYear;
  const diffMonth = thisMonth - theMonth;
  const diffDay = thisDay - theDay;
  let result = diffYear * 12 + diffMonth;
  if (result === 3) {
    if (diffDay < 0) {
      result -= 1;
    }
  }
  return result;
};
