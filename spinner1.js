//process.stdout.write('hello from spinner1.js... \rmeu\ny');
 const w = (limit) => {   
  let i = 100; 
  while (i <= limit){

      setTimeout(() => {
        process.stdout.write('\r|   ');
      }, i);

      i += 200;
    
      setTimeout(() => {
        process.stdout.write('\r/   ');
      }, i);
      i += 200;

      setTimeout(() => {
        process.stdout.write('\r-   ');
      }, i);
    
      i += 200;
    
      setTimeout(() => {
        // Need to escape the backslash since it's a special character.
        process.stdout.write('\r\\   '); 
      }, i);

      i += 200;
    }   
 }

 const timeToLoad = 50000;
 w(timeToLoad);

