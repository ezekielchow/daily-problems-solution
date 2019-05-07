let data = [];

// true
data.push([
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
]);

// true
data.push([
  {
    top_left: [0, 1],
    dimensions: [1, 1]
  },
  {
    top_left: [1, 1],
    dimensions: [1, 1]
  }
]);

// true
data.push([
  {
    top_left: [0, 1],
    dimensions: [1, 1]
  },
  {
    top_left: [0, 1],
    dimensions: [1, 1]
  }
]);

// false
data.push([
  {
    top_left: [-5, 10],
    dimensions: [1, 1]
  },
  {
    top_left: [-3, 9],
    dimensions: [1, 1]
  }
]);

// false
data.push([
  {
    top_left: [-2, 5],
    dimensions: [1, 1]
  },
  {
    top_left: [-4, 3],
    dimensions: [1, 1]
  }
]);

// false
data.push([
  {
    top_left: [3, 3],
    dimensions: [1, 1]
  },
  {
    top_left: [5, 1],
    dimensions: [1, 1]
  }
]);

// false
data.push([
  {
    top_left: [1, 1],
    dimensions: [1, 1]
  },
  {
    top_left: [4, 4],
    dimensions: [1, 1]
  }
]);

console.time("benchmark");

data.forEach(aSet => {
  aSet.forEach(rect => {
    console.log(rect);
    rect.bottom_right = [
      rect.top_left[0] + rect.dimensions[0],
      rect.top_left[1] - rect.dimensions[1]
    ];
  });
});

let rectOverlaps = true;

data.forEach(aSet => {
  for (let i = 0; i < aSet.length; i++) {
    for (let x = 0; x < aSet.length; x++) {
      if (x === i) {
        continue;
      }

      const rect_0 = aSet[i];
      const rect_1 = aSet[x];

      if (
        // both rectangles are beside each other
        rect_1.top_left[0] > rect_0.bottom_right[0] ||
        rect_0.top_left[0] > rect_1.bottom_right[0] ||
        // both rectangles are above each other
        rect_0.bottom_right[1] > rect_1.top_left[1] ||
        rect_1.bottom_right[1] > rect_0.top_left[1]
      ) {
        rectOverlaps = false;
        break;
      }
    }
    if (!rectOverlaps) {
      break;
    }
  }

  console.log(`rectangle overlaps: ${rectOverlaps}`);
});

console.timeEnd("benchmark");
