# Activity 6 - Level Up

Alright, so you've done it!

You've got a sweet little React app that loops through some cat data producing a gorgeous set of kitty cat cards.

Bravo, bravo

There are just a few things we could do to make our app *even better* 

# Step 1 - Destructuring 

In `CatCat.js` we are accessing props by doing `props.props.name`.

This works fine, but it doesn't look very purrdy!

Using our knowledge of the [Destructuring Assignment](https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0) in JavaScript, can we refactor our code to make it look a little neater?

Have a go then...

<details>
<summary>Click here to see the answer!</summary>
<pre>

```
function CatCard(props) {

    const { name, photo, alt, species, favFoods, birthYear } = props.props
    
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

- Whereas before we were using object notation to drill into each piece of data we wanted to access from our cat object, we now use JavaScript destructuring assignment to extract the data we need from props.props

- We can then use these extracted pieces of data throughout our code, without needing to add the extra props.props object dot notation

- This makes our code look cleaner. If this file was huge, it would also result in less repetition. Sweet!


</pre>
</details>

If we wanted to be even more clever, we could take destructuring one step further by using the [Spread Operator](https://sebhastian.com/react-destructuring/)...

Have a go. Then...

<details>
<summary>Click here to see the how!</summary>
<pre>

```
// App.js

<CatCard {...cat}/>


// CatCard.js

function CatCard({ name, photo, alt, species, favFoods, birthYear }) {

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

- Here we use the Spread Operator to loop through the different object properties in `App.js` `<CatCard/>` component `{...cat}`

- Then, in `CatCat.js` we move our Destructuring into our CatCard functions parameters, removing the need to assign these values to props `function CatCard({ name, photo, alt, species, favFoods, birthYear }) {}`

- All three ways of accessing props are perfectly valid. Which one you choose might depend on how much repetition there is in your file. 
If there isn't much repetition you might not want to use destructuring at all. If there is lots of repetition but lots of property values you want to access, putting them in your functions parameters might get a bit long! So it's up to you how you create the cleanest decision. 


</pre>
</details>


And there you have it!

2 neat ways using JavaScript methods to reduce repetition in components! 🙌


# Step 2 - console errors

You may have noticed when checking the console.logs() in your browser window, a little error message sneak in.

It may have looked something like this:

![index.js:1 Warning: Each child in a list should have a unique "key" prop](../public/key-warning.png)

This is a very common React warning and all React is trying to say is,

"Hi there developer friend,

I am very clever. But I struggle a bit when it comes to keeping track of lots of different data (like the number of cats you've just looped over, you cat obsessed maniac). 

If these cat cards get added to or deleted, I'm going to lose track. Please give each cat card a unique key so I can keep track of who's coming and going. 

Cheers".

Sure is polite, for a robot. 

## What is a Key in React?

A Key in React is a unique string

## How do we make one?

You can use the unique key provided on data you get from a database. But sometimes our data won't have a unique key (like our cat data) so we need to make one.

## How do we make one?

There are lots of different ways. A popular one is using the `npm` package [uuid](https://www.npmjs.com/package/uuid)


## Step 1

- In your terminal (make sure you're in the right directory) run:

`npm install uuid`

## Step 2

At the top of `App.js` import our unique identifier, like so:

`import { v4 as uuidv4 } from 'uuid';`

## Step 3

Add a key property to our `CatCard />` component and call `uuid4`

<CatCard key={uuidv4()} {...cat}/>


// console error key issue



# Extension 

// favFoods

// dog data
