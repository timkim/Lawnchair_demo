x$(window).on('load', function() {
    try {
		this.storage = new Lawnchair({'adaptor':'webkit'});
    } catch(e) {
        alert('Exception in load! ' + e);
    }
});

