//load de control remote client
var RemoteClient = new Firebase('https://rn66h22htpz.firebaseio-demo.com/');

RemoteClient.on('value', function(snapshot) {
  var message = snapshot.val();
	console.log(message);
	
	if(message === null){ return; }//no message
	
	switch(message.action){
		case "Adelante" :
			window.Grooveshark.next();
		break;		
		case "Atras" :
			window.Grooveshark.previous();
		break;		
		case "Pausa" :
			window.Grooveshark.pause();
		break;		
		case "Reproducir" :
			window.Grooveshark.play();
		break;		
	}
});

