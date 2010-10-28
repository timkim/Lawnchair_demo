x$(window).on('load', function() {
		this.index = 0;
		this.theTextbox = x$('#theTextbox')[0];
		//this.storage = new Lawnchair({'adaptor':'webkit'});
		this.storage = new Lawnchair({'adaptor':'dom'});
		//this.storage = new Lawnchair({'adaptor':'cookie'});
		
		x$('#saveButton').click(function()
		{
			x$('#console').top('Saving key as: ' + 'myKey'+index + ', with value: ' + theTextbox.value +'<br \>');
			x$('#console').top('-------------------------------------------------------------------------------');
			console.log('Saving key as: ' + 'myKey'+index + ', with value: ' + theTextbox.value);
			storage.save({key:'myKey'+index, value: theTextbox.value}, function(r){console.log(r)}); 
			index++;
		});
		
		x$('#getButton').click(function()
		{	
			var theItems='';
			storage.each(function(r){theItems+='Key: ' + r.key + ' Value: ' + r.value + '<br \>'}); 
			x$('#console').top('Retrieving everything in our store: <br \>' + theItems);
			x$('#console').top('-------------------------------------------------------------------------------');
			console.log('Retrieving everything in our store ' + theItems);
			
		});
		
		x$('#nukeButton').click(function()
		{
			x$('#console').top("Nuke it from orbit. It's the only way to be sure. <br \>");
			console.log("Nuke it from orbit. It's the only way to be sure."); 
			x$('#console').top('-------------------------------------------------------------------------------');
			storage.nuke(); 
			index = 0;
		});

});

