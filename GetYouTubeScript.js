javascript:(
  function(){
    scriptList = document.querySelector("#segments-container").children;
    outputText = "";

    for (var i = 0; i < scriptList.length; i++){
      script = scriptList[i].children[0].getElementsByClassName("segment-text style-scope ytd-transcript-segment-renderer")[0];
      if (script != undefined)
      {
        outputText += script.innerText + " ";
        
      }
      else{
        console.log("error");
      }
    }
    console.log(outputText);
  }
)();