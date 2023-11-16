let inputs = document.querySelectorAll('input');
let clickedValues = '';
let answer=[];
inputs.forEach((element) => {
    element.addEventListener("click", function () {
        if (element.value=='AC') {
            clickedValues='';
            answer=[];
            console.log(answer)
        }
        
        if (clickedValues=='') {
            if (isNaN(element.value) && element.value!='.' && element.value!='AC') {
                alert('must add a number before any operator')
            }
            else if (element.value!='AC') {
                clickedValues+=element.value;
                console.log(clickedValues)
            }
        }
        else if (clickedValues!='' && !isNaN(clickedValues) ) {
            if (!isNaN(element.value)|| element.value=='.') {
                if (element.value=='.' && clickedValues.indexOf('.')>-1) {
                    alert('cannot add another decimal')
                }
                else{
                    clickedValues+=element.value
                    console.log(clickedValues)
                }
            }
            else if (element.value!='AC' && element.value!='' && element.value!='=' && element.value!="⌫" ) {
                answer.push(clickedValues)
                answer.push(element.value)
                clickedValues='';
                console.log(answer)
            }
        }
    });
});
