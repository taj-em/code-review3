# _Code Review Three_

#### By _**Taj Empey**_

#### _Takes a name and number; returns a response depending on the name and number_

## Technologies Used

- _JavaScript_
- _CSS_
- _HTML_
- _Live Server_

## Description

_After entering your name and a number and pressing Enter, will display the most recent five numbers in descending order while replacing any letter containing 1, 2 or 3 with a predetermined sentence/word_

## Setup/Installation Requirements

- _Clone repo from GitHub_
- _Open index.html in a browser_
- _Enter a name/number and press Enter_

## Known Bugs

- _N/A_


## _Tests_

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

Describe: vowelCounter();

Test: "Display the number of vowels created"
Code: createList(1);
Expected Result: Total Vowels: 2



## License

Copyright (c) _10/27/23_ _Taj Empey_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.