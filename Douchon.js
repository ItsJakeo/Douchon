//Douchon
var Bot    = require('ttapi');
var  repl = require('repl');
var AUTH   = 'xxxxxxxxxxxxxxxxxxxxxxxx';
var USERID = 'xxxxxxxxxxxxxxxxxxxxxxxx';
var ROOMID = 'xxxxxxxxxxxxxxxxxxxxxxxx';


var bot = new Bot(AUTH, USERID, ROOMID);
repl.start('> ').context.bot = bot;

bot.on('ready',        function (data) {  });
bot.on('roomChanged',  function (data) {  });

bot.on('speak',        function (data) {  });
bot.on('update_votes', function (data) {  });
bot.on('registered',   function (data) {  });

function sleep(milliseconds) {
  var start = new Date().getTime();

  while(new Date().getTime() < start + milliseconds) {
    //do nothing
  }
}

//autobop
bot.on('newsong', function (data) {
sleep( 50000 );
bot.vote('up'); 
});
bot.on('pmmed', function (data) {
    if (data.text.match('/up')) {
    bot.vote('up');
    }
     if (data.text.match('/down')) {
     bot.vote('down');
     }
     if (data.text.match('/gank')) {
     bot.snag();
     }
}); 
