//load de control remote client
var RemoteClient = new Firebase('https://rn66h22htpz.firebaseio-demo.com/');

RemoteClient.on('value', function(snapshot) {
  var message = snapshot.val();
	console.log(message);
	
	if(message === null){ return; }//no message
	
	switch(message.action){
		case "Next" :
			window.Grooveshark.next();
		break;		
		case "Previous" :
			window.Grooveshark.previous();
		break;		
		case "Pause" :
			window.Grooveshark.pause();
		break;		
		case "Play" :
			window.Grooveshark.play();
		break;		
	}
});

