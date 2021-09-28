console.log('index loaded');

setTimeout(() => {
  const aa = import('./aa.js');

  aa.then((res) => {
    console.log('res', res);
    console.log('res de', res.default);
  });
}, 3000);
