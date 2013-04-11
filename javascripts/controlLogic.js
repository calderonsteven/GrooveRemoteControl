var myDataRef = new Firebase('https://rn66h22htpz.firebaseio-demo.com/');

$(document).ready(function(){
  $("a").click(function(){
		myDataRef.set({action: $(this).text().trim()});
	});
});
