# Activity 7 - Level Up

Alright, so you've done it!

You've got a sweet little React app that loops through some cat data producing a gorgeous set of kitty cat cards. We use props to pass data between our components and have even used JavaScript to count our cats!

Bravo, bravo

There are just a few things we could do to make our app _even better_ 🔥

# Step 1 - Destructuring FTW!

In `CatCard.js` and other parts of our app, we are accessing nested props like this `props.name`.

This works fine, but it doesn't look very purrdy! 😸

Using our knowledge of the [Destructuring Assignment](https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0) in JavaScript, can you refactor the code to make it look a little neater?

Have a go then...

<details>
<summary>Click here to see the answer!</summary>
<pre>

```
function CatCard(props) {

    const { name, photo, alt, species, favFoods, birthYear } = props

    return (
        <div className="card">
            <h3 className="card__text card__header">{name}</h3>
            <img className="card__image" src={photo} alt={alt}></img>
            <p className="card__text">Species: {species}</p>
            <p className="card__text">Favourite Food(s): {favFoods}</p>
            <p className="card__text">Birth Year: {birthYear}</p>
        </div>
    )
}

export default CatCard
```

Let's break it down. 🔨

Whereas before we were using object dot notation to drill into each piece of data we wanted to access from our cat object, we now use JavaScript destructuring assignment to extract the data we need and assign it to `props`

We can then use these extracted pieces of data as variables throughout our code, without needing to add the extra `.props` object dot notation

This makes our code look cleaner. If this file was huge, or if we had deeply nested properties it would also result in less repetition. Sweet!

We could take this one step further by doing the destructuring in our Header components parameters, like so:

```

function Card ({ name, photo, alt, species, favFoods, birthYear }) {

    return (
            <div className="card">
                <h3 className="card__text card__header">{name}</h3>
                <img className="card__image" src={photo} alt={alt}></img>
                <p className="card__text">Species: {species}</p>
                <p className="card__text">Favourite Food(s): {favFoods}</p>
                <p className="card__text">Birth Year: {birthYear}</p>
            </div>
    )
}

export default Card

```

</pre>
</details>

Booya! 

Can you update `Header.js` to use destructuring in this way too?

# Step 2 - Console Errors

You may have noticed when checking the console.logs() in your browser window, a little error message sneak in.

It may have looked something like this:

![index.js:1 Warning: Each child in a list should have a unique "key" prop](../public/key-warning.png)

This is a very common React warning and all React is trying to say is,

    "Hi there developer friend,

    I am very clever. But I struggle a bit when it comes to keeping track of lots of different data (like the number of cats you've just looped over, you cat obsessed maniac).

    If these cat cards get added to or deleted, I'm going to lose track. Please give each cat card a unique key so I can keep track of who's coming and going.

    Cheers".

Sure is polite, for a robot. 🤖

## What is a Key in React? 🔑

A Key in React is a unique string

## How do we make one?

You can use the unique key provided on data you get from a database. But sometimes our data won't have a unique key (like our cat data) so we need to make one.

There are lots of different ways to do this. A popular way is using the `npm` package [uuid](https://www.npmjs.com/package/uuid)

## Using UUID - Step 1

- In your terminal (make sure you're in the right directory) run:

`npm install uuid`

## Using UUID - Step 2

At the top of `App.js` import our unique identifier, like so:

`import { v4 as uuidv4 } from 'uuid';`

## Using UUID - Step 3

Add a key property to our `CatCard />` component and call `uuid4`

`<CatCard key={uuidv4()} name={cat.name} species={cat.species} favFoods={cat.favFoods} birthYear={cat.birthYear} photo={cat.photo} alt={cat.alt} />`

## Using UUID - Save your file and Check your Browser Console

Poof!

![Cat disappearing into a poof](../public/poof.gif)

Like a cat in the night, our error warning has disappeared.

You are now entering React Ninja level... 🥷

[Activity 8 - Extension](./activity-8-extension.md)
