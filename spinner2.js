//process.stdout.write('hello from spinner1.js... \rmeu\ny');
const w = (limit) => {   
  let i = 100; 
  let p = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  let s = 0;
  while (i <= limit){
      
    let b = ''
      if (s % 4 === 0) {
        b = p[0];
      } else if ((s - 1) % 4 === 0) {
        b = p[1];
      } else if ((s - 2) % 4 === 0) {
        b = p[2];
      } else if ((s - 3) % 4 === 0) {
        b = p[3];
      }
      setTimeout(() => {
        process.stdout.write(b);
      }, i);

      i += 200;
      s += 1;
  
    }   
 }

 const timeToLoad = 50000;
 w(timeToLoad);