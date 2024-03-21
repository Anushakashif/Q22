"use strict";
// 22. International Error: If you haven't recieved an array index error in one of your programs yet, try to make 
// one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error 
// before closing the progrsm.
Object.defineProperty(exports, "__esModule", { value: true });
const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"];
console.log(months[12]);
console.log(months[11]);
