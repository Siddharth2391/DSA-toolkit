function pre(c){
    if(c=='^'){
        return 3;
    }
    if(c=='*' || c=='/'){
        return 2;
    }
    if(c=='+' || c=='-'){
        return 1;
    }
    return 0;
}
function charIsLetter(char) {
    if (typeof char !== 'string') {
      return false;
    }
    return /^[a-zA-Z]+$/.test(char);
  }

function inToPost(){
    try{
    var stack=[];
    var post="";
    var str=document.getElementById('con_exp').value;
    for(let i=-0;i<str.length;i++){
            var c=str.charAt(i);
            if(charIsLetter(c)){
                post+=c;
            }else if(c==')' && stack.length==0){
                document.getElementById('post').value="Invalid";
                document.getElementById('pre').value="Invalid";
                break;
            }else{
                if(c=='('){
                    stack.push(c);
                }else if(c==')'){
                    var p=stack[stack.length-1];
                     while(p!='('){
                         post+=stack.pop();
                     }   
                     stack.pop();
                }else if(c=='+' || c=='/' || c=='*' || c=='-'){
                    if(stack.length==0){
                        stack.push(c); 
                    }else{
                        var p=stack[stack.length-1];
                        if(pre(p)<pre(c)){
                            stack.push(c);
                        }else if(pre(p)>=pre(c)){
                                post+=stack.pop();
                                stack.push(c);
                        }
                    }
                    
                }
            }
        }

        while(!stack.length==0){
            post+=stack.pop();
        }
        document.getElementById('post').value=post;
    }catch(err){
        console.log(err);
    }
    
}

function inToPre(){
    try{
    var str=document.getElementById('con_exp').value;
    var stack=[];
    var post="";
    var rev="";
    for (let i = str.length-1; i >= 0; i--) {
        var ch=str.charAt(i);
        if(ch=='('){
            rev+=')';
        }else if(ch==')'){
            rev+='(';
        }else{
            rev+=str.charAt(i);
        }
    }
    console.log(rev);

    for(let i=-0;i<rev.length;i++){
            var c=rev.charAt(i);
            if(charIsLetter(c)){
                post+=c;
            }else if(c==')' && stack.length==0){
                /* document.getElementById('post').value="Invalid"; */
                document.getElementById('pre').value="Invalid";
                break;
            }else{
                if(c=='('){
                    stack.push(c);
                }else if(c==')'){
                    var p=stack[stack.length-1];
                     while(p!='('){
                         post+=stack.pop();
                     }   
                     stack.pop();
                }else if(c=='+' || c=='/' || c=='*' || c=='-'){
                    if(stack.length==0){
                        stack.push(c); 
                    }else{
                        var p=stack[stack.length-1];
                        if(pre(p)<pre(c)){
                            stack.push(c);
                        }else if(pre(p)>=pre(c)){
                                post+=stack.pop();
                                stack.push(c);
                        }
                    }
                    
                }
            }
        }

        while(!stack.length==0){
            post+=stack.pop();
        }
        document.getElementById('pre').value=post;
    }catch(err){
        console.log(err);
    }
}

//Validating expression
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
}

//Resetting elements
function reset() {
    location.reload();
}