let count=0;

for(let spin of ['\r|   ','\r/   ','\r-   ','\r\\   ']){setTimeout(() => {
  process.stdout.write(spin);
  
}, 100+300*count);
count++;
}
