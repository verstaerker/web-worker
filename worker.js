onmessage = function(event) {
  const parsed = [];

  new Array(event.data.amount).join('0').split('').forEach(function(item, index) {
    parsed.push({ item: index })
  });

  postMessage(parsed.length);
};
