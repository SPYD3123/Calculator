let inputs = document.querySelectorAll('input');
let clickedValues = '';
let answer=[];
let screen=document.querySelector('.screen')
let copy=[]
// answer.push(clickedValues)
screen.textContent='0'
function evaluate(list){
    let list2=[]
    if (list[1]=='+') {
        list2.push((Number(list[0])+ Number(list[2])).toString())
    }
    else if (list[1]=='-') {
        list2.push((Number(list[0]) - Number(list[2])).toString())
    }
    else if (list[1]=='×') {
        list2.push((Number(list[0]) * Number(list[2])).toString())
    }
    else if (list[1]=='/') {
        list2.push((Number(list[0]) / Number(list[2])).toString())
    }
    else if (list[1]=='%' && list[2]=='') {
        list2.push((Number(list[0])/100).toString())
    }
    else if (list[1]=='%') {
        list2.push(((Number(list[0])/100) * Number(list[2])).toString())
    }
    if (list.length==3) {
        return list2;
    }
    else if(list.length==4){
        list2.push(list[3])
        return list2;
    }
    else{
        return list;
    }
}



inputs.forEach((element) => {
    element.addEventListener("click", function () {
if (element.value=='⌫') {
            if (clickedValues!='') {
                console.log(clickedValues)
                clickedValues=clickedValues.slice(0,clickedValues.length-1);
                console.log(clickedValues)
                console.log(answer)
                if (answer.join('')+clickedValues!='') {
                    screen.textContent=answer.join('')+clickedValues;
                }
                else{
                    screen.textContent='0';
                }
                
            }
            else if (clickedValues=='' && answer.length>0) {
                answer.pop();
                clickedValues=answer[answer.length-1]
                answer.pop();
                console.log(answer)
                screen.textContent=answer.join('')+clickedValues;

            }
            else if (clickedValues=='' && answer.length===0) {
                screen.textContent='0';
                // alert('must add a number before backspace')
            }
        }
        if (element.value=='AC') {
            copy=[]
            clickedValues='';
            answer=[];
            console.log(answer)
            screen.textContent='0';
        }
        
        if (clickedValues=='') {
            if (isNaN(element.value) && element.value!='.' && element.value!='AC' && element.value!='=' && element.value!='⌫') {
                // alert('must add a number before any operator')
                // screen.textContent='0'
                if (copy==[]) {
                    screen.textContent='0';
                }
            }
            else if (element.value!='AC' && element.value!='=' && element.value!='⌫') {
                copy=[]
                clickedValues+=element.value;
                console.log(clickedValues)
                screen.textContent=answer.join('')+clickedValues;
            }
        }
        else if (clickedValues!='' && !isNaN(clickedValues) ) {
            if (!isNaN(element.value)|| element.value=='.') {
                if (element.value=='.' && clickedValues.indexOf('.')>-1) {
                    // alert('cannot add another decimal')

                }
                else{
                    clickedValues+=element.value
                    console.log(clickedValues)
                    screen.textContent=answer.join('')+clickedValues;
                }
            }
            else if (element.value!='AC' && element.value!='' && element.value!='=' && element.value!="⌫" && element.value!='+/-') {
                answer.push(clickedValues)
                answer.push(element.value)
                clickedValues='';
                answer=evaluate(answer)
                console.log(answer)
                screen.textContent=answer.join('')+clickedValues;
            }
            else if (element.value=='+/-' && clickedValues!='') {
                if (clickedValues.charAt(0)=='-') {
                    clickedValues=clickedValues.slice(1)
                    screen.textContent=answer.join('')+clickedValues;
                }
                else{
                    clickedValues='-'+clickedValues;
                    console.log(clickedValues)
                    screen.textContent=answer.join('')+clickedValues;

                }
            }
        }
if (element.value=='=') {
            if (clickedValues!='' && answer.length>=2) {
                answer.push(clickedValues)
                console.log(answer)
                clickedValues='';
                // console.log(evaluate(answer))
                answer=evaluate(answer)
                console.log(answer)
                copy=[answer[0]]
                screen.textContent=answer.join('')+clickedValues;
                clickedValues=''
                answer=[]
                // screen.textContent='sd'

            }
            else if (clickedValues=='' && answer.length==0 && copy.length!=1) {
                let L1=evaluate(['0'])
                screen.textContent=L1.join('')+clickedValues;
            }
            // else{
            //     if (answer.length==0|| answer.length==1) {
            //         answer[0]=clickedValues;
            //     }
            //     answer=evaluate(answer)
            //     console.log(answer)
            //     // clickedValues=''
            //     screen.textContent=answer.join('');
            //     clickedValues=''
            //     answer=[]
            // }
            else{
                if (answer.length==2 && answer[1]=='%') {
                    answer.push(clickedValues)
                    // console.log(answer)
                    clickedValues='';
                    console.log(answer)
                    answer=evaluate(answer)
                    console.log(answer)
                    copy=[answer[0]]
                    screen.textContent=answer.join('')+clickedValues;
                    clickedValues=''
                    answer=[]
                }
                else if (answer.length==2) {
                    screen.textContent=answer[0]
                    copy=[answer[0]]
                    answer=[]
                    clickedValues=[]
                }

                else{
                    if (copy.length==0) {
                        copy[0]=clickedValues;
                    }
                    answer=evaluate(copy)
                    console.log(copy)
                    // clickedValues=''
                    screen.textContent=copy.join('');
                    clickedValues=''
                    answer=[]
                }
            }
        }
    });
});
