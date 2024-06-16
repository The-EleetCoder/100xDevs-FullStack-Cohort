# Week 2.2

## ECMAScript
ECMAScript is a standardized specification for scripting languages, originally developed to standardize JavaScript. It defines the syntax, semantics, and behavior that JavaScript (and other languages like JScript and ActionScript) should adhere to. ECMAScript versions (e.g., ES5, ES6/ES2015, ES7, etc.) correspond to different updates and additions to the language specification.

## JavaScript
JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is primarily used for creating interactive and dynamic websites. However, with the advent of Node.js, it is now also used for server-side development, desktop applications, and even mobile applications. JavaScript is the most widely used implementation of ECMAScript and is supported by all major browsers.

## Node.js
Node.js is a runtime environment that allows you to execute JavaScript code outside of a web browser. Node.js is built on the Chrome V8 JavaScript engine, which powers Google Chrome. It provides a runtime environment that allows you to run JavaScript on the server-side, rather than just in the browser. Traditionally, JavaScript was primarily used for client-side scripting in web browsers. Node.js extends JavaScript's capabilities to enable server-side scripting, allowing developers to build server-side applications using JavaScript.

## Bun
Node.js is slow (multiple reasons for it). So, Some smart people said they wanted to re-write the JS runtime for the backend and introduced `Bun`. It is a significantly faster runtime. It is written in Zig.

## HTTP Protocol
The Hypertext Transfer Protocol (HTTP) is a fundamental protocol used for communication on the World Wide Web. It governs how clients (such as web browsers) request resources (like web pages, images, videos) from servers and how servers respond to those requests. Here are the key aspects of the HTTP protocol:

1. **Client-Server Model**: HTTP follows a client-server model where clients (typically web browsers) send requests to servers for resources, and servers respond with the requested resources.

2. **Stateless Protocol**: HTTP is stateless, meaning each request from a client to a server is independent and unrelated to previous requests. This simplifies implementation but requires additional mechanisms like cookies or session tokens to manage stateful interactions.

3. **Request Methods**: HTTP defines several request methods (also known as HTTP verbs) that specify the action to be performed on the resource. The most common methods are:
    1. **GET**: Requests a representation of the specified resource.
    2. **POST**: Submits data to be processed to a specified resource.
    3. **PUT**: Updates a resource.
    4. **DELETE**: Deletes a specified resource.
    5. **PATCH**: Applies partial modifications to a resource.

4. **Headers**: HTTP requests and responses include headers that provide additional information about the request or response. Headers can include details like the type of content being sent (Content-Type), the size of the content (Content-Length), caching directives (Cache-Control), and more.

5. **Status Codes**: HTTP responses include status codes that indicate the outcome of the request. Some common status codes are:

    1. 200 OK: The request was successful.
    2. 404 Not Found: The requested resource could not be found.
    3. 500 Internal Server Error: The server encountered an unexpected condition.
