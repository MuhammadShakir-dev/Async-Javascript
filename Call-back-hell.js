// normal way to do this  
   const h1 = document.querySelector('h1');
    h1.style.fontSize = "50px";
    h1.style.textAlign = "center";
    h1.style.color = "white";
    h1.style.margin = "auto, auto"
    setTimeout(() => {
      document.body.style.backgroundColor = "red";
    }, 1000);

    setTimeout(() => {
      document.body.style.backgroundColor = "green";
    }, 2000);

    setTimeout(() => {
      document.body.style.backgroundColor = "purple";
    }, 3000);

// now try nested callbacks.


