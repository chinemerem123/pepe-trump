const text =
            ` "Pepe Trump" merges Donald Trump with the internet meme Pepe the Frog, symbolizing quickly online support during the 2016 election.`;

        let index = 0;
        let autoWrite=document.getElementById("auto-write");

        function writeText() {
            autoWrite.innerText = text.slice(0, index);
            index++;
            if (index > text.lenght) {
                index = 0;
            }
        }
        setInterval(writeText, 50);



        function myFunction() {
            // Get the text field
            var copyText = document.getElementById("myInput");
          
            // Select the text field
            copyText.select();
            copyText.setSelectionRange(0, 99999); // For mobile devices
          
            // Copy the text inside the text field
            navigator.clipboard.writeText(copyText.value);
          }