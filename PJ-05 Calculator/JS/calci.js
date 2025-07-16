let inputres= document.getElementById("input");
let btn = document.getElementById("btnsbox");
inputres.focus();


btn.addEventListener('click',(eve)=>{
 if (!eve.target.classList.contains('button')) return;
   let  target= eve.target.innerText;
    switch (target){
        case 'AC': clearOutput();
        break;
        case 'C': removeWord();
        break;
        case"?": alert("Calculator Help:\n- Use numbers and operators to build your expression.\n- 'AC' clears everything.\n- 'C' deletes the last character.\n- '=' evaluates the expression");
       break;
      case'=' : results();
        break;
        default : inputres.value+=target;
        
 }
});   

inputres.focus();

function clearOutput(){
inputres.value="";
}

function removeWord(){ 
inputres.value= inputres.value.slice(0,-1);
}

function results() {
  try {
    inputres.value = eval(inputres.value);
  } catch (err) {
    inputres.value = "Invalid";
  }
}

