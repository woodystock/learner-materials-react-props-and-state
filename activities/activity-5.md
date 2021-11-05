# Activity 5 

Awesome.

We now have a cat card rendering for every cat in our data. All 16 of them!

But each cat card currently shows Mr Gwumpy. 

As adorable as he is, the rest of the cats need their time to shine. 

How do we make each card show information for each individual cat?

# Step 1 - Pass Props

Just like a Mumma/Dadda cat pass properties like silky fur and floofy tails down to their kitty offspring we need to pass our cat data objects properties down to our Cat Card.

We do this using Props! Short for..

You guessed it! 

Properties.

## What is "props"?

You pass variables to functions, you pass "props" to React components. It's really that simple. Props just means data.

How do we do this?

Simple.

- In `App.js` add a property to our `<CatCard />` like this:

`CatCard props={cat} />`

Note: you don't have to call props 'props'. In fact, depending on the data or 'properties' that you're passing, it might be better you choose a more suitable name. Other things we might want to call our props in this example could be `CatCard cat={cat} />` or `CatCard data={cat} />`. But we'll leave it as `props` for now so you can remember the lingo. 

# Step 2 - Receive Props

In `CatCard.js` update the CatCard functions parameters to receive some delicious 'props'

```
function CatCard(props) {...}
```

Again, we don't have to call this props, we could call it bingoWings if we wanted to. But props is fine for now.

To check our cat card is receiving our cat data properties, add a console log above our CatCards return statement 

`console.log("CatCard to App, come in App? Do you read me?", props)`

Check your browser console. You should see your console.log() printed lots of times. There will be a small arrow next to each of these logs. If you click on this, a drop down will show you your props - it's just an object!

# Step 3 - Accessing Props 

Looks like we're all hooked up and ready to go-go!

Our cat cards array of data is being looped over, for every cat object our CatCard component is being rendered. We are then passing our cat object properties (the whole cat object) to our cat card for us to use. Pawesome.

Now we just need to inject 💉 our card with catty data.

To do this we simply need to replace our hard-coded cat information with our props.

- In the cat cards `<h3>` replace Mr Gwumpy with `{props.props.name}`

- Your cat cards should now show other cats names! Yay.

- In the `img` tag, replace the `src` attributes string with `{props.props.photo}` and the `alt` attributes string with `{props.props.alt}`

- Your cat cards should now show other cats pictures with accessible alt attributes

- Following the same pattern, can you replace the rest of the hard coded data with props? Remember to look in `catData.js` to check what properties the cat objects have. Or alternatively, you can console.log() props and check your browser console for props there. 

<details>
<summary>Click here to see meow!</summary>
<pre>

```
function CatCard(props) {

    console.log("CatCard to App, come in App? Do you read me?", props)
    
    return (
        <div className="card">
            <h3 className="card__text card__header">{props.props.name}</h3>
            <img className="card__image" src={props.props.photo} alt={props.props.alt}></img>
            <p className="card__text">Species: {props.props.species}</p>
            <p className="card__text">Favourite Food(s): {props.props.favFoods}</p>
            <p className="card__text">Birth Year: {props.props.birthYear}</p>
        </div>
    )
}

export default CatCard
```

Let's break it down. 🔨

- We are passing `props` into our `<CatCard props={cat}/>`

- We pass these into our CatCard functions parameters `function CatCard(props)`

- We access these properties through object [dot notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors). Because these properties are nested we have to go into props then props again to access each cat `props.props.cat`. 

- We insert these properties into our JSX using curly braces {}

</pre>
</details>

Phew!

Great job. 

That was a lot to get through but I think you'll agree, our cat cards are looking smashing.

Don't forget to take a break 🌯

Then let's see what else we can do with props! [Activity 6](./activity-6.md) 