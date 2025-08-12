🪄 Tokenizer Encoder / Decoder
A simple yet powerful character-based tokenizer built with HTML, JavaScript, and Tailwind CSS.
It can encode text into unique token codes and decode token sequences back into text.

Perfect for learning about tokenization, encoding/decoding logic, or just having fun with text transformations.
-----------------------------------------------------------------------------------------------------------

📸 Demo
<img width="1523" height="912" alt="image" src="https://github.com/user-attachments/assets/3b6c36e2-97c6-49f7-8f3b-e61ff1a05514" />

Encoded- 
<img width="1112" height="711" alt="image" src="https://github.com/user-attachments/assets/7e1b866a-b99a-4832-904b-9c79437fb2ce" />

Decoded - 

<img width="1088" height="691" alt="image" src="https://github.com/user-attachments/assets/ec83a0ea-bc7b-42f7-ac53-88c6f3096007" />
--------------------------------------------------------------------------------------------------------------------

✨ Features
Encode text → tokens
Converts each character into a unique numeric code.

Decode tokens → text
Rebuilds the original string from the token codes.

Special character support
Works with numbers, letters (A–Z, a–z), spaces, punctuation, and symbols.

Fast and lightweight
No backend required , runs completely in the browser.

Clean UI with Tailwind CSS.
---------------------------------------------------------------------------------------------------------------------
🛠️ How It Works
Tokenizer Class
Maps characters to token IDs (charToToken) and tokens back to characters (tokenToChar).

Supports:
Numbers (0–9)
Lowercase & uppercase letters (a–z, A–Z)
Common punctuation and special symbols.

Encoding
Loops through each character in the input text.
Looks up its token ID from charToToken.
Unknown characters get token 0.

Decoding
Splits the token string by spaces.
Converts IDs back into characters using tokenToChar.
Unknown tokens (0) become a ? in the output.
--------------------------------------------------------------------------------------------------------------------
🚀 Getting Started

1️⃣ Clone the Repository

git clone https://github.com/your-username/tokenizer.git
cd tokenizer

2️⃣ Open in Browser
Just open index.html in your favorite browser , no installation needed.

📂 Project Structure
.
├── index.html          # Main UI
├── documentation.html  # Extra documentation page
├── script.js           # Tokenizer logic
-------------------------------------------------------------------------------------------------------------------
💻 Usage
Encoding

Type your text in the Tokenizer textarea.
Click Encode.
Token codes will appear in the right-hand result box.

Decoding
Paste a token sequence into the Detokenizer textarea (e.g., 27 28 29).
Click Decode.
The decoded text will be shown in the result box.

📜 Example
Input Text:
Hello!
Encoded:
38 15 22 22 25 13

Decoded Back:
Hello!
------------------------------------------------------------------------------------------------------------------------
📌 Notes
Token IDs are static the same character always maps to the same number.
Unknown characters are replaced with ? during decoding.


🧑‍💻 Author
-Abhishek Kumar
Abhishek Kumar
