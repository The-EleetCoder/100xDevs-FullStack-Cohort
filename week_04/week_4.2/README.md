# week 4.2

# Reconcilers & Intro to React
In this lecture, Harkirat addresses the challenges encountered in vanilla JavaScript while building a Todo application. Focusing on the limitations of manual DOM manipulation and the lack of a centralized state, the discussion sets the context for transitioning to React. The session highlights the pain points faced during development and introduces React's declarative and component-based approach as a solution for more efficient and scalable web development.

## Why React?
DOM manipulation, in its raw form, poses significant challenges for developers. Constructing dynamic websites using the basic primitives offered by the DOM—such as document.createElement, document.appendChild, element.setAttribute, and element.children—can be a complex and labor-intensive process. The inherent difficulty lies in orchestrating intricate interactions and updates within the document structure using these primitive tools. 
 
Recognizing the intricacies involved, React, a JavaScript library, emerged as a powerful solution. React abstracts away much of the manual DOM manipulation complexity, providing developers with a declarative and component-based approach to building user interfaces. This abstraction not only enhances code readability and maintainability but also simplifies the creation of dynamic and interactive web applications.

## Virtual DOM
The concept of a Virtual DOM comes into play when dealing with efficient updates to the actual DOM. 
The Virtual DOM is a lightweight copy of the actual DOM. When updates are made to the state of an application, a new Virtual DOM is created with the changes. This Virtual DOM is then compared with the previous Virtual DOM to identify the differences (known as "diffing").

### In the context of a todo application:
1. `State Changes:` If a todo has been marked as complete or removed from the backend, the state of the application changes.
2. `Virtual DOM Comparison:` The new state is used to create a new Virtual DOM. This new Virtual DOM is compared with the previous Virtual DOM.
3. `Identifying Changes:` The difference between the new and previous Virtual DOMs is determined. For example, if a todo has been marked as complete, the corresponding element in the Virtual DOM is updated to reflect this change.
4. `Efficient Updates:` Instead of clearing the entire parent element and re-rendering everything, the Virtual DOM helps identify specifically what has changed.
5. `Selective DOM Manipulation:`
Only the elements that have changed are manipulated in the actual DOM. This process is more efficient than a naive approach of clearing and re-rendering the entire DOM.

