function calculateMinCost() {
  //your code here
	var inputdata =document.querySelector("input").value;
	var inputarr= inputdata.split(",");
	for(var i=0;i<inputarr.length;i++){
	inputarr[i] = Number(inputarr[i]);
	}
	var cost = 0;
	while(inputarr.length > 1){
		var newrope = inputarr[0]+inputarr[1];
		cost = cost+newrope;
       
		//delete first two elements
		inputarr.splice(0,2);
		inputarr.push(newrope);
		inputarr.sort(function(a,b) {
			return a-b; });
	}
	 alert(cost);
  document.querySelector("#result").textcontent = cost;
  
  
}  
