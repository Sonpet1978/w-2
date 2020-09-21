const inter = [ 3, 6 , 7];
let i = 0;

const f = () => setTimeout(() => {
    //process.stdout.write('\x07');
    console.log(inter[i++]);
    
    console.log('\u0007');
  if (i < inter.length) {
    f();
  }
}, 1000);

f();