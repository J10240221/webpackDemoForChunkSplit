console.log('index loaded');

setTimeout(() => {
  const aa = import('./aa.js');
  const bb = import('./bb.js');

  aa.then((res) => {
    console.log('res', res);
    console.log('res de', res.default);
  });
  bb.then((res) => {
    console.log('res', res);
    console.log('res de', res.default);
  });
}, 2000);
