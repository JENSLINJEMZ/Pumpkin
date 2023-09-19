var typed = new Typed(".text", {
    strings: ["Ethical Hacker" , "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

/* This is animation for HTML */

let number = document.getElementById("number");
        let counter = 0;
        setInterval(() => {
            if(counter == 98){
                clearInterval();
                }
                else{
                    counter +=1;
                    number.innerHTML = counter + "%"
            }
        }, 22);

/* This is animation for CSS */


let number1 = document.getElementById("number1");
let counter1 = 0;
setInterval(() => {
    if(counter1 == 85){
        clearInterval();
        }
        else{
            counter1 +=1;
            number1.innerHTML = counter1 + "%"
    }
},23);


/* This is animation for Javascript */


let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
    if(counter2 == 50){
        clearInterval();
        }
        else{
            counter2 +=1;
            number2.innerHTML = counter2 + "%"
    }
}, 35);




/* This is animation for Node JS */



let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
    if(counter3 == 35){
        clearInterval();
        }
        else{
            counter3 +=1;
            number3.innerHTML = counter3 + "%"
    }
}, 55);



/* This is animation for Python */


let number4 = document.getElementById("number4");
let counter4 = 0;
setInterval(() => {
    if(counter4 == 73){
        clearInterval();
        }
        else{
            counter4 +=1;
            number4.innerHTML = counter4 + "%"
    }
}, 23);



/* This is animation for Bash */




let number5 = document.getElementById("number5");
let counter5 = 0;
setInterval(() => {
    if(counter5 == 80){
        clearInterval();
        }
        else{
            counter5 +=1;
            number5.innerHTML = counter5 + "%"
    }
}, 23);