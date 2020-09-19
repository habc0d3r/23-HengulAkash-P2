let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = '';
for (item of buttons){
    item.addEventListener('click', function(e){
        buttonText = e.target.innerText;
        // prompt("Button text is ", buttonText);
        if(buttonText=='x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '÷'){
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue
        }
        else if(buttonText =='C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText =='='){
            screen.value = eval(screenValue);
        }
        else if(buttonText =='<'){
           screen.value = screen.value.toString().slice(0, -1);
           screenValue = screen.value
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}