function solution(a, b) {
  const WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const YEAR = 2016;
  const today = new Date(YEAR, a - 1, b);
  const answer = WEEK[today.getDay()];
  return answer;
}
