let random=1;
let timer=null;
const c1=document.getElementById("c1");
const c2=document.getElementById("c2");
const c3=document.getElementById("c3");
timer=setInterval(function(){
	random=Math.floor(Math.random()*3)+1;
	if(random==1){
		c1.style.backgroundColor="green";
		c2.style.backgroundColor="grey";
		c3.style.backgroundColor="grey";
	}
	else if(random==2){
		c1.style.backgroundColor="gray";
		c2.style.backgroundColor="green";
		c3.style.backgroundColor="grey";

	}
	else if(random==3){
		c1.style.backgroundColor="grey";
		c2.style.backgroundColor="grey";
		c3.style.backgroundColor="green";

	}


},500) 
