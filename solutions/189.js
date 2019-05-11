let data = [5, 1, 3, 5, 2, 3, 4, 1];

function findLength(data) {
  let maxLength = 1;
  let dataSize = data.length;

  for (let i = 0; i < dataSize - 1; i++) {
    let min = data[i],
      max = data[i];

    for (let j = i + 1; j < dataSize; j++) {
      min = Math.min(min, data[j]);
      max = Math.max(max, data[j]);

      if (max - min == j - i) {
        maxLength = Math.max(maxLength, max - min + 1);
      }
    }
  }

  return maxLength;
}

console.time("benchmark");

console.log(findLength(data, data.length));

console.timeEnd("benchmark");
