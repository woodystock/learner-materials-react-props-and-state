# Activity 1 - Importing Data

Previously in Introduction to React & Components you were given a React project with an `App.js` file full of code that looked a bit like this:

```
  <div className="cards__wrapper">
          <div className="card">
            <h3 className="card__text card__header">Cindy Clawford</h3>
            <img className="card__image" src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="A cute tabby kitten"></img>
            <p className="card__text">Species: Cat</p>
            <p className="card__text">Favourite Food(s): Mice</p>
            <p className="card__text">Birth Year: 2012</p>
          </div>

          <div className="card">
            <h3 className="card__text card__header">Little Miss Purrfect</h3>
            <img className="card__image" src="https://learnwebcode.github.io/json-example/images/cat-2.jpg" alt="A gray fluffy kitten"></img>
            <p className="card__text">Species: Cat</p>
            <p className="card__text">Favourite Food(s): Wet food, dry food</p>
            <p className="card__text">Birth Year: 2016</p>
          </div>
```

Every cats name and subsequent information had to be hard coded (e.g. we had to write out each piece of cats information individually). This isn't ideal if we want to get our cat information from an outside source and also results in lots of repetition. Yuck!

In this guide we'll be taking a lump (technical term) of cat data, looping through it, passing it to ONE slick and sexy Cat Component and rendering cat information on our page through props - oh yeahhh! 💃🕺

Our 'lump' or 'JSON object' containing Cat data can be round in `src > data > catData.js`. Check it out 👈

This could have been put in our `App.js` file but keeping data in a separate file is more modular

To access this data, we'll need to import it

## Step 1 - Import the Kittens!

Can you remember how to import something from one file into another in React?

Have a go, if you need a hint:

<details>
<summary>Click here to see the answer</summary>
<pre>

At the top of App.js add:

`import { cats } from './data/cat-data'`

</pre>
</details>

To check it worked, add `console.log("Our pretties 😻: ", cats)` in our App function above the return statement then check your browser console.

You should see our cat data in the console.

Nice!

Move to [Activity 2](./activity-2.md)