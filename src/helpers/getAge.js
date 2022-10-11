const getAge = (birthDate) => {
  let birth;
  if (typeof birthDate !== "string") {
    const birthdate = birthDate.getDate();
    const birthmonth = birthDate.getMonth() + 1;
    const birthyear = birthDate.getFullYear();
    birth = [birthyear, birthmonth, birthdate];
  } else {
    birth = birthDate.split("-");
  }
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  let age = year - birth[0];
  if (month < birth[1]) {
    age -= 1;
  } else if (month == birth[1]) {
    if (date < birth[2]) {
      age -= 1;
    }
  }

  return age;
};

module.exports = getAge;
