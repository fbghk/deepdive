var a, b, c;

// 연쇄 할당, 오른쪽에서 왼쪽으로 진행,
// 1. c = 0 : 0으로 평가된다.
// 2. b = 0 : 0으로 평가된다.
// 3. a = 0 : 0으로 평가된다.
a = b = c = 0;

console.log(a, b, c); // 0 0 0