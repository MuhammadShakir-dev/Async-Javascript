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
  <script>
    const h1 = document.querySelector("h1");
    h1.style.fontSize = "50px";
    h1.style.textAlign = "center";
    h1.style.color = "white";
    h1.style.margin = "auto, auto";
    setTimeout(() => {
      document.body.style.backgroundColor = "red";
      h1.innerText = "Hello I'm red";
      setTimeout(() => {
        document.body.style.backgroundColor = "green";
        h1.innerText = "Hello I'm green";
        setTimeout(() => {
          document.body.style.backgroundColor = "purple";
          h1.innerText = "Hello I'm purple";
          setTimeout(() => {
            document.body.style.backgroundColor = "orange";
            h1.innerText = "Hello I'm orange";
            setTimeout(() => {
              document.body.style.backgroundColor = "white";
              h1.style.color = "black";
              h1.innerText = "👿 I'm Call back Hell...";
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);

// lets tru this by making a function and then call it.

 const h1 = document.querySelector("h1");
    h1.style.fontSize = "50px";
    h1.style.textAlign = "center";
    h1.style.color = "white";
    h1.style.margin = "auto, auto";
    const delayColor = (newColor, delay, doNext) => {
      setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
      }, delay);
    };

    delayColor('red',1000, () => {
        h1.innerText = "Hello I'm red";
        delayColor('green',1000, () => {
            h1.innerText = "Hello I'm green";
            delayColor('purple',1000, () => {
                h1.innerText = "Hello I'm purple";
                 delayColor('orange',1000, () =>{
                    h1.innerText = "Hello I'm ornage";
                    delayColor('indigo',1000, () => {
                        h1.innerText = "Hello I'm Indigo"
                        delayColor("White",1000, () => {
                            h1.style.color = "black";
                            h1.innerText = "👿 I'm Call back Hell..."
                        })
                    })
                 })
            })
        })
    })

