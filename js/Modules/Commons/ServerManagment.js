define(function (require) {
	"use strict";

	//private variables
	var url = "http://localhost:3000/api/v1/";

	//public methods
	var ServerManagment = {
		createUser:function(options){
			$.ajax({
		        url: url+"users",
		        type: "POST",
				dataType: "json",
				data: {
		        	"user":options.userData
		        },
		        error: options.error,
				success: options.success
		    });
		}
	};

	return ServerManagment;
});