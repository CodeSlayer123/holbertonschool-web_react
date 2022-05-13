interface MajorCredits{
  credits: number;
  brand: string;
}
interface MinorCredits{
  credits: number;
  brand: string;
}
function sumMajorCredits(subject1:number, subject2:number){
  return {credits: subject1 + subject2, brand: "MajorCredits"}
}
function sumMinorCredits(subject1:number, subject2:number){
  return {credits: subject1 + subject2, brand: "MinorCredits"}
}