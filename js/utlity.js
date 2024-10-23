function getInputFileById(id){
    const inputValue = document.getElementById(id).value ;
    const inputNumber = parseFloat(inputValue);
    return inputNumber ;
 }

 function getTextFildValueById (id) {
   const textValue = document.getElementById(id).innerText;
   const textNumber = parseFloat(textValue);
   return textNumber;
 }


// hide all the section
 function showSectionByid (id){
  
  document.getElementById('donation-page').classList.add('hidden');
  // document.getElementById('history-form').classList.add('hidden');

  // show the section
  document.getElementById(id).classList.remove('hidden');
 }