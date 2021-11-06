# Activity 5 - Passing Props

Awesome.

We now have a cat card rendering for every cat in our data. All 16 of them!

But each cat card currently shows Mr Gwumpy. 

As adorable as he is, the rest of the cats need their time to shine. 

How do we make each card show information for each individual cat?

Just like Ma and Pa cats pass properties (like silky fur and floofy tails) down to their kitty offspring, we need to pass our cat data object's properties down to our cat card.

We do this using Props! Short for..

You guessed it! 

Properties.

## What are "Props"?

You pass variables to functions, you pass "props" to React components. It's really that simple. Props just means data.

How do we do this in React?

Simple.

# Step 1 - Passing Properties

- In `App.js` add a property to our `<CatCard />` like this:

`<CatCard props={cat} />`


- `{cat}` in this example is the cat object our `.map()` method is looping over. To prove this, add a `console.log()` to our `.map()` function then check your browser console:

          ```
          {cats.map(cat => {
              console.log("Cat = ", cat)
            return  <CatCard props={cat}/>
          })}

          ```

Don't forget to delete your console logs after you've checked them to help keep things tidy.

Note: you don't have to call props 'props'. In fact, depending on the data or 'properties' that you're passing, it might be better you choose a more suitable name. Other things we might want to call our props in this example could be `CatCard cat={cat} />` or `CatCard data={cat} />`. But we'll leave it as `props` for now so you can remember the lingo. 

# Step 2 - Receiving Properties

In `CatCard.js` update the CatCard functions parameters to receive some delicious 'props'

```
function CatCard(props) {...}
```

It's just like how a normal JavaScript function receives values - cool!

Again, we don't have to call these props here, we could call our parameters bingoWings if we wanted to. But props is fine for now.

To check our cat card is receiving our cat data properties, add a console log above our cat cards return statement 

`console.log("CatCard to App, come in App? Do you read me?", props)`

Check your browser console. You should see your console.log() printed lots of times. There will be a small arrow next to each of these logs. If you click on this, a drop down will show you your props - it's just an object!

# Step 2.2 - Accessing Props 

Looks like we're all hooked up and ready to go-go!

Our cat cards array of data is being looped over, for every cat object our `<CatCard/>` component is being rendered. We are then passing our cat properties to our cat card for us to use. Pawesome.

Now we just need to inject 💉 our card with catty data using JavaScript.

To do this we simply need to replace our hard-coded cat information with our props.

## Step 2.3

- In the cat cards `<h3>` replace Mr Gwumpy with `{props.props.name}`

- Save your work and check the browser.

Your cat cards should now show other cats names! 

## Step 2.4

- In the `img` tag, replace the `src` attributes string with `{props.props.photo}` and the `alt` attributes string with `{props.props.alt}`

- It should look like this:

`<img className="card__image" src={props.props.photo} alt={props.props.alt}></img>`

- Your cat cards should now show other cats pictures with accessible alt attributes. Yay.

## Step 2.5

- Following the same pattern, can you replace the rest of the hard coded data with props? Remember to check our `useStates()` cat data to check what properties our cat objects have. Or alternatively, you can console.log() props and check your browser console for what property names are there. 

<details>
<summary>Click here to see the final result</summary>
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

- We are passing `props` into our cat card: `<CatCard props={cat}/>`

- Our CatCard receives these props through its parameters: `function CatCard(props)`

- In our component, we access these properties through object [dot notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors). Because these properties are nested we have to go into props then props again to access each cat `props.props.cat`. 

- We insert these properties into our JSX using curly braces {}

</pre>
</details>


## Alternatively...

In the above instructions, we pass the entire cat object. 

However, instead of passing the whole cat object:

    ```
          {cats.map(cat => {
            return  <CatCard props={cat}/>
          })}

     ```
    

We could choose to pass each property individually like this:

    ```
          {cats.map(cat => {
            return  <CatCard name={cat.name} species={cat.species} favouriteFoods={cat.favFoods} birthYear={cat.birthYear} />
          })}

    ```

This would pass the cats name, species, favourite foods and birth year, but wouldn't pass the photo or alt attribute.

Passing props in the above way would mean we'd access them slightly differently. 

In `CatCard.js` we'd access these as `{props.name}`, `{props.species}`, `{props.favouriteFoods}` instead of `{props.props.name}` like we did earlier.

This is because we're already doing one level of dot notation in `App.js`, rather than having to do it in `CatCard.js` because we passed the whole object.

Either way is fine - it's up to you which you prefer. As we want to use all the cats properties, in this tutorial we're going to carry on passing the whole cat object. 

# End of Exercise 5

Phew!

Great job. 

That was a lot to get through but I think you'll agree, our cat cards are looking smashing and we've learnt a lot!

Don't forget to take a break 🌯

Then let's see what else we can do with props! [Activity 6](./activity-6.md) 
