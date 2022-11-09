class Stack {
    constructor() {
        this.items = [];
    }
    
    add(element) {
        return this.items.push(element);
    }
    
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty(){
       return this.items.length == 0;
    }
   
    size(){
        return this.items.length;
    }
 
    clear(){
        this.items = [];
    }
}


function reset() {
    location.reload();
}

function inToPost(){

}

function inToPre(){

}

function validate(){
    var x=document.getElementById('exp').value; 
    let Stack=new Stack();
    for (let index = 0; index < x.length; index++) {
        s.add()
    }
    
}