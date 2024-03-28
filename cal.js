document.addEventListener('DOMContentLoaded',function(){
    let historyDiv=document.querySelector('.history');
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let history="";
    buttons.forEach(function(button){
        button.addEventListener('click',function(){
            handelButtonClick(button.innerText);
        });
    });
    function handelButtonClick(value){
        if(value === 'C'){
            clearAll();
        }else if(value === 'DEL'){
            deleteLastChar();
        }else if(value === '='){
            evaluateExpression();
        }else{
            appendToScreen(value);
        }
    }

    function clearAll(){
        screen.textContent="";
        history="";
        updateHistory();
    }

    function deleteLastChar(){
        let currentText=screen.textContent;
        screen.textContent=currentText.slice(0,-1);
    }

    function appendToScreen(value){
        screen.textContent+=value;
    }
    function evaluateExpression(){
        try{
        let expression=screen.textContent;
        let result=eval(expression);

        result=parseFloat(result.toFixed(5));

        history=expression;
        screen.textContent=result;
        updateHistory();
        }
        catch(error){
            screen.textContent='Error';
        }
    }
    function updateHistory(){
        historyDiv.textContent=history;
    }
});