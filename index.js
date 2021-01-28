import readline from 'readline';
import colors from 'colors';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: colors.yellow('Enter command: '),
});

const helpGuide = () => {
  const usageText = `   
      Here is the command list you can choose from:
  
      help:     print the help guide
      task1:    run task 1
      task2:    run task 2
      task3:    run task 3
      exit:     exit process
    `;

  console.log(colors.cyan(usageText));
};

const task1 = (answear) => {
  if (answear > 7) {
    console.log(colors.green('Привет'));
  }
};

const task2 = (answear) => {
  if (answear === 'Вячеслав') {
    console.log(colors.green(`Привет, ${answear}`));
  } else {
    console.log(colors.red('Нет такого имени'));
  }
};

const task3 = (numbers) => {
  numbers.forEach((n) => {
    if (n % 3 === 0) {
      console.log(colors.green(n));
    }
  });
};

const main = () => {
  helpGuide();
  rl.prompt();
  rl.on('line', (line) => {
    switch (line.trim()) {
      case 'help':
        helpGuide();
        break;
      case 'task1':
        rl.question(colors.magenta('Enter a number: '), (answear) => {
          task1(answear);
          rl.prompt();
        });
        break;
      case 'task2':
        rl.question(colors.magenta('Enter a name: '), (answear) => {
          task2(answear);
          rl.prompt();
        });
        break;
      case 'task3':
        task3([1, 2, 5, 7, 3, 24, 8, 9, 5, 6]);
        rl.prompt();
        break;
      case 'exit':
        process.exit();
      default:
        console.log(colors.red('Invalid command passed!'));
        helpGuide();
        break;
    }
    rl.prompt();
  });
};

main();
