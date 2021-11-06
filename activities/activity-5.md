# Activity 5 - Passing "Props"

Awesome.

We now have a cat card rendering for every cat in our data. All 16 of them!

But each cat card currently shows Mr Gwumpy. 😾

As adorable as he is, the rest of the cats need their time to shine. ☀️

How do we make each card show information for each individual cat?

Just like Ma and Pa cats pass properties (like silky fur and floofy tails) down to their kitty offspring, we need to pass our cat data object's properties down to our cat card.

We do this using Props! Short for..

You guessed it!

Properties.

## What are "Properties"? 🤔

You pass variables to functions, you pass "props" to React components. It's really that simple! Props just means data. This data could be a string, a number, an array or more often than not, the properties of an object (like our cat objects properties).

How do we do this in React?

Simple.

# Step 1 - Passing Properties

- In `App.js` we can pass properties from the cat object we're looping over to our cat card like this:

`<CatCard name={cat.name} species={cat.species} />`

- Pass all of the cat properties to our cat card in this way. The final code should look like this:

          ```
          {cats.map(cat => {
            return  <CatCard name={cat.name} species={cat.species} favFoods={cat.favFoods} birthYear={cat.birthYear} photo={cat.photo} alt={cat.alt}/>
          })}

          ```

Note: you don't have to call your props the same name as the property names themselves. Instead of "name" etc, you could call the property `catName={cat.name}` or "favFoods" `favouriteFoods={cat.favFoods}` or even `abracadabra={cat.name}`.

# Step 2 - Receiving Properties

In `CatCard.js` update the CatCard functions parameters to receive some delicious 'props'

```
function CatCard(props) {...}
```

It's just like how a normal JavaScript function receives stuff - cool 😎

Note: We don't have to call our parameters props here, we could call our parameters data, or cat, or bingoWings if we wanted to! But props is fine for now and will help you remember the lingo 👍

To check our cat card is receiving our cat data properties, add a console log above our cat cards return statement

`console.log("CatCard receiving props from App?! Come in App?! 😸 Props received are: ", props)`

Check your browser console. You should see your console.log() printed out lots of times. Each log should show the cat properties you have passed to your cat component like this:

```
CatCard receiving props from App?! Come in App?! 😸 Props received are:  {name: 'Little Miss Purrfect', species: 'Cat', favFoods: Array(2), birthYear: 2016, photo: 'https://learnwebcode.github.io/json-example/images/cat-2.jpg', …}

```

# Step 2.2 - Accessing Props

Looks like we're all hooked up and ready to go-go!

Our cat cards array of data is being looped over, for every cat object our `<CatCard/>` component is being rendered. We are then passing our cat properties to our cat card for us to use. Pawesome.

Now we just need to inject 💉 our card with catty data using JavaScript.

To do this we simply need to replace our hard-coded cat information with our props.

## Step 2.3

- In the cat cards `<h3>` replace Mr Gwumpy with `{props.name}`

- Save your work and check the browser.

Your cat cards should now show other cats names!

## Step 2.4

- In the `img` tag, replace the `src` attributes string with `{props.photo}` and the `alt` attributes string with `{props.alt}`

- It should look like this:

`<img className="card__image" src={props.photo} alt={props.alt}></img>`

- Your cat cards should now show other cats pictures with accessible alt attributes. Yay.

## Step 2.5

- Following the same pattern, replace the rest of the hard coded data with props

<details>
<summary>Click here to see the final result</summary>
<pre>

```
function CatCard(props) {

    console.log("CatCard to App, come in App? Do you read me?", props)

    return (
           <div className="card">
            <h3 className="card__text card__header">{props.name}</h3>
            <img className="card__image" src={props.photo} alt={props.alt}></img>
            <p className="card__text">Species: {props.species}</p>
            <p className="card__text">Favourite Food(s): {props.favFoods}</p>
            <p className="card__text">Birth Year: {props.birthYear}</p>
        </div>
    )
}

export default CatCard
```

Let's break it down. 🔨

- We are passing `props` into our cat card: `<CatCard props={cat}/>`

- Our CatCard receives these props through its parameters: `function CatCard(props)`

- In our component, we access these properties through object [dot notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors).

- We insert these properties into our JSX using curly braces {}

</pre>
</details>

## Alternatively...

In the above instructions, we pass each cat property separately into our CatCard component. This is perfectly fine.

However, if we wanted to, we could just pass the whole cat object like this:

    ```
          {cats.map(cat => {
            return  <CatCard catObject={cat}/>
          })}

     ```

Passing props in the above way would mean we'd access them slightly differently.

In `CatCard.js` we'd access these as `{props.catObject.name}`, `{props.catObject.species}`, `{props.catObject.favouriteFoods}` because we'd have to go into our props, then go into our cat object, then access the property we wanted.

Passing the whole cat object at once or passing individual properties are both perfectly fine ways of writing React code - it's up to you which way prefer and how you'd like to name things. Passing the whole cat object makes `App.js` a little tidier, however for this tutorial we're going to continue passing the cat properties individually as this can be a bit easier to understand when first learning about props in React.

Before moving on to the next exercise though, have a play around to make yourself familiar with different ways of passing props and what each word and level of dot notation refers to. It can be a bit confusing at first, but the more you practice the easier it will become. 😺

# End of Exercise 5

Phew!

Great job.

That was a lot to get through but I think you'll agree, our cat cards are looking smashing and we've learnt a lot! 🧠

Don't forget to take a break 🌯

Then let's see what else we can do with props! [Activity 6](./activity-6.md)
