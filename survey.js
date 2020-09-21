const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

rl.question('Whats your name? Nicknames are also acceptable :)', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
  
    rl.close();
  });

  rl.question('Whats an activity you like doing?', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
  
    rl.close();
  });

  rl.question('What do you listen to while doing that?  ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
  
    rl.close();
  });
  

