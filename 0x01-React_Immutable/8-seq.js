import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const grades = Seq(object)
  .filter(x => x.score >= 70)
  .map(x => {
    x.firstName = x.firstName.charAt(0).toUpperCase() + word.slice(1);
    x.lastName = x.lastName.charAt(0).toUpperCase() + word.slice(1);
});
  console.log(grades.toJS());
}
