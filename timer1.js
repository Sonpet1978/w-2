const inter = [ 3, 6 , 7];
let i = 0;

const f = () => setTimeout(() => {
    process.stdout.write('\x07');
  if (i < inter.length) {
    f();
  }
}, 1000);

f();