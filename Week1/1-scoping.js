
for (let i=0; i < 3; i++) {  //i=0, 1=1, i=2, i=3
    setTimeout(()=>console.log(i),1000);   //i=0,    
}

/* Notes


Explanation:
1. for (var i = 0; i < 3; i++)
The loop runs 3 times: i = 0, 1, 2. After the loop, i = 3.

After the third run, i becomes 3 and the loop ends.

2. setTimeout(() => console.log(i), 1000);
Each loop iteration schedules console.log(i) to run after 1 second.

JavaScript doesn't wait—it finishes the loop first, so all timeouts run after i becomes 3.

Since var is function-scoped, all callbacks share the same i, which is now 3.*


Explanation for let 


Key difference: let is block-scoped
Each loop iteration creates a fresh copy of i — this is super important!

So each i inside the setTimeout() is its own separate value, not shared.

“Wait 1 second, then print the value of i from this specific loop run.”

Since each loop run has its own i, each scheduled console.log(i) remembers the correct number.*/