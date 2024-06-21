# Week 4.1

# Introduction to DOM

## ECMA Scripts
ECMAScript, often abbreviated as ES, is a scripting language specification that serves as the standard upon which JavaScript is based. Basically, consider them as a set of rules and guidelines that make sure JavaScript behaves in a certain way. It's like a manual that tells developers what features JavaScript should have and how it should work.
 
## Auxiliary APIs
Auxiliary APIs, in the context of web development, refer to additional interfaces and functionalities provided by browsers or runtime environments beyond the core JavaScript language (as specified by ECMAScript). These APIs extend the capabilities of JavaScript, enabling developers to interact with various aspects of the browser environment or perform tasks that go beyond the language's basic features.

1. `Node.js APIs:` In the context of server-side JavaScript using Node.js, there are APIs specific to Node.js that provide access to the file system, networking, and other server-related functionalities. 

2. `Third-Party APIs:` APIs provided by external services or libraries that developers can use to enhance their applications. Examples include Google Maps API, Twitter API, or any other API that allows integration with external services.

3. `Web APIs:` These are browser-specific APIs that provide additional functionality to JavaScript for interacting with the browser environment. Examples include the DOM (Document Object Model), Fetch API for making network requests, and the Web Storage API for local storage.

These APIs are not part of the JavaScript language specification (ECMAScript) but are essential for building web applications, interacting with external services, and handling server-side operations. They extend the capabilities of JavaScript in specific environments.

## Understanding Document
In JavaScript, the Document refers to the root object of the DOM.  
The DOM (Document Object Model) API is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree of objects; each object represents a part of the page.

The document object provides an entry point to the DOM, and it represents the entire HTML or XML document. Developers can use methods and properties provided by the document object to interact with and manipulate the content of a web page dynamically.

## Manipulating HTML with JS
The DOM (Document Object Model) allows JavaScript to manipulate the HTML of a web page. 

Imagine the DOM as a tree-like structure that represents your HTML document. Each element in your HTML, like buttons, paragraphs, and images, is a part of this tree. JavaScript can interact with this tree, changing, adding, or removing elements. It's like giving JavaScript the power to update what you see on a webpage.

## Methods to Select Elements

1. `querySelector():` querySelector() is a method that selects the first element that matches a specified CSS selector.

2. `getElementById():` getElementById() is a method that selects a single element by its ID attribute.

3. `getElementsByClassName():` getElementsByClassName() is a method that selects all elements with a specific class name.

All three methods are used to select and manipulate HTML elements. `getElementById()` is specifically for selecting by ID. `getElementsByClassName()` selects by class name, but it returns a collection of elements.
`querySelector()` is more flexible as it can select by any valid CSS selector and returns the first matching element.

Example Using All Three:
```js
<div id="example">This is an example.</div>
<p class="highlight">This is a highlighted paragraph.</p>

<script>
  // Using getElementById
  const elementById = document.getElementById('example');
  elementById.style.color = 'blue';

  // Using getElementsByClassName
  const elementsByClass = document.getElementsByClassName('highlight');
  for (const element of elementsByClass) {
    element.style.fontWeight = 'bold';
  }

  // Using querySelector
  const elementByQuery = document.querySelector('.highlight');
  elementByQuery.style.backgroundColor = 'yellow';
</script>
```

## Understanding Debouncing
`Debouncing` is a programming practice used to ensure that time-consuming tasks do not fire so often, making them more efficient. In the context of onInput events, debouncing is often applied to delay the execution of certain actions (e.g., sending requests) until after a user has stopped typing for a specific duration.

Implementation:  
The following example demonstrates debouncing in the `onInput` event to delay the execution of a function that sends a request based on user input.

```js
<html>
  <body>
    <!-- Input field with onInput event and debouncing -->
    <input id="textInput" type="text" onInput="debounce(handleInput, 500)" placeholder="Type something...">

    <!-- Display area for the debounced input value -->
    <p id="displayText"></p>

    <script>
      // Debounce function to delay the execution of a function
      function debounce(func, delay) {
        let timeoutId;

        return function() {
          // Clear the previous timeout
          clearTimeout(timeoutId);

          // Set a new timeout
          timeoutId = setTimeout(() => {
            func.apply(this, arguments);
          }, delay);
        };
      }

      // Function to handle the debounced onInput event
      function handleInput() {
        // Get the input field's value
        const inputValue = document.getElementById("textInput").value;

        // Display the input value in the paragraph
        document.getElementById("displayText").innerText = "You typed: " + inputValue;

        // Simulate sending a request (replace with actual AJAX call)
        console.log("Request sent:", inputValue);
      }
    </script>
  </body>
</html>
```
`Explanation`:  
The debounce function is a generic debounce implementation that takes a function (func) and a delay time (delay).
Inside the debounce function, a timeout is set to delay the execution of the provided function (func) by the specified delay time (delay).
The handleInput function is the actual function to be executed when the onInput event occurs. It simulates sending a request (e.g., an AJAX call) based on user input.

`How it works`:  
When a user types in the input field, the onInput event triggers the debounce function.
The debounce function sets a timeout, and if the user continues typing within the specified delay time, the previous timeout is cleared, and a new one is set.
After the user stops typing for the specified delay, the handleInput function is executed.