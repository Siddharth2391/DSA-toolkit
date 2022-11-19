//Basic Utilites
function prec(c) {
    if(c == '^')
        return 3;
    else if(c == '/' || c=='*')
        return 2;
    else if(c == '+' || c == '-')
        return 1;
    else
        return -1;
}

function isOperator(c){
    return (!(c >= 'a' && c <= 'z') &&
            !(c >= '0' && c <= '9') &&
            !(c >= 'A' && c <= 'Z'));
}

//------------------------------------------------------------------------------------------------------------------------------------

//Infix to Postfix
function inToPost() {
    var s=document.getElementById('con_exp').value;
    let st = []; 
    let result = "";

    for(let i = 0; i < s.length; i++) {
        let c = s[i];

        if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
            result += c;
        else if(c == '(')
            st.push('(');
        else if(c == ')') {
            while(st[st.length - 1] != '(')
            {
                result += st[st.length - 1];
                st.pop();
            }
            st.pop();
        }
        else {
            while(st.length != 0 && prec(s[i]) <= prec(st[st.length - 1])) {
                result += st[st.length - 1];
                st.pop(); 
            }
            st.push(c);
        }
    }
    while(st.length != 0) {
        result += st[st.length - 1];
        st.pop();
    }
    document.getElementById('post').value=result;
}
//Infix to Prefix
function inToPre()
{
    var infix=document.getElementById('con_exp').value;
    let operators = [];
    let operands = [];
  
    for (let i = 0; i < infix.length; i++)
    {
        if (infix[i] == '(')
        {
            operators.push(infix[i]);
        }
        else if (infix[i] == ')')
        {
            while (operators.length!=0 &&
                operators[operators.length-1] != '(')
                {
                let op1 = operands.pop();
                let op2 = operands.pop();
                let op = operators.pop();
                let tmp = op + op2 + op1;
                operands.push(tmp);
            }
            operators.pop();
        }
        else if (!isOperator(infix[i]))
        {
            operands.push(infix[i] + "");
        }
        else
        {
            while (operators.length &&
               prec(infix[i]) <=
                   prec(operators[operators.length-1]))
                {
  
                let op1 = operands.pop();
                 
  
                let op2 = operands.pop();
                 
  
                let op = operators.pop();
                 
  
                let tmp = op + op2 + op1;
                operands.push(tmp);
            }
  
            operators.push(infix[i]);
        }
    }
  
    while (operators.length!=0)
    {
        let op1 = operands.pop();
        let op2 = operands.pop();
        let op = operators.pop();
        let tmp = op + op2 + op1;
        operands.push(tmp);
    }
    document.getElementById('pre').value=operands[operands.length-1];
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

function isdigit(c){
    return c >= '0' && c <= '999';
}

function evalue(){
        var exp=document.getElementById('expvalue').value; 
            let stack = [];

        for (let i = 0; i <exp.length; i++)
        {
            let c = exp[i];
 
            if (c == ' ')
            {
                continue;
            }
            else if (c >= '0' && c <= '9')
            {
                let n = 0;

                while (c >= '0' && c <= '9')
                {
                    n = n * 10 + (c - '0');
                    i++;
                    c = exp[i];
                }
                i--;
                stack.push(n);
            }
            else
            {
                let val1 = stack.pop();
                let val2 = stack.pop();
 
                switch (c)
                {
                    case '+':
                    stack.push(val2 + val1);
                    break;
 
                    case '-':
                    stack.push(val2 - val1);
                    break;
 
                    case '/':
                    stack.push(parseInt(val2 / val1, 10));
                    break;
 
                    case '*':
                    stack.push(val2 * val1);
                    break;
                }
            }
        document.getElementById('eval').value=stack.pop();
        }
}


//Resetting elements
function reset() {
    location.reload();
}

