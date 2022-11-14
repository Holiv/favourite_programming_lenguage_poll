
## Favourite Programming Lenguage Poll
[Test the application here](https://holiv.github.io/favourite_programming_lenguage_poll/)

### Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:

   1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
    
       <p>What is your favourite programming language?<br>0: JavaScript<br>1: Python<br>2: Rust<br>3: C++<br>(Write option number)</p>
    
  2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

### Call this method whenever the user clicks the "Answer poll" button.

### Create a method 'displayResults' which displays the poll results. 
1. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 

### Run the 'displayResults' method at the end of each 'registerNewAnswer' method call and create a function that manipulate the DOM to show the result on the screen

### Some topics covered in the program


1. `String manipulation`
2. `Array manipulation`
3. `.fill() method`
4. `.joins() method`
5. `this. keyword`
6. `.bind() method`
7. `short circuiting`
8. `DOM manipulation`

#### This repository is in my #100-Days-Of-Code Challenge log
[100-Days-Of-Code log](https://github.com/Holiv/100DaysOfCode/blob/main/log.md)

Complete information about other functions methods and advanced topics [here](https://nostalgic-judge-413.notion.site/The-Complete-JavaScript-Course-8c76c6a65eee4faeb8fdcd0f30bdc3a4) (Notion)