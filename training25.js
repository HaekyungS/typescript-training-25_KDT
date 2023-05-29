let dummyText = "아버지가방에들어가신다."

let refineNounData = ["아버지","방"]

let spacing = " "

function spacingLetter(text, nounData, spacing){
  let result = ""

  text.split('').forEach(element => {
    if(result===nounData[0]){
      result+=element+spacing;
    }else if(result.startsWith(nounData[0])&&result.endsWith(nounData[1])){
      result+=element+spacing;
    }else{
      result+=element
    }
  });

  return result
}

console.log(spacingLetter(dummyText,refineNounData,spacing))