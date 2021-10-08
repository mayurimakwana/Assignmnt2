const os = require("os");

console.log("\n Operating System Architecture :- " + os.arch());

console.log("\n Free Memory Of The Operating System :- " + 
os.freemem()/(1024*1024*1024));

console.log("\n Total Memory Of The Operating system :- " + os.totalmem()/(1024*1024*1024));

console.log("\n Operating System Platform :-" + os.platform());

console.log("\n Display Information About The Current Looged User :-");

console.log(os.userInfo());