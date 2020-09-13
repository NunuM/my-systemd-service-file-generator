### My Systemd Generator

Tool that assist you when you are creating new service files for linux systemd

[Tool Available Here](https://mysystemd.talos.sh)


##### TODO

* Give a description of the option when input is on focus


#### Docs scrapping

````js

// Go to https://www.freedesktop.org/software/systemd/man/systemd.service.html
// open console

let terms = [];
let docs = {};
let last = null;

for(let el of document.getElementsByClassName("term")) {
    terms.push(el.innerText)
}

terms = terms.map(t => t.split(",").shift().trim());

for(let term of terms) {
  
  let el = document.getElementById(term);
  
  if(el) { docs[term] = el.nextSibling.innerHTML; last=el } else { docs[term] = last.nextSibling.innerHTML; }
}


````