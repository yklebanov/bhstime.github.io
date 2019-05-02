var today = new Date();

var mon = new Map([["A", 30000000]]);

for(let [block, time] of mon){
  console.log(block + " " + time);
  if (d < time){
    document.write(block + " block starts in " + Math.round((time-d)/60) + ".");
    break;
  }
}
