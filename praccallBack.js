  const h1 = document.querySelector("h1");
     h1.style.textAlign = "center";
     h1.style.color = "white";

      const colordelay = (color, delay, donext) => {
        setTimeout(() => {
          document.body.style.backgroundColor = color;
          donext();
        }, delay);
      };
      
      colordelay("red", 2000, () => {
        h1.innerText = "Hello I'm Red";
        colordelay("orange", 2000, () => {
            h1.innerText = "Hello I'm orange";
          colordelay("pink", 2000, () => {
            h1.innerText = "Hello I'm pink";
            colordelay("purple", 2000, () => {
                h1.innerText = "Hello I'm purple";
              colordelay("indigo", 2000, () => {
                h1.innerText = "Hello I'm indigo";
              });
            });
          });
        });
      });
