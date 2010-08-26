x$(window).on('load', function() {
		this.index = 0;
		this.theTextbox = x$('#theTextbox')[0];
		this.storage = new Lawnchair({'adaptor':'webkit'});
		//this.storage = new Lawnchair({'adaptor':'dom'});
		//this.storage = new Lawnchair({'adaptor':'cookie'});
		
		x$('#saveButton').click(function()
		{
			console.log('Saving key as: ' + 'myKey'+index + ', with value: ' + theTextbox.value);
			storage.save({key:'myKey'+index, value: theTextbox.value}, function(r){console.log(r)}); 
			index++;
		});
		
		x$('#getButton').click(function()
		{
			console.log('Retrieving everything in our store');
			storage.each(function(r){console.log(r)}); 
		});
		
		x$('#nukeButton').click(function()
		{
			console.log("Nuke it from orbit. It's the only way to be sure."); 
			storage.nuke(); 
			index = 0;
		});

});

