//lets practice how to make fake requets using call backs in javascript.
// now we are practing the fake requets by using two methods 


// the call backs 
 const fakeRequests = (url, success, failure) => {
            const delay = Math.floor(Math.random()*4500)+500;
            setTimeout(() => {
                 if(delay > 4000){
                    failure(`Connection Timeout :(`);
                 } else{
                    success(`Here is your data requets ${url}`);
                    
                 }
            },delay)

        }

        fakeRequests("books.com",
        function(success){
            console.log("IT WORKED");
            console.log(success)
        }, function(failure){
            console.log("Opps Error")
            console.log(failure)
        }
        
        )

// with multiple rquests.
   fakeRequests("books.com",
        function(success){
            console.log("IT WORKED");
            console.log(success)
            fakeRequests('books.com/page2',
            function(success){
                console.log("IT WORKED AGAIN");
                  console.log(success)
            },
            function(failure){
                console.log("ERROR!!!", failure)
            }
            )
        }, function(failure){
            console.log("Opps Error")
            console.log(failure)
        }
        
        )

// the promises.
