const sentence = "hello there from lighthouse labs ;)\n"

let i = 0;
 for (let char of sentence) {
    setTimeout (() => {
      process.stdout.write(char)
  }, i)
   i += 50;
 };





