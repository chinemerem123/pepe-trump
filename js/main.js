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