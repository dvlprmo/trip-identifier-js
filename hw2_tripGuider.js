
function plainTrip(startPoint, startLocation, endPoint, endLocation)
{
  var NLineArray = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
  var LLineArray= ["8th", "6th", "Union Square", "3rd", "1st"];
  var sixLineArray= ["Grand Central", "33rd", "28th", "Union Square", "Astor Place"];

  // define a new variable to store the Union Square index of each array. 
  var unionSquareN = NLineArray.indexOf("Union Square");
  var unionSquareL = LLineArray.indexOf("Union Square");
  var unionSquareS = sixLineArray.indexOf("Union Square");
  

  // define the index of the startLocation in the NLineArray.
  var Nindex = NLineArray.indexOf(startLocation);
  //var key = NLineArray[Nindex];

  // define the index of the endLocation in the NLineAarrayarray.
  var NEIndex = NLineArray.indexOf(endLocation);
  //var endKey = NLineArray[NEIndex];

  // define the index of the startLocation in the LLinaArray.
  var LSindex = LLineArray.indexOf(startLocation);
 
  // define the index of the endLocation in the LLinaArray.
  var LSEindex = LLineArray.indexOf(endLocation);

  // define the index of the startLocation in the sixLineArray.
  var SLSindex = sixLineArray.indexOf(startLocation);

  // define the index of the endLocation in the sixLineArray.
  var SLEindex = sixLineArray.indexOf(endLocation);
  
  for (var i = 0; i < NLineArray.length; i++)
  {
    if(NLineArray[i] == NLineArray[Nindex] && startPoint == "N" && endPoint == "N"){
      for(var j = 0; j < NLineArray.length; j++){

        if(NLineArray[j] == NLineArray[NEIndex] && NEIndex > Nindex)
        {     
          console.log(
            "You must travel through the following stops on the N line: " + NLineArray[Nindex] + "," +  NLineArray.slice(Nindex+1, NEIndex) + ","  + NLineArray[NEIndex]);
            console.log(Math.abs(NEIndex - Nindex) + " stops in total");

        }else if(NLineArray[j] == NLineArray[NEIndex] && NEIndex < Nindex)
        { 
          NLineArray.reverse()
          Nindex = NLineArray.indexOf(startLocation);
          NEIndex = NLineArray.indexOf(endLocation);    
          console.log(
            "You must travel through the following stops on the N line: " + NLineArray[Nindex] + "," +  NLineArray.slice(Nindex + 1, NEIndex) + ","  + NLineArray[NEIndex]);
            console.log(Math.abs(NEIndex - Nindex) + " stops in total");
            break;

        }
      }
    }else if(NLineArray[i] == NLineArray[Nindex] && startPoint == "N" && endPoint == "L")
    {
      var fTrip = [];
      for(var i = 0; i< NLineArray.length; i++)
      {
        if(NLineArray[i] != "Union Square"){
          fTrip.push(NLineArray[i]);
        }else{
          fTrip.push(NLineArray[i]);
          break;
        }
      }
      console.log("You must travel through the following stops on the N line: " + fTrip + ".\nChange in " + fTrip[fTrip.length-1] + ".");
      
      var changeOfSteps = []
      for (var i = 0; i< LLineArray.length; i++)
      {
        if(LLineArray[i] == fTrip[fTrip.length-1] && LSEindex < unionSquareL){
          i++;
          LLineArray.reverse();
          
          for(var j = i; j < LLineArray.length; j++){
            fTrip.push(LLineArray[j]);  
            changeOfSteps.push(LLineArray[j]);
          }
        }else if(LLineArray[i] == fTrip[fTrip.length-1] && LSEindex > unionSquareL)
        {
          i++;
          for(var j = i; j < LLineArray.length; j++){
            fTrip.push(LLineArray[j]);  
            changeOfSteps.push(LLineArray[j]);
          }
        }
      }
        console.log("Your journey continues through the following stops on the L: " + changeOfSteps);
        var total = fTrip.length;
        console.log("Total stops: " + (total-1));
        
   
    }else if(NLineArray[i] == NLineArray[Nindex] && startPoint == "N" && endPoint == "six")
    {
      var fTripS = [];
      var num = LSindex;
      for(var i = Nindex; i < NLineArray.length; i++)
      {
        if(NLineArray[i] != "Union Square"){
          fTripS.push(NLineArray[i]);
        }else{
          fTripS.push(NLineArray[i]);
          break;
        }
      }
      console.log("You must travel through the following stops on the N line: " + fTripS + ".\nChange in " + fTripS[fTripS.length-1] + ".");
      
      var changeOfStepsS = []
      for (var i = 1; i< sixLineArray.length; i++)
      {
        if(sixLineArray[i] == fTripS[fTripS.length-1] && SLEindex < unionSquareS){
          i++;
          sixLineArray.reverse();
          
          for(var j = SLEindex+1; j < sixLineArray.length-1; j++){
            fTripS.push(sixLineArray[j]);  
            changeOfStepsS.push(sixLineArray[j]);
          }
        }else if(sixLineArray[i] == fTripS[fTripS.length-1] && SLEindex > unionSquareS)
        {
          i++;
          for(var j = SLEindex; j < sixLineArray.length; j++){
            fTripS.push(sixLineArray[j]);  
            changeOfStepsS.push(sixLineArray[j]);
          }
        }
      }
       // console.log(changeOfStepsS);
        console.log("Your journey continues through the following stops on the six: " + changeOfStepsS);
        var totalS = fTripS.length;
        console.log("Total stops: " + (totalS-1));
        
   
    }
  }

  for (var i = 0; i < LLineArray.length; i++)
  {
    if(LLineArray[i] == LLineArray[LSindex] && startPoint == "L" && endPoint == "L"){
      for(var j = 0; j < LLineArray.length; j++){
        if(LLineArray[j] == LLineArray[LSEindex] && LSEindex > LSindex)
        {
          
          console.log(
            "You must travel through the following stops on the L line: " + LLineArray[LSindex] + "," +  LLineArray.slice(LSindex+1, LSEindex) + "," + LLineArray[LSEindex]);
            console.log(Math.abs(LSEindex - LSindex) + " stops in total");

        }else if(LLineArray[j] == LLineArray[LSEindex] && LSEindex < LSindex)
        {
          LLineArray.reverse()
          LSindex = LLineArray.indexOf(startLocation);
 
  
          LSEindex = LLineArray.indexOf(endLocation);
          console.log(
            "You must travel through the following stops on the L line: " + LLineArray[LSindex] + "," +  LLineArray.slice(LSindex+1, LSEindex) + "," + LLineArray[LSEindex]);
            console.log(Math.abs(LSEindex - LSindex) + " stops in total");
            break;

        }
      }
    }else if(LLineArray[i] == LLineArray[LSindex] && startPoint == "L" && endPoint == "N")
    {
      var fTripL = [];
      for(var i = 0; i < LLineArray.length; i++)
      {
        if(LLineArray[i] != "Union Square"){
          fTripL.push(LLineArray[i]);
        }else{
          fTripL.push(LLineArray[i]);
          break;
        }
      }
      console.log("You must travel through the following stops on the L line: " + fTripL + ".\nChange in " + fTripL[fTripL.length-1] + ".");
      
     
      var changeOfStepsL = []

      for (var i = 0; i < NLineArray.length; i++)
      {
        if(NLineArray[i] == fTripL[fTripL.length-1] && NEIndex < unionSquareN){
          i++;
          NLineArray.reverse();
         
          
          for(var j = 1; j < NLineArray.length; j++){
            
            fTripL.push(NLineArray[j]);  
            changeOfStepsL.push(NLineArray[j+1]);
          }
          
        }else if(NLineArray[i] == fTripL[fTripL.length-1] && NEIndex > unionSquareN)
        {
          i++
          for(var j = i; j < NLineArray.length; j++){
            fTripL.push(NLineArray[j]);  
            changeOfStepsL.push(NLineArray[j]);
          }
        }
      }   
        console.log("Your journey continues through the following stops on the N: " + changeOfStepsL);
        var totalL = fTripL.length;
        console.log("Total stops: " + (totalL-1));
        
   
    }else if(LLineArray[i] == LLineArray[LSindex] && startPoint == "L" && endPoint == "six")
    {
      var fTripLS = [];
      for(var i = 0; i < LLineArray.length; i++)
      {
        if(LLineArray[i] != "Union Square"){
          fTripLS.push(LLineArray[i]);
        }else{
          fTripLS.push(LLineArray[i]);
          break;
        }
      }
      console.log("You must travel through the following stops on the L line: " + fTripLS + ".\nChange in " + fTripLS[fTripLS.length-1] + ".");
      
     
      var changeOfStepsLS = []

      for (var i = 0; i < sixLineArray.length; i++)
      {
        if(sixLineArray[i] == fTripLS[fTripLS.length-1] && SLEindex < unionSquareS){
          i++;
          sixLineArray.reverse();
         
          
          for(var j = SLEindex+1; j < sixLineArray.length-1; j++){
            
            fTripLS.push(sixLineArray[j]);  
            changeOfStepsLS.push(sixLineArray[j]);
          }
          
        }else if(sixLineArray[i] == fTripLS[fTripLS.length-1] && SLEindex > unionSquareS)
        {
          i++
          for(var j = SLEindex; j < sixLineArray.length; j++){
            fTripLS.push(sixLineArray[j]);  
            changeOfStepsLS.push(sixLineArray[j]);
          }
        }
      }   
        console.log("Your journey continues through the following stops on the N: " + changeOfStepsLS);
        var totalLS = fTripLS.length;
        console.log("Total stops: " + (totalLS-1));
        
   
    }
  }
  for (var i = 0; i < sixLineArray.length; i++)
  {
    if(sixLineArray[i] == sixLineArray[SLSindex] && startPoint == "six" && endPoint == "six"){
      for(var j = 0; j < sixLineArray.length; j++){
        if(sixLineArray[j] == sixLineArray[SLEindex] && SLEindex > SLSindex)
        {
          
          console.log(
            "You must travel through the following stops on the six line: " + sixLineArray[SLSindex] + "," +  sixLineArray.slice(SLSindex+1, SLEindex) + "," + sixLineArray[SLEindex]);
            console.log(Math.abs(SLEindex - SLSindex) + " stops in total");

        }else if(sixLineArray[j] == sixLineArray[SLEindex] && SLEindex < SLSindex)
        {
          sixLineArray.reverse()
          SLSindex = sixLineArray.indexOf(startLocation);
 
  
          SLEindex = sixLineArray.indexOf(endLocation);
          console.log(
            "You must travel through the following stops on the L line: " + sixLineArray[SLSindex] + "," +  sixLineArray.slice(SLSindex+1, SLEindex) + "," + sixLineArray[SLEindex]);
            console.log(Math.abs(SLEindex - SLSindex) + " stops in total");
            break;

        }
      }
    }else if(sixLineArray[i] == sixLineArray[SLSindex] && startPoint == "six" && endPoint == "N")
    {
      var fTripSN = [];
      for(var i = SLSindex; i< sixLineArray.length; i++)
      {
        if(sixLineArray[i] != "Union Square"){
          fTripSN.push(sixLineArray[i]);
        }else{
          fTripSN.push(sixLineArray[i]);
          break;
        }
      }
      console.log("You must travel through the following stops on the six line: " + fTripSN + ".\nChange in " + fTripSN[fTripSN.length-1] + ".");
      
      var changeOfStepsSN = []
      for (var i = 0; i< NLineArray.length; i++)
      {
        if(NLineArray[i] == fTripSN[fTripSN.length-1] && NEIndex < unionSquareN){
          i++;
          NLineArray.reverse();
          
          for(var j = NEIndex+1; j < NLineArray.length-1; j++){
            fTripSN.push(NLineArray[j]);  
            changeOfStepsSN.push(NLineArray[j]);
          }
        }else if(NLineArray[i] == fTripSN[fTripSN.length-1] && NEIndex > unionSquareN)
        {
          i++;
          for(var j = i; j < NLineArray.length; j++){
            fTripSN.push(NLineArray[j]);  
            changeOfStepsSN.push(NLineArray[j]);
          }
        }
      }
        console.log("Your journey continues through the following stops on the L: " + changeOfStepsSN);
        var totalSN = fTripSN.length;
        console.log("Total stops: " + (totalSN-1));
        
   
    }else if(sixLineArray[i] == sixLineArray[SLSindex] && startPoint == "six" && endPoint == "L")
    {
      var fTripSL = [];
      for(var i = SLSindex; i< sixLineArray.length; i++)
      {
        if(sixLineArray[i] != "Union Square"){
          fTripSL.push(sixLineArray[i]);
        }else{
          fTripSL.push(sixLineArray[i]);
          break;
        }
      }
      console.log("You must travel through the following stops on the six line: " + fTripSL + ".\nChange in " + fTripSL[fTripSL.length-1] + ".");
      
      
      var changeOfStepsSL = []
      for (var i = 1; i< LLineArray.length; i++)
      {
        if(LLineArray[i] == fTripSL[fTripSL.length-1] && LSEindex < unionSquareL){
          i++;
          LLineArray.reverse();
          
          for(var j = i; j < LLineArray.length; j++){
            fTripSL.push(LLineArray[j]);  
            changeOfStepsSL.push(LLineArray[j]);
          }
        }else if(LLineArray[i] == fTripSL[fTripSL.length-1] && LSEindex > unionSquareL)
        {
          i++;
          for(var j = i; j < LLineArray.length; j++){
            fTripSL.push(LLineArray[j]);  
            changeOfStepsSL.push(LLineArray[j]);
          }
        }
      }      
        console.log("Your journey continues through the following stops on the six: " + changeOfStepsSL);
        var totalSL = fTripSL.length;
        console.log("Total stops: " + (totalSL-1));
    }
  }
}
//plainTrip("N", "Union Square", "L", "8th");
//plainTrip("N", "Union Square", "L", "1st");
// plainTrip("N", "Times Square", "N", "8th");
//plainTrip("L", "8th", "N", "Times Square");
//plainTrip("L", "8th", "N", "8th");
//plainTrip("N", "34th", "six", "33rd");
//plainTrip("N", "34th", "six", "Astor Place");
//plainTrip("L", "8th", "six", "33rd");
//plainTrip("L", "8th", "six", "Astor Place")
//plainTrip("L", "1st", "L", "8th");
//plainTrip("L", "8th", "L", "1st");
//plainTrip("six", "33rd", "N", "8th");
//plainTrip("six", "33rd", "L", "8th");
//plainTrip("six", "33rd", "L", "8th");
//plainTrip("six", "33rd", "L", "1st");
//plainTrip("six", "Union Square", "six", "Grand Central");