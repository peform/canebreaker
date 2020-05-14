var channels = [];

const min = 240000;
const max = 600000; 

const message_min = 60000;
const message_max = 100000;

function registerChannel(guildId, channelId, message) {
	channels.push({"guildId": guildId, "channelId": channelId, "message": message});
	console.log(`channel with Id '${channelId}' in guild '${guildId}' is awaiting registration`);
}

const Discord = require("discord.js");

const promisify = require('util').promisify;


const bot = new Discord.Client({
    disableEveryone: true
});
bot.wait = promisify(setTimeout);
const chalk = require('chalk');


var admsg = "```md\n# [🥨] Facebook Mass Recruitment [🥨] ``` \n -  __**❖ Who are we?❖**__ ```cs\n # Facebook is a well organized team of highly educated individuals that have won multiple maps of skyblock. We are testing new waters on high paypal reward servers and are recruiting now! ``` \n - __**❖What we offer❖**__ ```fix\n #1 High Placements \n #2 Active Leadership \n #3 Experienced players \n #4 Classified and strategic plays that guarentee us wins every map we play``` \n - __**❖Requirements❖**__ ```xl\n 'Must be atleast 13 years old`\n `Must have basic knowledge of skyblock` \n `Must be able to work in a team` ```\n  - __**❖How to apply❖**__ ```diff\n- Join our discord: https://discord.gg/vbsUamx \n- Type %apply in general``` \n **❖Maps we have won❖** \n```diff\n! UniverseMC x6 \n! MCwars (2nd) x2 \n! VanityMC (3rd) x1 \n! Minesega (1st) x1``` \n https://cdn.discordapp.com/attachments/639388580141203466/708428852879163472/ezgif.com-video-to-gif.gif";


registerChannel("708313058451390605", "709421767512424469", admsg); // test
registerChannel("443457556824719360", "625853815060430879", admsg); // universemc
registerChannel("707049826470199427", "707050453728493661", admsg); // Mynetale
registerChannel("703395751488782377", "703718719687491625", admsg); // Immunity
registerChannel("587715966574788608", "703824223357108314", admsg); // JungleMC
registerChannel("514574611069927458", "648768296786591746", admsg); // pvplab
registerChannel("685749547120459837", "699352212421214229", admsg); // tornadoMC
registerChannel("692809364314128394", "692818404620501053", admsg); // ChaosCraft


bot.on("ready", async () => {
	console.log("I am running")
	
	channels.forEach(x => {
		let guild = bot.guilds.find(g => g.id === x.guildId);
		if (!guild) {
			console.error(`There is no guild with Id '${x.guildId}'`);
		} else {
			let channel = guild.channels.find(c => c.id === x.channelId);
			if (!channel) {
				console.error(`There is no channel with Id '${x.channelId}' in guild '${guild.name}'`);
			} else if (channel.type != "text") {
				console.error(`Channel '${channel.name}' in guild '${guild.name}' is not a text channel, and was not registered`);
			} else {
				x.channel = channel;
				channel.send(x.message);
				loopChannel(channel, x.message);
				console.log(`Registered channel '${channel.name}' in guild '${guild.name}'`)
			}
		}
	});

	function loopChannel(channel, message) {
		let rndm;
		if (channel.rateLimitPerUser > (min / 1000)) {
			let rateLimitInMs = channel.rateLimitPerUser * 1000;
			console.log(rateLimitInMs);

			let nmin = min + rateLimitInMs;
			let nmax = max + rateLimitInMs;

			rndm = Math.floor((Math.random() * (nmax - nmin) + nmin) / 1000);
		} else {
			rndm = Math.floor((Math.random() * (max - min) + min) / 1000);
		}

		let rndmText = rndm.toString();

		console.log(`Loop for channel '${channel.name}' started for ${rndmText} seconds`);

		setTimeout(() => {
			channel.send(message)
					.then(msg => console.log(`Successfully sent '${msg}' in channel '${channel.name}' in guild '${channel.guild.name}'`))
					.catch(err => {
						console.error(`Failed to send '${msg}' in channel '${channel.name}' in guild '${channel.guild.name}'`);
						console.error(`Error: '${err}'`);
					});
			console.log(`Loop for channel '${channel.name}' ended after ${rndmText} seconds`);
					
			loopChannel(channel, message);			
		}, rndm * 1000);
	}
});

bot.on("message", async message => {
	if (message.channel.rateLimitPerUser != 0) return;

	if (message.author.id == bot.user.id) return;

	let messageText = channels.find(x => x.guildId == message.guild.id && x.channelId == message.channel.id);

	if (!messageText) return;

	messageText = messageText.message;

	let rndm = Math.floor((Math.random() * (message_max - message_min) + message_min) / 1000);
	let rndmText = rndm.toString();

	console.log(`Message sent in channel '${message.channel.name}', started for ${rndmText} seconds`);


	setTimeout(() => {
		message.channel.send(messageText)
			.then(msg => console.log(`Successfully sent '${msg}' in channel '${message.channel.name}' in guild '${message.channel.guild.name}'`))
			.catch(err => {
				console.error(`Failed to send '${msg}' in channel '${message.channel.name}' in guild '${message.channel.guild.name}'`);
				console.error(`Error: '${err}'`);
			});
		console.log(`Message sent in channel '${message.channel.name}' ended after ${rndmText} seconds`);
	}, rndm * 1000);
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
