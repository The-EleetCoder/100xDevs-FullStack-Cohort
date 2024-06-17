# Week 3

# Middlewares, Global Catches & Zod

In this lecture, Harkirat dives deep into `Middlewares`: behind-the-scenes helpers that tidy up things before your main code does its thing. `Global catches`: safety nets for your code, they catch unexpected issues before they cause chaos. And finally, `Zod`: a library that ensures efficient input validation on your behalf.

<p align='center'>
<img src='image.png' height='300px'/>
</p>

## Understanding Middlewares:

**Imagine a Busy Hospital:**  
Think of a hospital where there's a doctor, patients waiting in line, and a few helpful assistants making sure everything runs smoothly.

1. **Doctor's Cabin** `(Application Logic)` : The doctor is like the main brain of our hospital – ready to help patients with their problems.
2. **Waiting Room** `(Callback Queue)` :
The waiting room is where patients hang out before seeing the doctor. Each patient has a unique situation.
3. **Intermediates** `(Middlewares)` :
Before a patient sees the doctor, there are some helpers doing important tasks.
One helper checks if patients have the right paperwork . This is like ensuring everyone is who they say they are (Authentication)
Another helper does quick health checks – like making sure patients' blood pressure is okay. This is similar to checking if the information coming to the doctor is healthy and makes sense (Input Validation).

<p align='center'>
<img src='image-1.png'/>
</p>