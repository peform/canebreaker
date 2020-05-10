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



let ex = 0 
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

    if (message.channel.type == 'text' && message.content == 'tes228372382382838293912717763283218238t' && message.author.id == bot.user.id) {
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



    var admsg = "```md\n# [🥨] Facebook Mass Recruitment [🥨] ``` \n -  __**❖ Who are we?❖**__ ```cs\n # Facebook is a well organized team of highly educated individuals that have won multiple maps of skyblock. We are testing new waters on high paypal reward servers and are recruiting now! ``` \n - __**❖What we offer❖**__ ```fix\n #1 High Placements \n #2 Active Leadership \n #3 Experienced players \n #4 Classified and strategic plays that guarentee us wins every map we play``` \n - __**❖Requirements❖**__ ```xl\n 'Must be atleast 13 years old`\n `Must have basic knowledge of skyblock` \n `Must be able to work in a team` ```\n  - __**❖How to apply❖**__ ```diff\n- Join our discord: https://discord.gg/vbsUamx \n- Type %apply in general``` \n **❖Maps we have won❖** \n```diff\n! UniverseMC x6 \n! MCwars (2nd) x2 \n! VanityMC (3rd) x1 \n! Minesega (1st) x1``` \n https://cdn.discordapp.com/attachments/639388580141203466/708428852879163472/ezgif.com-video-to-gif.gif";


    var minesagamsg = "```md\n# [🥨] Facebook Mass Recruitment [🥨] ``` \n -  __**❖ Who are we?❖**__ ```cs\n # Facebook is a well organized team of highly educated individuals that have won multiple maps of skyblock. We are testing new waters on high paypal reward servers and are recruiting now! ``` \n - __**❖What we offer❖**__ ```fix\n #1 High Placements \n #2 Active Leadership \n #3 Experienced players \n #4 Classified and strategic plays that guarentee us wins every map we play``` \n - __**❖Requirements❖**__ ```xl\n 'Must be atleast 13 years old`\n `Must have basic knowledge of skyblock` \n `Must be able to work in a team` ```\n  - __**❖How to apply❖**__ ```diff\n- Join our discord: https://discord.gg/vbsUamx \n- Type %apply in general``` \n **❖Maps we have won❖** \n```diff\n! UniverseMC x6 \n! MCwars (2nd) x2 \n! VanityMC (3rd) x1 \n! Minesega (1st) x1```";


    var vanitymsg = "-recruit skyblock | Facebook | - Experienced leaders - Over $1100 Paypal won - Been an island since 2018  | - Must be over 13 - Must have schematica - Must have basic skyblock knowledge | https://discord.gg/x7uJaG2";

    // servers to write in 
    var universemc = bot.guilds.find(g => g.id === '443457556824719360').channels.find(c => c.id === '625853815060430879') // test
    var pvplab = bot.guilds.find(g => g.id === '514574611069927458').channels.find(c => c.id === '648768296786591746') // test
    var vanitymc = bot.guilds.find(g => g.id === '290249616484597771').channels.find(c => c.id === '410526913879080960') // test
    var junglemc = bot.guilds.find(g => g.id === '587715966574788608').channels.find(c => c.id === '703824223357108314') // test
    var immunitymc = bot.guilds.find(g => g.id === '703395751488782377').channels.find(c => c.id === '703718719687491625') // test

    console.log("im here");
    // 

    //const randomnum1 = Math.floor(Math.random()*(999-100+1)+100);
    //const randomnum2 = Math.floor(Math.random()*(999-100+1)+100);
    //const total = randomnum1 + randomnum2
    //bot.on('message', message => {
        
        //if (message.author.id === ("622469622372892726")) return;
        //if(message.channel.id === ("708313058451390609")){
            //message.channel.send(`Hello ${message.author.username} I bet you don't know what ${randomnum1} + ${randomnum2} is`);
            //if (message.content === (total))
          //      message.send("Well done!")
        //    // two `s allows you to add an object in a string. To add the object, put it inside this -> ${}
      //  }
    //});

    setTimeout(() => {
        function toBeRepeated() {
            let inter = Math.floor(Math.random() * 1300000);
            if (inter < 500000) { inter += 500000; }

            immunitymc.send(admsg);
            var inter1 = (inter / 60000).toFixed(2);


            setTimeout(toBeRepeated, inter);
            console.log(chalk.green('A new message has been sent in ' + chalk.yellow("immunitymc - (", immunitymc.name, ")")));
            
            


            if (inter > 60000) {
                let minutes = ((Math.floor(inter / 60000)) + (inter % 60000 / 100000)).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + chalk.yellow(minutes) + (" minutes")));
                console.log(chalk.white('========================================================================================='));
            } else {
                let seconds = (inter / 1000).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + seconds + chalk.blue(" seconds")));
                console.log(chalk.white('========================================================================================='));
            }

        }
        toBeRepeated();
    }, Math.floor(Math.random() * 4000) + 2000);




    setTimeout(() => {
        function toBeRepeated() {
            let inter = Math.floor(Math.random() * 2000000);
            if (inter < 5000000) { inter += 5000000; }

            junglemc.send(admsg);
            var inter1 = (inter / 60000).toFixed(2);


            setTimeout(toBeRepeated, inter);
            console.log(chalk.green('A new message has been sent in ' + chalk.yellow("junglemc - (", junglemc.name, ")")));
            
            


            if (inter > 60000) {
                let minutes = ((Math.floor(inter / 60000)) + (inter % 60000 / 100000)).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + chalk.yellow(minutes) + (" minutes")));
                console.log(chalk.white('========================================================================================='));
            } else {
                let seconds = (inter / 1000).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + seconds + chalk.blue(" seconds")));
                console.log(chalk.white('========================================================================================='));
            }

        }
        toBeRepeated();
    }, Math.floor(Math.random() * 4000) + 2000);




    setTimeout(() => {
        function toBeRepeated() {
            let inter = Math.floor(Math.random() * 1300000);
            if (inter < 500000) { inter += 500000; }

            vanitymc.send(vanitymsg);
            var inter1 = (inter / 60000).toFixed(2);


            setTimeout(toBeRepeated, inter);
            console.log(chalk.green('A new message has been sent in ' + chalk.yellow("PvPlab - (", vanitymc.name, ")")));
            
            


            if (inter > 60000) {
                let minutes = ((Math.floor(inter / 60000)) + (inter % 60000 / 100000)).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + chalk.yellow(minutes) + (" minutes")));
                console.log(chalk.white('========================================================================================='));
            } else {
                let seconds = (inter / 1000).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + seconds + chalk.blue(" seconds")));
                console.log(chalk.white('========================================================================================='));
            }

        }
        toBeRepeated();
    }, Math.floor(Math.random() * 4000) + 2000);

        
    //pvp lab

    setTimeout(() => {
        function toBeRepeated() {
            let inter = Math.floor(Math.random() * 1300000);
            if (inter < 500000) { inter += 500000; }

            pvplab.send(admsg);
            var inter1 = (inter / 60000).toFixed(2);


            setTimeout(toBeRepeated, inter);
            console.log(chalk.green('A new message has been sent in ' + chalk.yellow("PvPlab - (", pvplab.name, ")")));
            
            


            if (inter > 60000) {
                let minutes = ((Math.floor(inter / 60000)) + (inter % 60000 / 100000)).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + chalk.yellow(minutes) + (" minutes")));
                console.log(chalk.white('========================================================================================='));
            } else {
                let seconds = (inter / 1000).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + seconds + chalk.blue(" seconds")));
                console.log(chalk.white('========================================================================================='));
            }

        }
        toBeRepeated();
    }, Math.floor(Math.random() * 4000) + 2000);

    // test server
    console.log("im here");
    // 
    setTimeout(() => {
        function toBeRepeated() {
            let inter = Math.floor(Math.random() * 1300000);
            if (inter < 500000) { inter += 500000; }

            universemc.send(admsg);
            var inter1 = (inter / 60000).toFixed(2);


            setTimeout(toBeRepeated, inter);
            console.log(chalk.green('A new message has been sent in ' + chalk.yellow("universemc - (", universemc.name, ")")));
            
            
            

            if (inter > 60000) {
                let minutes = ((Math.floor(inter / 60000)) + (inter % 60000 / 100000)).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + chalk.yellow(minutes) + (" minutes")));
                console.log(chalk.white('========================================================================================='));
            } else {
                let seconds = (inter / 1000).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + seconds + chalk.blue(" seconds")));
                console.log(chalk.white('========================================================================================='));
            }

        }
        toBeRepeated();
    }, Math.floor(Math.random() * 4000) + 2000);


});


//token logs bot in
bot.login(process.env.BOT_TOKEN);
