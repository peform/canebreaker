    const Discord = require("discord.js");

    const promisify = require('util').promisify;


    const bot = new Discord.Client({
        disableEveryone: true
    });
    bot.wait = promisify(setTimeout);
    const chalk = require('chalk');

    const min = 30000; // Minimum Value
    const max = 180000; // Maximum Value





    const guildsAndChannels = [
        ["443457556824719360", "625853815060430879"], //Universemc
        ["707049826470199427", "707050453728493661"], //Mynetale
        ["703395751488782377", "703718719687491625"], //Immunity
        ["587715966574788608", "703824223357108314"], //JungleMC
        ["514574611069927458", "648768296786591746"], //pvplab
        ["685749547120459837", "699352212421214229"], //tornadoMC
        ["692809364314128394", "692818404620501053"], //ChaosCraft
    ];
        var admsg = "```md\n# [🥨] Facebook Mass Recruitment [🥨] ``` \n -  __**❖ Who are we?❖**__ ```cs\n # Facebook is a well organized team of highly educated individuals that have won multiple maps of skyblock. We are testing new waters on high paypal reward servers and are recruiting now! ``` \n - __**❖What we offer❖**__ ```fix\n #1 High Placements \n #2 Active Leadership \n #3 Experienced players \n #4 Classified and strategic plays that guarentee us wins every map we play``` \n - __**❖Requirements❖**__ ```xl\n 'Must be atleast 13 years old`\n `Must have basic knowledge of skyblock` \n `Must be able to work in a team` ```\n  - __**❖How to apply❖**__ ```diff\n- Join our discord: https://discord.gg/vbsUamx \n- Type %apply in general``` \n **❖Maps we have won❖** \n```diff\n! UniverseMC x6 \n! MCwars (2nd) x2 \n! VanityMC (3rd) x1 \n! Minesega (1st) x1``` \n https://cdn.discordapp.com/attachments/639388580141203466/708428852879163472/ezgif.com-video-to-gif.gif";


        var minesagamsg = "```md\n# [🥨] Facebook Mass Recruitment [🥨] ``` \n -  __**❖ Who are we?❖**__ ```cs\n # Facebook is a well organized team of highly educated individuals that have won multiple maps of skyblock. We are testing new waters on high paypal reward servers and are recruiting now! ``` \n - __**❖What we offer❖**__ ```fix\n #1 High Placements \n #2 Active Leadership \n #3 Experienced players \n #4 Classified and strategic plays that guarentee us wins every map we play``` \n - __**❖Requirements❖**__ ```xl\n 'Must be atleast 13 years old`\n `Must have basic knowledge of skyblock` \n `Must be able to work in a team` ```\n  - __**❖How to apply❖**__ ```diff\n- Join our discord: https://discord.gg/vbsUamx \n- Type %apply in general``` \n **❖Maps we have won❖** \n```diff\n! UniverseMC x6 \n! MCwars (2nd) x2 \n! VanityMC (3rd) x1 \n! Minesega (1st) x1```";


        var vanitymsg = "-recruit skyblock | Facebook | - Experienced leaders - Over $1100 Paypal won - Been an island since 2018  | - Must be over 13 - Must have schematica - Must have basic skyblock knowledge | https://discord.gg/x7uJaG2";




    bot.on("ready", async () => {
        console.log("I am running")
        
        var channels = []
        
        guildsAndChannels.forEach(x => {
            let guild = bot.guilds.find(g => g.id === x[0]);
            let channel = guild.channels.find(c => c.id === x[1]);
            channels.push(channel);
            console.log(`Added channel ${channel.name} from guild ${guild.name}`);
        });

        function loop() {

            let rndm = Math.floor(Math.random() * (max - min) + min);
            //console.log("Looping (time: " + rndm.toString() + " ms");
            inter = rndm;
            if (inter > 60000) {
                let minutes = ((Math.floor(inter / 60000)) + (inter % 60000 / 100000)).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + chalk.yellow(minutes) + (" minutes")));
                console.log(chalk.white('========================================================================================='));
            } else {
                let seconds = (inter / 1000).toFixed(2);
                console.log(chalk.blue("New message will be sent in " + seconds + chalk.blue(" seconds")));
                console.log(chalk.white('========================================================================================='));
            }
        



            
            setTimeout(() => {
                channels.forEach(message => {
                    message.fetchMessages({ limit: 1 })
                    .then(messages => {
                        console.log(chalk.yellow(`Atempting to send message in ${messages.first().guild.name}`));
                        console.log(chalk.white('========================================================================================='));
                        if(messages.first().author.id != bot.user.id) {
                            // c.send(`<@${messages.first().author.id}> \`${messages.first().content}\``)
                            message.send(admsg)

                            Math.floor(Math.random() * (max - min) + min);
                            console.log(chalk.green(`Successfully sent message in ${messages.first().guild.name}`));
                            console.log(chalk.white('========================================================================================='));
                        } else {
                            console.log(chalk.red(`Bot was the last sender, did not send message in ${messages.first().guild.name}`));
                            console.log(chalk.white('========================================================================================='));
                        }
                    })
                    .catch(console.error);

                    
                    
                    
                    //c.send(message)
                });
                console.log("Finished loop");
                loop();
            }, rndm);
        }
        loop();
    });

                








//token logs bot in
bot.login(process.env.BOT_TOKEN);






    // function getRandomChars(amount) {
    //     let thing = []
    //     for (let i = 0; i < amount; i++) {
    //         let characters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`
    //         thing.push(characters[Math.floor(Math.random() * characters.length)])
    //     }

    //     return thing.join("")
    // }

    // let waitingOn = []

    // bot.on('message', message => {
    //     if(message.channel.type == "dm") return; 
    //     if(message.author.bot) return; 

    //     if(message.author.id == bot.user.id) return;
    //     if(message.channel.id != "443461488598974464") return

    //     let randomChance = Math.floor(Math.random() * 101);   


    
    //         let r = true
    //         if(waitingOn.length == 0) {
    //             r = false;
    //         } else {
    //             for (let i = 0; i < waitingOn.length; i++) {
    //                 const e = waitingOn[i];
    //                 if(e.user = message.author.id) {
    //                     if(message.content == e.code) {
    //                         message.reply("Thank you for solving the CAPTCHA!")
    //                         waitingOn.splice(waitingOn.indexOf(i))
    //                     } else {
    //                         message.reply("Retard can't event awnser a CAPTCHA. smh")
    //                         waitingOn.splice(waitingOn.indexOf(i))
    //                     }
    //                 } else {
    //                     r = false
    //                 }
    //             }
    //         }

    //         if(r == false) {
    //             if(randomChance <= 15) {

    //                 let code = getRandomChars(23)
    //                 message.channel.send(`>>> <@${message.author.id}>
    //                 **CAPTCHA**
    //                 Please reply to this message with the following code to verify you are human.
            
    //                 *CODE:* \`${code}\``)
            
    //                 e = {
    //                     user: message.author.id,
    //                     code: code
    //                 }

    //                 waitingOn.push(e)
    //             }
    //         }
    // })
