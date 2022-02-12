Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number."
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

---

Test: "It will recognize any number that contains a 3 and change the entire digit to the string 'Won't you be my neighbor?.'"
Code: beepBoop(5);
Expected Output: [0, 1, 2, "Won't you be my neighbor?", 4, 5]

---

Test: "It will recognize any number that contains a 2 and change the entire digit to the string to 'Boop!' unless it contains a 3."
Code: beepBoop(23);
Expected Output: [0, 1, "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, "Boop!", "Won't you be my neighbor?", 14, 15, 16, 17, 18, 19, "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"]

---

Test: "It will any number that contains a 1 and change the entire digit to the string 'Beep!' unless it contains a 2 or a 3."
Code: beepBoop(13);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]

---

Test: "It will recognize an input that isn't a number and return a message to the user to enter a number."
Code: beepBoop("Number");
Expected Output: "Please enter a number"

---

