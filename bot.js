/*
 * Discord Bot Builder Bot
 * Version 1.2.0
 * Robert Borghese
 */

const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});

}

client.login(process.env.Njg5NDc2NTY3OTU2NDU1NDg0.XnIniw.5KneJXXFJHEs4zGgj74Th1sKkRA);
