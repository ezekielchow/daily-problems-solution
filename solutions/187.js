let data = [
  {
    top_left: [1, 4],
    dimensions: [3, 3]
  },
  {
    top_left: [-1, 3],
    dimensions: [2, 1]
  },
  {
    top_left: [0, 5],
    dimensions: [4, 3]
  }
];

console.time("benchmark");

data.forEach(rect => {
  rect.bottom_right = [
    rect.top_left[0] - rect.dimensions[0],
    rect.top_left[1] - rect.dimensions[1]
  ];
});

let rectOverlaps = false;

for (let rect_0 of data) {
  for (let rect_1 of data) {
    if (
      (rect_0.top_left[0] <= rect_1.top_left[0] &&
        rect_0.top_left[1] >= rect_1.top_left[1] &&
        rect_0.bottom_right[0] >= rect_1.bottom_right[0] &&
        rect_0.bottom_right[1] <= rect_1.bottom_right[1]) ||
      (rect_1.top_left[0] <= rect_0.top_left[0] &&
        rect_1.top_left[1] >= rect_0.top_left[1] &&
        rect_1.bottom_right[0] >= rect_0.bottom_right[0] &&
        rect_1.bottom_right[1] <= rect_0.bottom_right[1])
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
