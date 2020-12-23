import day from "dayjs";

class Age {
  getAge() {
    const birthday = day("25 June 2006").toDate();
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

export default Age;
