// A $( document ).ready() block.
var streamers = ["Ninja","sodapoppin","ClintStevens","TSM_Myth","dakotaz","FailArmy","Lirik","summit1g"]
var online = [];
var offline = [];

$( document ).ready(function() {
    console.log( "ready!" );
    for (var i = 0; i < streamers.length; i++) {
        $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/'+streamers[i], function(x) {
        	console.log(x);
        	if (x.stream != null) {

                  console.log(x.stream.stream_type);
                  if (x.stream.stream_type == "live") {
                  	console.log(x.stream.channel.display_name);
                  	online.push(x.stream.channel.display_name);
                  	$( "#list" ).append('<button id='+x.stream.channel.display_name+' class="logo-div logo-btn animated pulse" type="submit"><div id='+x.stream.channel.display_name+' class="channel-card card-online row"><div class="logo-div col-md-4"><img class="logo text-center" src="'+x.stream.channel.logo+'" alt="Submit"></div><div class="channel-div col-md-4"><h2 class="channel text-center">'+x.stream.channel.display_name+'</h2></div><div class="viewers-div col-md-4"><h3 class="viewers text-center">Viewers: '+x.stream.viewers+'</h3></div></div></button>');

                  }

              } else {
              	offline.push(x._links.channel.substring(38,100));
              	$( "#list" ).append('<div class="channel-card card-offline row"><div class="logo-div col-md-4"><div class="offline-img"></div></div><div class="channel-div col-md-4"><h2 class="channel text-center">'+x._links.channel.substring(38,100)+'</h2></div><div class="viewers-div col-md-4"><h3 class="viewers text-center">Viewers: '+"0"+'</h3></div></div>');
              }
              console.log(streamers);
              console.log(online);
              console.log(offline);
               });
    }

    $('body').on('click', '.logo-btn', function () {
      alert(this.id);
      new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: 700,
        layout: 'video',
        channel: this.id
      });
      });

    $( ".offline-btn" ).click(function() {
  		$(".card-online").css("visibility", "hidden");
  		$(".card-offline").css("visibility", "visible");
      console.log("pyah2");
});

    $( ".online-btn" ).click(function() {
  		$(".card-offline").css("visibility", "hidden");
  		$(".card-online").css("visibility", "visible");
});

});
