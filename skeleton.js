var TelegramBot     = require('node-telegram-bot-api');
var JVSDisplayOTron = require('jvsdisplayotron');
var gpio            = require('rpi-gpio');
var Omx             = require('node-omxplayer');
var googleTTS       = require('google-tts-api');
var NodeWebcam      = require('node-webcam');

/* Insert the Telegram token you received from @BotFather here */
var token = 'insert_token_here';

/* Instantiate the bot */
var bot = new TelegramBot(token, { polling: true });

// ============================================================================
// GROUP 1: EARTH
// ============================================================================

/*
 * Display some text on the Display-O-Tron hat (not the dot3k).
 *
 * For code examples, see: 
 * https://github.com/jorisvervuurt/JVSDisplayOTron/tree/master/examples/dothat
 *
 * The command syntax on Telegram is as follows:
 *
 *   /display <color> <text-to-display>
 *
 * where color should be one of red, green, blue, or rainbow.
 *
 */
bot.onText(/\/display\s(red|green|blue|rainbow)\s(.+)/, function(message, match) {

  var chatId = message.chat.id;

  var color = match[1];
  var text  = match[2];    // The text to display

  // Insert your implementation here using the JVSDisplayOTron library.

});

// ============================================================================
// GROUP 2: WIND
// ============================================================================

/*
 * Send the Pi some text to read out loud using the text-to-speech synthesizer.
 *
 * The command syntax on Telegram is as follows:
 *
 *   /say <text-to-read-out>
 *
 */
bot.onText(/\/say\s(.+)/, function(message, match) {

  var chatId = message.chat.id;

  var string = match[1];         // The text to be read out

  // Insert your implementation here using the Google TTS and Omx libraries.

});

/*
 * Send the Pi a Telegram voice message to be played out loud over the speaker.
 *
 * You invoke this command by sending a Telegram voice message to the bot.
 *
 */
bot.on('voice', function(message) {

  var chatId = message.chat.id;

  // Insert your implementation here using the Omx library.

  // To play the audio clip, you first need to download the file using the
  // following API call: https://github.com/yagop/node-telegram-bot-api#TelegramBot+downloadFile

  // Hint: console.log the message to get details of the object

});

// ============================================================================
// GROUP 3: FIRE
// ============================================================================

/*
 * Turn on and off LEDs of different colors on the rPi.
 *
 * The command syntax on Telegram is as follows:
 *
 *   /led <red|green|yellow> <on|off>
 *
 */
bot.onText(/\/led\s(red|green|yellow)\s(on|off)/, function(message, match) {

  var chatId = message.chat.id;

  var color  = match[1]; 
  var state  = match[2];   // 'on' or 'off'

  // Insert your implementation here using the gpio library.

});

/*
 * Take a photo with the webcam.
 *
 * The command syntax on Telegram is as follows:
 *
 *   /photo <filename> 
 *
 */
bot.onText(/\/photo\s(.+)/, function(message, match) {

  var chatId = message.chat.id;

  var name = match[1];           // The filename without file extension

  // Insert your implementation here using the NodeWebcam library.

});

// ============================================================================
// EVERYONE (OPTIONAL)
// ============================================================================

/*
 * Bonus assignment
 *
 * Go crazy and create your own bot service, e.g., /weather to get the 
 * weather conditions in a city or location.
 *
 */
bot.onText(/\/your_command (.+)/, function(message, match) {

  var chatId = message.chat.id;

  // Insert your implementation here.

});
