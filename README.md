Describe: calc();

Test: "It will list the numbers up to and including any given input"
Code: calc(5);
Expected Result: [0, 1, 2, 3, 4, 5]

Test: "Log a unique string when 1, 2, or 3 get logged"
Code: calc(5);
Expected Result: [0, "hello one", "hello two", "hello three", 4, 5]

Test: "Log "hello two" instead of "hello one" when the input is 12"
Code: calc(12);
Expected Result: [... "hello one"(11), "hellow two"(12)];

Test: "Take any number and display the correct responses in an unordered list"
Code: calc(any number);
Expected Result: [12 = "boop", 13 = "would you be my neighbor"... etc]

Describe: createList();

Test: "Display 6 of the accumulated responses at a time"
Code: createList(50);
Expected Result: [45, 46, 47, 48, 49, 50]