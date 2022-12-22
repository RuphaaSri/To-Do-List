const TodoText = document.getElementById('TodoId');
const TodoUl = document.getElementById('ulId');

function addTask(){
    if(TodoText.value.trim() === ''){
        alert('enter the value');
    }
    else{
        console.log(TodoText.value.trim());
        const liTag = document.createElement('li');

        const spanText = document.createElement('span');
        const textNode = document.createTextNode(TodoText.value.trim())
        spanText.appendChild(textNode);             // putting span tag inside text node
        
        spanText.addEventListener('click',(e)=>{
            //console.log(e.target);
            e.target.classList.toggle('done');
        });
        
        const spanClose = document.createElement('span');
        spanClose.classList.add('close');
        spanClose.innerHTML='&timesb;';

        spanClose.addEventListener('click' ,(e)=>{
            console.log(e.target.parentElement);
            const li = e.target.parentElement;
            li.parentElement.removeChild(li);
        });

        liTag.appendChild(spanText);
        liTag.appendChild(spanClose);

        TodoUl.appendChild(liTag);

        TodoText.value='';
    }
    //console.log(TodoText.value);  //.value -> upates the values that are entered in the input field

}