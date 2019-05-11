let Queue = function(maxSize) {
  this.maxSize = maxSize;
  this.front = -1;
  this.rear = -1;
  this.queue = [];
};

Queue.prototype.enQueue = function(value) {
  console.log(`trying to add ${value} to queue`);
  if (
    (this.front === 0 && this.rear === this.maxSize - 1) ||
    this.rear === (this.front - 1) % (this.maxSize - 1)
  ) {
    console.log("Queue is full");
    return;
  } else if (this.front === -1) {
    this.front = 0;
    this.rear = 0;
    this.queue[this.rear] = value;
  } else if (this.rear === this.maxSize - 1 && this.front != 0) {
    this.rear = 0;
    this.queue[this.rear] = value;
  } else {
    this.rear++;
    this.queue[this.rear] = value;
  }
};

Queue.prototype.deQueue = function() {
  if (this.front === -1) {
    console.log("Queue is empty. What are you deleting?");
    return;
  }

  let data = this.queue[this.front];
  this.queue[this.front] = -1;
  if (this.front === this.rear) {
    this.front = -1;
    this.rear = -1;
  } else if (this.front === this.maxSize - 1) {
    this.front = 0;
  } else {
    this.front++;
  }

  return data;
};

Queue.prototype.displayQueue = function() {
  if (this.front === -1) {
    console.log("Queue is empty");
    return;
  }
  console.log("Elements in queue are:");

  if (this.rear >= this.front) {
    for (let i = this.front; i <= this.rear; i++) {
      console.log(this.queue[i]);
    }
  } else {
    for (let i = this.front; i < this.maxSize; i++) console.log(this.queue[i]);

    for (let i = 0; i <= this.rear; i++) console.log(this.queue[i]);
  }
};

var queue = new Queue(5);

queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.displayQueue();
console.log(`Dequeued: ${queue.deQueue()}`);
queue.enQueue(5);
queue.enQueue(6);
queue.displayQueue();
queue.enQueue(7);
console.log(`Dequeued: ${queue.deQueue()}`);
queue.enQueue(8);
queue.enQueue(9);
console.log(`Dequeued: ${queue.deQueue()}`);
console.log(`Dequeued: ${queue.deQueue()}`);
queue.displayQueue();
