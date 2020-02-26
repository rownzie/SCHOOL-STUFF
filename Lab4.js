function airline(){
	var a = document.getElementById("ln").value;
	var b = document.getElementById("fn").value;
	var c = document.getElementById("g").value;
	var d = document.getElementById("email").value;
	var e = document.getElementById("or").value;
	var f = document.getElementById("des").value;
	var g = document.getElementById("dd").value;
	var h = document.getElementById("rd").value;
	var num = 0;
	
	
	if(a==0||b==0||c==0||d==0||e==0||f==0||g==0||h==0){
		alert("All information must be filled.");
	}else{
		num = num+1;
	}
	if(g>h){
		alert("Departure Date must not be greater than the Return Date.");
	}else{
		num =num+1;
	}
	var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.test(d)){
		num= num+1;
	}else{
		num=0;
    alert("You have entered an invalid email address!");
	}
	
	if(num==3){
		alert("Your booking on Ronix Airline has been sent. Contact us for more information."); 
	}
	
}