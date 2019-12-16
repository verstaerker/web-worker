const amount = 6000000;

function mainThread() {
  const start = new Date().getTime();
  const parsed = [];

  console.info('start main thread');

  new Array(amount).join('0').split('').forEach(function(item, index) {
    parsed.push({ item: index })
  });

  console.log("main", new Date().getTime() - start, parsed.length);
}

// setTimeout(mainThread, 1000);








function workerThread() {
  const service = new Worker('worker.js');
  const workerStart = new Date().getTime();

  console.info('start worker thread');

  service.postMessage({ identifier: 'identifier', amount: amount });

  service.onmessage = function(event) {
    console.log("worker", new Date().getTime() - workerStart, event.data);
  }
}

// setTimeout(workerThread, 1000);
