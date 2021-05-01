console.log("Welcome to the console of Calculator!");
let a = 0;
let b = 0;
let result = 0;
let input = 1;
let oper = '';
let r = false;
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");
let add = document.getElementById("+");
let minus = document.getElementById("-");
let multiply = document.getElementById("*");
let divide = document.getElementById("/");
let equal = document.getElementById("=");
let ce = document.getElementById("CE");
let back = document.getElementById("Back");
let on = document.getElementById("ON");
let off = document.getElementById("OFF");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");

//Setting the Operands-->

one.addEventListener('click',function(){
    setValue(one);
    displayNum(one);
});
two.addEventListener('click',function(){
    setValue(two);
    displayNum(two);
});
three.addEventListener('click',function(){
    setValue(three);
    displayNum(three);
});
four.addEventListener('click',function(){
    setValue(four);
    displayNum(four);
});
five.addEventListener('click',function(){
    setValue(five);
    displayNum(five);
});
six.addEventListener('click',function(){
    setValue(six);
    displayNum(six);
});
seven.addEventListener('click',function(){
    setValue(seven);
    displayNum(seven);
});
eight.addEventListener('click',function(){
    setValue(eight);
    displayNum(eight);
});
nine.addEventListener('click',function(){
    setValue(nine);
    displayNum(nine);
});
zero.addEventListener('click',function(){
    setValue(zero);
    displayNum(zero);
});

// Setting the Operator-->

add.addEventListener('click',function(){
    setOperator(add);
    displayNum(add);
});
minus.addEventListener('click',function(){
    setOperator(minus);
    displayNum(minus);
});
multiply.addEventListener('click',function(){
    setOperator(multiply);
    displayNum(multiply);
});
divide.addEventListener('click',function(){
    setOperator(divide);
    displayNum(divide);
});

// Displaying the Result-->

equal.addEventListener('click',function(){
    switch(oper){
        case '+':
            result = a+b;
            break;
        case '-':
            result = a-b;
            break;
        case '*':
            result = a*b;
            break;
        case '/':
            result = a/b;
            break;
    }
    line2.innerText = result;
    a = result;
    b = 0;
    input=1;
})

// CE, BACK, ON, OFF-->

ce.addEventListener('click',function(){
    line1.innerText ="";
    line2.innerText ="";
    a = 0;
    b = 0;
    result = 0;
    input = 1;
})

back.addEventListener('click',function(){
    if(input == 1){
        a = (a - (a%10))/10;
        line1.innerText = a;
    }
    else if(input == 2){
        oper="";
        line1.innerText = a + oper;
    }
    else if(input == 3){
        b = (b - (b%10))/10;
        line1.innerText = a + oper + b;
    }
})

on.addEventListener('click',function(){
    line1.innerText = "0";
    line2.innerText = "";
})

off.addEventListener('click',function(){
    line1.innerText = "";
    line2.innerText = "";
    a = 0;
    b = 0;
    oper="";
})

// Declaring the Functions-->

function setValue(obj){
    if(input == 2 || input == 3){
        b = (b*10) + Number(obj.id);
        console.log("b is set as: ",b);
        input = 3;
    }
    else if(input==1){
        a = (a*10) + Number(obj.id);
        console.log("a is set as: ",a);
    }
}
function setOperator(obj){
    oper = obj.id;
    input++;
}
function displayNum(obj){
    if(line1.innerText == "0"){
        line1.innerText="";
    }
    line1.innerText = line1.innerText + obj.id;
}