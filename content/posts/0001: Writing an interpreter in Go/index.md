---
title: "Writing an interpreter in Go"
description: "A in-depth review for the book \"Writing an interpreter in Go\" by Thorsten Ball."
url: posts/writing-an-interpreter-in-go
date: 2023-09-19
publishdate: 2023-09-19
summary: "Writing an interpreter in Go... How hard can it be?"

categories: 
  - Book Review
  - Language Development

tags:
  - Go
---

So I've wanted to read this book for a looong time... 
Finally, I sat down and said I'm going start a blog just so I have an incentive to get through all the books on my reading list!

Since this is my first post, I'm not sure exactly how to approach a "book review", 
but I think I will be going through the book, showing you how I've completed each step, and giving my thoughts at the end of each chapter.

### A super quick guide to *Monkey*!
This book defines its own programming language called "Monkey". 
Since it's not a well known language or anything, I'm going to quickly summarise the book's explanation here.

```js
// Variables can be integers or booleans
let number = 100;
let condition = number > 99;

if (condition) {
    printLine("Number is over 99!!")
} else {
    
    // Functions!
    let f = fn(num) {
        return num + 1;
    }

    // if-statement conditions can be integers (0 = false)
    if (f(number)) {
        printLine("Number is greater than 0!");
    }
}
```
We'll keep the language simple for now... Extra complexity will be added in the 4th chapter!

Finally, before we start, I will be following along with the book so [here is my code](https://github.com/hrszpuk/Monkey) if you would like a complete reference.

## Chapter 1: Lexical analysis

## Chapter 2: Parsing

## Chapter 3: Evaluation

## Chapter 4: Extending the interpreter

## Final thoughts
Overall rating: :star: :star: :star: :star: (To be changed)
