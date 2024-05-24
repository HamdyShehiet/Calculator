let display=document.getElementById('display');


function appendInField(btnValue){
display.value +=btnValue
}

function clearValue(){
    display.value='';
}

function calc(){
    try{
    display.value =eval(display.value)
    }catch(error){
        display.value="Error"
    }
}

