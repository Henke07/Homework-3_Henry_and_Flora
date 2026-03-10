    // 1. Score variable
    let score = 0;

    // 2. Grab references to all moles,  endret fra moles til mole
    const moles = document.getElementsByClassName("mole");

    // 3. Function to show one random mole at a time
    function showRandomMole() {
      // Hide all moles first
      for (let i = 0; i < moles.length; i++) {
        moles[i].style.display = "none";
      }

      // Show a random one.    sto feil i length
      const randomIndex = Math.floor(Math.random() * moles.length); 
      moles[randomIndex].style.display = "block";
    }

    // 4. Function to "whack" a mole
    function whackMole() {
      // Increase the score, endret skrivefeil fra scor til score
      score += 1; 
      document.getElementById("score").innerText = score;
      
      // Hide the mole you just hit
      this.style.display = "none";
    }

    // 5. Function to start the game
    function startGame() {
      // Reset score
      score = 0;
      document.getElementById("score").innerText = score;

      // Show a random mole every second
      setInterval(showRandomMole, 1000);
    }

    // 6. Attach click event to each mole, endret <= til <
    for (let i = 0; i < moles.length; i++) {
      moles[i].addEventListener("click", whackMole);
    }
