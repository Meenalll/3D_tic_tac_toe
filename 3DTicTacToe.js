
var intervalId=setInterval(function () {
    getExternalData();
    checkRemove();
	checkReset();
	checkMultipleLocations();
	checkElimination();
}, 100);


function startGame(){    //starting the game
if((localStorage.getItem("countx")==null)||(localStorage.getItem("countx")==undefined)){
localStorage.setItem("countx","0");
document.getElementById("t1").innerHTML=localStorage.getItem("countx");
}
if((localStorage.getItem("county")==null)||(localStorage.getItem("county")==undefined)){
localStorage.setItem("county","0");
document.getElementById("t2").innerHTML=localStorage.getItem("county");
}


localStorage.setItem("document.turn",'X');      //setting  'X' turn in local storage
	if(Math.random()<0.5){
		localStorage.setItem("document.turn",'0'); //randomly selecting value for turn & set in local storage
	}
	document.winner=null;
	
	document.getElementById("info1").defaultValue="Details for 'X'";
	document.getElementById("info2").defaultValue="Details for '0'";
	
	
var v=3;                    
var seconds =0;                          //storing matrix values as per the matrix number
var q=setInterval(function () {
  seconds++;
  },1000);
if(seconds==10)
{v=v+2;

}  

	for(i=0;i<=v;i++){
	for(j=0;j<=v;j++){
		for(k=0;k<=v;k++){
			var a=i.toString()+"-"+j.toString()+"-"+k.toString();
			localStorage.setItem(document.getElementById(a).innerHTML,"");
			document.getElementById(a).innerHTML=localStorage.getItem(document.getElementById(a).innerHTML);
			document.getElementById(a).style.backgroundColor = "grey";
		}
	}
}
if(localStorage.getItem!=""){
	setMessage(localStorage.getItem("document.turn")+" "+" gets to start");}     //setting message in local storage

	

	
	}  //end of startGame() method
	

	
function pause() {
    clearInterval(a);
    clearInterval(b);
	 clearInterval(c);
	  clearInterval(d);
	   clearInterval(e);
	
}





function checkRemove(){         //check values if present then randomly set to blank
	for(i=0;i<=3;i++){
	for(j=0;j<=3;j++){
		for(k=0;k<=3;k++){
			var a=i.toString()+"-"+j.toString()+"-"+k.toString();
		if(document.getElementById(a).innerHTML!="" && document.getElementById(a).innerHTML!="Elt" && Math.random()==0.0001){
			if(document.getElementById(a).innerHTML=="X"){
			document.getElementById(a).innerHTML="";
			document.getElementById("info1").value="Positions removed are"+a;
			}
			else if((document.getElementById(a).innerHTML=="0")&& document.getElementById(a).style.backgroundColor!="red"){
			document.getElementById(a).innerHTML="";
			document.getElementById("info2").value="Positions removed are"+a;
			
		}
	}
}
	}
}
}


function checkReset(){         //check values if present then randomly set to original value
	for(i=0;i<=3;i++){
	for(j=0;j<=3;j++){
		for(k=0;k<=3;k++){
			var a=i.toString()+"-"+j.toString()+"-"+k.toString();
		if((document.getElementById(a).innerHTML=="") && (document.getElementById(a).innerHTML!="Elt") && (localStorage.getItem(document.getElementById(a).innerHTML)!="") && (Math.random()==0.0001)){
			document.getElementById(a).innerHTML=localStorage.getItem(document.getElementById(a).innerHTML);
			
			}
	}
}
	}
}


function checkMultipleLocations(){         //check multiple locations if present then randomly set
	var locations=Math.floor(Math.random()*20)
			var count=0;
			for(i=0;i<=3;i++){
	        for(j=0;j<=3;j++){
		    for(k=0;k<=3;k++){
			var a=i.toString()+"-"+j.toString()+"-"+k.toString();
			count=count+1;
		if(count==locations && (Math.random()==0.0001)){
		if((Math.random()>0.5) || (document.getElementById(a).innerHTML=="X") || (document.getElementById(a).innerHTML!="Elt") || (document.getElementById(a).innerHTML==""))
			{document.getElementById(a).innerHTML="0";
		document.getElementById("info1").value="Random Positions added at"+a;
		
			}
			
			else if((Math.random()>0.5) || (document.getElementById(a).innerHTML=="0") || (document.getElementById(a).innerHTML!="Elt") || (document.getElementById(a).innerHTML=="")){
				document.getElementById(a).innerHTML="X";
				document.getElementById("info2").value="Random Positions added at"+a;
				}
			
		}
		
		
			}
			}
			}
}


function checkElimination(){         //check multiple locations if present then randomly eliminate from game
	for(i=0;i<=3;i++){
	    for(j=0;j<=3;j++){
		    for(k=0;k<=3;k++){
			var a=i.toString()+"-"+j.toString()+"-"+k.toString();
			if((document.getElementById(a).innerHTML!="") && (document.getElementById(a).innerHTML=="X") && (Math.random()==0.1)){
				
				document.getElementById(a).innerHTML="Elt";
				document.getElementById(a).style.backgroundColor = "red";
				document.getElementById("info1").value="Random Positions eliminated are"+a;
			}
			else if((document.getElementById(a).innerHTML!="") && (document.getElementById(a).innerHTML=="0") && (Math.random()==0.1)){
				
				document.getElementById(a).innerHTML="Elt";
				document.getElementById(a).style.backgroundColor = "red";
				document.getElementById("info2").value="Random Positions eliminated are"+a;
			}
			}
		   }
		
		}
			}



function checkNextPiece(){
	for(i=0;i<=3;i++){
	    for(j=0;j<=3;j++){
		    for(k=0;k<=3;k++){
				var a=i.toString()+"-"+j.toString()+"-"+k.toString();
				alert(a);
}}}}





function setMessage(msg)           //setting message for winner, tie, next move
{
	localStorage.setItem(document.getElementById("message").innerHTML,msg);                          //setting message in local storage
	document.getElementById("message").innerHTML=localStorage.getItem(document.getElementById("message").innerHTML);
}

function nextMove(val)                   //called every time player clicks on board to check next turn
{
	
	if(document.winner!=null){
		setMessage(document.winner+""+"already won the game");
		
	}
	
	else if(document.getElementById(val).innerHTML==""){
	localStorage.setItem(document.getElementById(val).innerHTML,localStorage.getItem("document.turn"));
	document.getElementById(val).innerHTML=localStorage.getItem(document.getElementById(val).innerHTML);
	
	switchTurn();
	
	}
	else{
		setMessage("This box is already used");
	}
}


function switchTurn(){           
                  // called after player enters a move
	if(checkForWinner(localStorage.getItem("document.turn"))){
		setMessage("congratulations "+" "+localStorage.getItem("document.turn")+"!!"+" "+"You Win");
		document.winner=localStorage.getItem("document.turn");
		}
		else if(checkForDraw()){
			setMessage("it's a draw");
		}
	
		
	else if(localStorage.getItem("document.turn")=='X'){
		localStorage.setItem("document.turn",'0');
		setMessage("it's "+""+""+localStorage.getItem("document.turn")+""+"'s turn");
		
	}
	else{
		localStorage.setItem("document.turn",'X');
		setMessage("it's " +""+localStorage.getItem("document.turn")+""+"'s turn");
		
	}
	
}


function checkForDraw(){

	var count=0;
	for(i=0;i<=3;i++){
	for(j=0;j<=3;j++){
		for(k=0;k<=3;k++){
		if(document.getElementById(i.toString()+"-"+j.toString()+"-"+k.toString()).innerHTML!="")
		{
			count=count+1;
		}
	}
	}
	}
		if((count==64) &&(document.winner==null)){
			return true;
		}
		else{
			return false;
		}
	
}


function getBox(number){           //returns value 
  
	return document.getElementById(number).innerHTML;
	}
	
	
function checkRow(a,b,c,d,move){   
                                                 //winning matches 
	var result=false;
	if(getBox(a)==move&&getBox(b)==move&&getBox(c)==move&&getBox(d)==move){
		document.getElementById(a).style.backgroundColor = "blue";
		document.getElementById(b).style.backgroundColor = "blue";
		document.getElementById(c).style.backgroundColor = "blue";
		document.getElementById(d).style.backgroundColor = "blue";
		result=true;
	}
return result;	
	
}
	
function checkForWinner(move){     
                                          //check for who is the winner,  called every time before player enters a move
var result=false;

if (checkRow("0-3-0","0-3-1","0-3-2","0-3-3",move) || 
    checkRow("1-3-0","1-3-1","1-3-2","1-3-3",move) || 
    checkRow("2-3-0","2-3-1","2-3-2","2-3-3",move) || 
	checkRow("3-3-0","3-3-1","3-3-2","3-3-3",move) || 
	checkRow("0-2-0","0-2-1","0-2-2","0-2-3",move) || 
	checkRow("1-2-0","1-2-1","1-2-2","1-2-3",move) || 
    checkRow("2-2-0","2-2-1","2-2-2","2-2-3",move) || 
	checkRow("3-2-0","3-2-1","3-2-2","3-2-3",move)||
	checkRow("0-1-0","0-1-1","0-1-2","0-1-3",move)||
	checkRow("1-1-0","1-1-1","1-1-2","1-1-3",move)||
	checkRow("2-1-0","2-1-1","2-1-2","2-1-3",move)||
	checkRow("0-0-0","0-0-1","0-0-2","0-0-3",move)||
	checkRow("1-0-0","1-0-1","1-0-2","1-0-3",move)||
	checkRow("2-0-0","2-0-1","2-0-2","2-0-3",move)||
	checkRow("3-0-0","3-0-1","3-0-2","3-0-3",move)||
	checkRow("0-3-0","1-3-0","2-3-0","3-3-0",move)||
	checkRow("0-2-0","1-2-0","2-2-0","3-2-0",move)||
	checkRow("0-1-0","1-1-0","2-1-0","3-1-0",move)||
	checkRow("0-0-0","1-0-0","2-0-0","3-0-0",move)||
	checkRow("0-3-0","0-2-0","0-1-0","0-0-0",move)||
	checkRow("1-3-0","1-2-0","1-1-0","1-0-0",move)||
	checkRow("2-3-0","2-2-0","2-1-0","2-0-0",move)||
	checkRow("3-3-0","3-2-0","3-1-0","3-0-0",move)||
	checkRow("0-3-0","1-2-0","2-1-0","3-0-0",move)||
	checkRow("0-0-0","1-1-0","2-2-0","3-3-0",move)||
	checkRow("0-3-1","1-3-1","2-3-1","3-3-1",move)||
	checkRow("0-2-1","1-2-1","2-2-1","3-2-1",move)||
	checkRow("0-1-1","1-1-1","2-1-1","3-1-1",move)||
	checkRow("0-0-1","1-0-1","2-0-1","3-0-1",move)||
	checkRow("0-3-1","0-2-1","0-1-1","0-0-1",move)||
	checkRow("1-3-1","1-2-1","1-1-1","1-0-1",move)||
	checkRow("2-3-1","2-2-1","2-1-1","2-0-1",move)||
	checkRow("3-3-1","3-2-1","3-1-1","3-0-1",move)||
	checkRow("3-3-1","2-2-1","1-1-1","0-0-1",move)||
	checkRow("0-3-1","1-2-1","2-1-1","3-0-1",move)||
	checkRow("0-3-2","1-3-2","2-3-2","3-3-2",move)||
	checkRow("0-2-2","1-2-2","2-2-2","3-2-2",move)||
	checkRow("0-1-2","1-1-2","2-1-2","3-1-2",move)||
	checkRow("0-0-2","1-0-2","2-0-2","3-0-2",move)||
	checkRow("0-3-2","0-2-2","0-1-2","0-0-2",move)||
	checkRow("1-3-2","1-2-2","1-1-2","1-0-2",move)||
	checkRow("2-3-2","2-2-2","2-1-2","2-0-2",move)||
	checkRow("3-3-2","3-2-2","3-1-2","3-0-2",move)||
	checkRow("0-3-2","1-2-2","2-1-2","3-0-2",move)||
	checkRow("0-0-2","1-1-2","2-2-2","3-3-2",move)||
	checkRow("0-3-3","1-3-3","2-3-3","3-3-3",move)||
	checkRow("0-2-3","1-2-3","2-2-3","3-2-3",move)||
	checkRow("0-1-3","1-1-3","2-1-3","3-1-3",move)||
	checkRow("0-0-3","1-0-3","2-0-3","3-0-3",move)||
	checkRow("0-3-3","0-2-3","0-1-3","0-0-3",move)||
	checkRow("1-3-3","1-2-3","1-1-3","1-0-3",move)||
	checkRow("2-3-3","2-2-3","2-1-3","2-0-3",move)||
	checkRow("3-3-3","3-2-3","3-1-3","3-0-3",move)||
	checkRow("0-3-3","1-2-3","2-1-3","3-0-3",move)||
	checkRow("0-0-3","1-1-3","2-2-3","3-3-3",move))
	
{
	if(move=='X'){
		increaseXScore();
		
		}
	else{
		increaseYScore();
	}
	result=true;
	clearInterval(intervalId);
}
return result;
}
		 
		
function increaseXScore(){       //increase scores for X if it wins
		var s;
		s=localStorage.getItem("countx");
		s=parseInt(s)+1;
		localStorage.setItem("countx",s);
		document.getElementById("t1").innerHTML=localStorage.getItem("countx");
	}
	
	function increaseYScore(){     //increase scores of Y if it wins
		var s1;
		s1=localStorage.getItem("county");
		s1=parseInt(s1)+1;
		localStorage.setItem("county",s1);
		document.getElementById("t2").innerHTML=localStorage.getItem("county");
	}
	
	
	function reset(){
		
		for(i=0;i<=3;i++){
	for(j=0;j<=3;j++){
		for(k=0;k<=3;k++){
		clearBox(i.toString()+"-"+j.toString()+"-"+k.toString());
		
		
	}
	}
		}
	
	startGame();
	}
	
function clearScores(){
	localStorage.clear();
	startGame();
	
}


function clearBox(number){  
          //emptying the board
	document.getElementById(number).innerHTML="s";
}





function getExternalData(){		
var request = new XMLHttpRequest();
    request.open("POST","http://74.71.106.186:5320/cgi-bin/exterEvents.py",true);
	request.onreadystatechange = function() {
        var div = document.getElementById("external");
		
        if (this.readyState>3 && this.status == 200)  {
			
            if (this.responseText != null) {div.innerHTML = display(this.responseText); }
            else { div.innerHTML = "Error: no data"; }
        }
  };
  request.setRequestHeader("Content-type","application/x-wwww-form-urlencoded");
 
  var str="id=0&mat=4";
  for(i=0;i<=3;i++){
	for(j=0;j<=3;j++){
		for(k=0;k<=3;k++){
			
			tem=""+i+"-"+"+j+"+"-"+k;
			
			tem2=localStorage.getItem(tem);
			if(tem2!=null){
				
				str+="&"+"+tem+"+"="+localStorage.getItem(tem);
			}
else{
	
str+="&"+tem+"=";
}
		}
	}
		}
		
  request.send(str);
  
} 




function display(val) {
   
    var typ=JSON.parse(val);
    for(i=0;i<=3;i++){
	for(j=0;j<=3;j++){
		for(k=0;k<=3;k++){ 
		
       localStorage.setItem((i+"-"+"+j+"+"-"+k),typ[i+"-"+"+j+"+"-"+k]);
       
    }
	}
	}
    return localStorage.getItem((i+"-"+"+j+"+"-"+k));
}
