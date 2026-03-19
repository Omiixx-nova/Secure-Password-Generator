// Get DOM elements
const lengthInput = document.getElementById("length");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const passwordOutput = document.getElementById("passwordOutput");
const copyBtn = document.getElementById("copyBtn");

/**
 * Character sets
 */
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

/**
 * Generate random password based on selected options
 */
function generatePassword() {
    let length = parseInt(lengthInput.value);
    let characters = "";

    // Build character pool based on user selection
    if (uppercaseCheck.checked) characters += upperChars;
    if (lowercaseCheck.checked) characters += lowerChars;
    if (numbersCheck.checked) characters += numberChars;
    if (symbolsCheck.checked) characters += symbolChars;

    // Validation: ensure at least one option is selected
    if (characters.length === 0) {
        passwordOutput.value = "Select at least one option!";
        return;
    }

    let password = "";

    // Generate random password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    // Display password safely (value is safe for input fields)
    passwordOutput.value = password;
}

/**
 * Copy password to clipboard
 */
function copyToClipboard() {
    const password = passwordOutput.value;

    if (!password) return;

    navigator.clipboard.writeText(password)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch(() => {
            alert("Failed to copy password.");
        });
}

// Event listeners
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);