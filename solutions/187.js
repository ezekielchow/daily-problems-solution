// true
// let data = [
//   {
//     top_left: [1, 4],
//     dimensions: [3, 3]
//   },
//   {
//     top_left: [-1, 3],
//     dimensions: [2, 1]
//   },
//   {
//     top_left: [0, 5],
//     dimensions: [4, 3]
//   }
// ];

// false
// let data = [
//   {
//     top_left: [0, 1],
//     dimensions: [1, 1]
//   },
//   {
//     top_left: [1, 1],
//     dimensions: [1, 1]
//   }
// ];

// true
let data = [
  {
    top_left: [0, 1],
    dimensions: [1, 1]
  },
  {
    top_left: [0, 1],
    dimensions: [1, 1]
  }
];

console.time("benchmark");

data.forEach(rect => {
  rect.bottom_right = [
    rect.top_left[0] + rect.dimensions[0],
    rect.top_left[1] - rect.dimensions[1]
  ];
});

console.log(data);

let rectOverlaps = false;

for (let i = 0; i < data.length; i++) {
  for (let x = 0; x < data.length; x++) {
    if (x === i) {
      continue;
    }

    const rect_0 = data[i];
    const rect_1 = data[x];

    if (
      (rect_1.top_left[0] > rect_0.top_left[0] &&
        rect_1.top_left[1] > rect_0.top_left[1] &&
        rect_1.top_left[0] < rect_0.bottom_right[0] &&
        rect_1.top_left[1] > rect_0.bottom_right[1]) ||
      (rect_1.bottom_right[0] < rect_0.bottom_right[0] &&
        rect_1.bottom_right[1] > rect_0.bottom_right[1] &&
        rect_1.bottom_right[0] > rect_0.top_left[0] &&
        rect_1.bottom_right[1] < rect_0.top_left[1]) ||
      (rect_1.top_left[0] === rect_0.top_left[0] &&
        rect_1.top_left[1] === rect_0.top_left[1] &&
        rect_1.bottom_right[0] === rect_0.bottom_right[0] &&
        rect_1.bottom_right[1] === rect_0.bottom_right[1])
    ) {
      rectOverlaps = true;
      break;
    }
  }
  if (rectOverlaps) {
    break;
  }
}

console.log(`rectangle overlaps: ${rectOverlaps}`);

console.timeEnd("benchmark");
