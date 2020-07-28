let a = [];
let b = [];
let c = [];
function solution(array, commands) {
  let result = [];
  for (let i = 0; i < commands.length; i++) {
    a.push([commands[i][0]]);
    b.push([commands[i][1]]);
    c.push([commands[i][2]]);
  }
  for (let i = 0; i < commands.length; i++) {
    let sortedArray = array.slice(a[i] - 1, b[i]).sort((a, b) => a - b);
    result.push(sortedArray[c[i] - 1]);
  }
  console.log(result);
  return result;
}
solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
