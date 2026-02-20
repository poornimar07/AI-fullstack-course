

    // Step 1: Get all the elements from HTML using querySelector
    const inputText = document.querySelector(".name");      // Get the input box
    const warnText = document.querySelector(".warning");    // Get the warning message
    const buttonSubmit = document.querySelector(".submit"); // Get the submit button
    
    // Step 2: When page loads, call the load() function
    window.addEventListener("load", load);
    
    // Step 3: Define the load function
    function load() {
        // Add event listener to input box - whenever user types (keyup event), call inputValue function
        inputText.addEventListener("keyup", inputValue);
    }
    
    // Step 4: Define the inputValue function - this runs every time user types
    function inputValue(e) {
        // Prevent any default browser behavior
        e.preventDefault();
        
        // Get the length of what user typed
        const length = e.target.value.length;
        
        // Debug: Print the length to console to see what's happening
        console.log(length);
        
        // Step 5: Check if length is less than 6 characters
        if(length < 6) {
            // If less than 6:
            warnText.style.display = "block";      // Show the warning message
            buttonSubmit.style.display = "none";   // Hide the submit button
        } else {
            // If 6 or more characters:
            buttonSubmit.style.display = "block";  // Show the submit button
            warnText.style.display = "none";       // Hide the warning message
        }
    }













