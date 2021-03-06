function solution(array, commands) {
  const answer = commands.map(
    (v) =>
      [...array].splice(v[0] - 1, v[1] - v[0] + 1).sort((v1, v2) => v1 - v2)[
        v[2] - 1
      ]
  );
  return answer;
}
