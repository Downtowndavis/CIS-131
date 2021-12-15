//Name:John Davis, Program:Chalk It Up, Date: 12/14/2021

import chalk from 'chalk';
import figlet from 'figlet';

//allows you to shorthand log instead of typing console.log each time
const log = console.log
//found this online to add the ascii art at the end.
figlet('See you next time', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});


//here is my short story
log(chalk.red.bgWhite.bold('Our story begins...'));
log(chalk.green('Once upon a time, there was a guy named John. This guy did not do enough homework during his CIS 131 class!'));
log(chalk.red('This caused John to have a lot of headaches and stress.'));
log(chalk.white('At the end of the semester John was sitting at a failing grade of a D!'));
log(chalk.white.bgRed.bold('"What do I do?" asked John. '));
log(chalk.red.bgWhite.italic('"Work harder and study!" came a voice, seemingly from nowhere...'));
log(chalk.blue.bgWhite('John felt like such a fool! The answer was in front of him this entire time. Next time, he hoped to not make the same mistake. '));


