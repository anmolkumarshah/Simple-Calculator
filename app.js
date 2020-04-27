const ar = Array.from(document.querySelectorAll('button'));
const output = document.querySelector('#output');
const history = document.querySelector('#history-val');
//console.log(ar);

output.value = '';
history.value = '';

ar.forEach((item) => item.addEventListener('click', function(){
    if(item.classList.contains('key')){
        output.value += item.textContent;
    }
    
    else if(item.classList.contains('operator')){
        if(history.value !== ''){
            output.value = eval(history.value + output.value);
            clear(history);
            history.value = `${output.value} ${item.textContent}`;
            clear(output);
        }
        else{
            history.value =`${output.value} ${item.textContent}`;
            clear(output); 
        }
    }
    else{
        if(item.classList.contains('controlAC')){
            clear(output);
            clear(history);
        }
        else if(item.classList.contains('controlC')){
            let str = String(output.value);
            output.value = str.substr(0, str.length-1);
        }
        else{
            output.value = eval(history.value + output.value);
            clear(history);
        }
    }
}))

const clear = function(str){
    str.value = '';
}

const getFormatted = function(num){
    return num.toLocaleString('en-IN');
}


