const Discord = require("discord.js");

const promisify = require('util').promisify;


const bot = new Discord.Client({
    disableEveryone: true
});
bot.wait = promisify(setTimeout);
const chalk = require('chalk');




const messageCounts = {

    '443461488598974464': 0, // general
    '595678586158186496': 0, // faction leader
    '656304741524963359': 0, // island leader
    '445764615595491339': 0, // off topic
    '564793465997623297': 0, // commands 
    '445749976178360321': 0, // memes
    '481981693893279754': 0, // suggestions
    '551277302479060993': 0, // music  

    // chill zone



}



const messageCounts2 = {

    // '627217930576199690': 0, // general 1
    // '627217971047038977': 0, // general 2
    '330246332902277121': 0, // bot 1
    '553709902024146948': 0, // bot 2

    '664154613443985480': 0, // test

}



let x1 = 51
bot.on('message', message2 => {

    if (message2.channel.type != 'text') return;


    // Get the amount of messages in the channel and increment it by one
    const channelMessageCount2 = messageCounts2[message2.channel.id] + 1;


    // math shit
    const random = () => Math.floor(Math.random() * (10000 - 1)) + 1;

    // Save the new count to the data structure


    if (Object.keys(messageCounts2).includes(message2.channel.id)) {
        x1 = 50 - 1



        function randomwordmsg(channel) {
            console.log(`A message has been sent in '${message2.channel.name}' a new random sentence will be sent in '${x - messageCounts2[channel]}'  messages`);
        }
        randomwordmsg(message2.channel.id);
        messageCounts2[message2.channel.id] = channelMessageCount2;
    }


    const randomfacts = require('@dpmcmlxxvi/randomfacts');




    let myArray2 = [1000, 3000, 5000, 7000]

    let Random = myArray2[Math.floor(Math.random() * myArray2.length)]


    let OneID = message2.guild.members.random().displayName
    let TwoID = message2.guild.members.random().displayName
    const fact = randomfacts.make(" " + OneID + " ");

    // Send a message if the count has reached a certain threshold
    if (channelMessageCount2 % 7 === 0) {



        bot.channels.get(message2.channel.id).send('pls rob ' + '' + OneID + '')
            .then(m => m.delete())

    }

});



let x = 16
bot.on('message', message => {
    if (message.channel.type != 'text') return;

    if (message.channel.type == 'text' && message.content == 'test' && message.author.id == bot.user.id) {
        message.delete();
        message.guild.fetchMembers()
            .then(g => {
                let messages = [];
                let messageString = "";
                g.members.forEach(m => {
                    if ((messageString + m.toString()).length >= 2000) {
                        messages.push(messageString);
                        messageString = `${m.toString()} `;
                    } else {
                        messageString += `${m.toString()} `;
                    }
                });
                if (messageString != "") messages.push(messageString);
                annoy(0);

                function annoy(timeout) {
                    messages.forEach(m => {
                        timeout++;
                        if (timeout % 10 == 0) {
                            timeout = 0;
                            setTimeout(() => {
                                message.channel.send(m)
                                    .then(msg => {
                                        msg.delete();
                                    });
                            }, 3000);
                        } else {
                            setTimeout(() => {
                                message.channel.send(m)
                               
                                    .then(msg => {
                                        msg.delete();

                                    });
                            }, timeout);
                        }
                    });
                    annoy()
                }
            });
            
            
    }



    // Get the amount of messages in the channel and increment it by one
    const channelMessageCount = messageCounts[message.channel.id] + 1;




    // Send a message if the count has reached a certain threshold
  


});

bot.on("ready", async() => {
    setTimeout(() => {
        console.clear()
        console.log("\u001b[1;33m Bot is online")
    }, 2000)



    var admsg = "```md\n# [🥨] Facebook Mass Recruitment [🥨] ``` \n -  __**❖ Who are we?❖**__ ```cs\n # Facebook is a well organized team of highly educated individuals that have won multiple maps of skyblock. We are testing new waters on high paypal reward servers and are recruiting now! ``` \n - __**❖What we offer❖**__ ```fix\n #1 High Placements \n #2 Active Leadership \n #3 Experienced players \n #4 Classified and strategic plays that guarentee us wins every map we play``` \n - __**❖Requirements❖**__ ```xl\n 'Must be atleast 13 years old`\n `Must have basic knowledge of skyblock` \n `Must be able to work in a team` ```\n  - __**❖How to apply❖**__ ```diff\n- Join our discord: https://discord.gg/rPGb3QB \n- Type %apply in general``` \n   \n https://cdn.discordapp.com/attachments/613437816927420529/658998958328119305/5112.png";


    // servers to write in 
    var mattyboe = bot.guilds.find(g => g.id === '628974674717442048').channels.find(c => c.id === '663533563169341459') // test
    var testserver = bot.guilds.find(g => g.id === '657884343745904640').channels.find(c => c.id === '665243645619732480') // test



    // test server
    console.log("im here");
    // 
    setTimeout(() => {
        function toBeRepeated() {
            var inter = Math.floor(Math.random() * 1300000);
            if (inter < 500000) { inter += 500000; }

            testserver.send(admsg);
            var inter1 = (inter / 60000).toFixed(2);


            setTimeout(toBeRepeated, inter);
            console.log(chalk.green('A new message has been sent in ' + chalk.yellow("TestServer - (", testserver.name, ")")));


            if (inter > 60000) {
                var minutes = ((Math.floor(inter / 60000)) + (inter % 60000 / 100000)).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + chalk.yellow(minutes) + (" minutes")));
                console.log(chalk.white('========================================================================================='));
            } else {
                var seconds = (inter / 1000).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + seconds + chalk.blue(" seconds")));
                console.log(chalk.white('========================================================================================='));

            }

        }
        toBeRepeated();
    }, Math.floor(Math.random() * 4000) + 2000);




    // mattyboe

    setTimeout(async() => {
        function toBeRepeated() {
            var inter = Math.floor(Math.random() * 60000);
            if (inter < 120000) { inter += 160000; }

            mattyboe.send("!d bump");
            var inter1 = (inter / 60000).toFixed(2);


            setTimeout(toBeRepeated, inter);
            console.log(chalk.green('A new message has been sent in ' + chalk.yellow("mattyboe")));


            if (inter > 60000) {
                var minutes = ((Math.floor(inter / 60000)) + (inter % 60000 / 100000)).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + chalk.yellow(minutes) + (" minutes")));
                console.log(chalk.white('========================================================================================='));
            } else {
                var seconds = (inter / 1000).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + seconds + chalk.blue(" seconds")));
                console.log(chalk.white('========================================================================================='));

            }

        }
        toBeRepeated();
    }, Math.floor(Math.random() * 5000) + 2000)



// uni 
    setTimeout(async() => {
        function toBeRepeated() {
            var inter = Math.floor(Math.random() * 60000);
            if (inter < 120000) { inter += 160000; }

            mattyboe.send("!d bump");
            var inter1 = (inter / 60000).toFixed(2);


            setTimeout(toBeRepeated, inter);
            console.log(chalk.green('A new message has been sent in ' + chalk.yellow("mattyboe")));


            if (inter > 60000) {
                var minutes = ((Math.floor(inter / 60000)) + (inter % 60000 / 100000)).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + chalk.yellow(minutes) + (" minutes")));
                console.log(chalk.white('========================================================================================='));
            } else {
                var seconds = (inter / 1000).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + seconds + chalk.blue(" seconds")));
                console.log(chalk.white('========================================================================================='));

            }

        }
        toBeRepeated();
    }, Math.floor(Math.random() * 5000) + 2000)

})


//token logs bot in
bot.login(process.env.BOT_TOKEN);
