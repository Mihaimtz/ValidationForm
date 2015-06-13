
$(".btn btn-primary").onclick(function (){
	$("#myform").validate({
		rules : {
			email :{
				required : true,
				email : true
			},
			name : {
				required : true,
				minlength: 6
			} ,
			Password : {
				required : true,
				milength: 6
			} ,
			Confirm_Password : {
				required : true,
				minlength : 6,
				equalTo : "#Password"
			}
			PhoneNumber : {
				required : true,
				minlength: 10
			} ,
			Age : required : true 
		} ,
		messages : {
			email : {
				required : "Please enter your email!" ,
				email : "Please enter a valid email!"
			} ,
			name : {
				required : "Please enter a username!" ,
				minlength : "Your username must have min 6 chars!"
			},
			Password : {
				required : "Please enter your password!" ,
				minlength: "Your password must have 6 char!"
			} ,
			Confirm_Password : {
				required : "Please confirm your password" ,
				minlength : "Yout password must have 6 char",
				equalTo : "Please enter the same password"
			} ,
			PhoneNumber : {
				required : "Please enter your phone number!" ,
				minlength : "Yout phone number must have 10 char"
			}, 
			Age : required : "Please enter your age!"
		}
	})
	
})