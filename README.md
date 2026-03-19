# Secure Password Generator

A simple and secure password generator built using HTML, CSS, and JavaScript.

## 🚀 Features

* Generate random passwords
* Customize:

  * Length
  * Uppercase letters
  * Lowercase letters
  * Numbers
  * Symbols
* Copy password to clipboard
* Clean and minimal UI
* Fully client-side (no backend)

## 📁 Project Structure

```id="c5x0s3"
secure-password-generator/
│
├── index.html    # Structure
├── styles.css    # Styling
└── script.js     # Logic
```

## 🛠️ How to Use

1. Open `index.html` in a browser
2. Select desired password length
3. Choose character options
4. Click "Generate Password"
5. Click "Copy to Clipboard" to copy it

## 🔐 Security Notes

* Passwords are generated locally (no data sent anywhere)
* Uses safe DOM handling
* Clipboard API used securely

## ⚠️ Limitations

* Does not guarantee cryptographic randomness (uses Math.random)
* No password strength meter

## 💡 Future Improvements

* Use crypto-secure randomness (crypto.getRandomValues)
* Add password strength indicator
* Dark mode UI
* Save password history (securely)

## 📜 License

Free for learning and personal use.
