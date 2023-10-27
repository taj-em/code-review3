Describe: processNum();

Test: "It will list the numbers up to and including any given input"
Code: processNum(5);
Expected Result: [0, 1, 2, 3, 4, 5]

Test: "Log a unique string when 1, 2, or 3 get logged"
Code: processNum(5);
Expected Result: [0, "hello one", "hello two", "hello three", 4, 5]

Test: "Log "hello two" instead of "hello one" when the input is 12"
Code: processNum(12);
Expected Result: [... "hello one"(11), "hellow two"(12)];