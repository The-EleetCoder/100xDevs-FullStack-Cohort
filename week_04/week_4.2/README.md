# week 4.2

# Reconcilers & Intro to React
In this lecture, Harkirat addresses the challenges encountered in vanilla JavaScript while building a Todo application. Focusing on the limitations of manual DOM manipulation and the lack of a centralized state, the discussion sets the context for transitioning to React. The session highlights the pain points faced during development and introduces React's declarative and component-based approach as a solution for more efficient and scalable web development.

## Why React?
DOM manipulation, in its raw form, poses significant challenges for developers. Constructing dynamic websites using the basic primitives offered by the DOM—such as document.createElement, document.appendChild, element.setAttribute, and element.children—can be a complex and labor-intensive process. The inherent difficulty lies in orchestrating intricate interactions and updates within the document structure using these primitive tools. 
 
Recognizing the intricacies involved, React, a JavaScript library, emerged as a powerful solution. React abstracts away much of the manual DOM manipulation complexity, providing developers with a declarative and component-based approach to building user interfaces. This abstraction not only enhances code readability and maintainability but also simplifies the creation of dynamic and interactive web applications.
 
However, before jumping directly into React, let's us first try building a simple todo application using vanilla JavaScript. This exercise will serve a dual purpose—it will not only reinforce your JavaScript concepts but also allow you to grasp the problem statement, setting the stage to appreciate the elegance of React even more.
