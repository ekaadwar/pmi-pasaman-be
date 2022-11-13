exports.diffMonth = (date) => {
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

exports.donorSchedule = () => {
  const td = new Date();
  const d = td.getDate();
  const m = td.getMonth() + 1;
  const y = td.getFullYear();

  let m2 = m + 3;
  let y2 = y;

  if (m2 > 12) {
    m2 -= 12;
    y2 += 1;
  }

  if (m2 < 10) {
    m2 = `0${m2}`;
  }

  const r = `${y2}-${m2}-${d}`;

  return r;
};
