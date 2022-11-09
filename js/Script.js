function reset() {
    location.reload();
}

function inToPost(){

}

function inToPre(){

}

function validate(){
    var x=document.getElementById('exp').value; 
    let stack=[];
    var flag=0;
    for (let index = 0; index < x.length; index++) {
       var c=x.charAt(index);
       console.log(c);
       console.log(stack);
       if((stack.length==0) && (c==')' || c=='}' || c==']')){
            flag=1;
            break;
       }else if(c=='(' || c=='{' || c=='['){
                stack.push(c);
            }else if(c==')' || c=='}' || c==']'){
                var p=stack[stack.length-1];
                if((c==')' && p=='(')){
                    stack.pop();
                }else if((c==']' && p=='[')){
                    stack.pop();
                }else if((c=='}' && p=='{')){
                    stack.pop();
                }
        }  
    }
     if(flag==1 || stack.length!=0){
        document.getElementById('validate').innerHTML=`
            <div class="alert alert-danger class="mb-3"" role="alert">
                Invalid Parenthesis
            </div>`
    }else if(flag==0){
        document.getElementById('validate').innerHTML=`
            <div class="alert alert-success class="mb-3"" role="alert">
                Valid Parenthesis
            </div>`
    }
    console.log(stack);
}