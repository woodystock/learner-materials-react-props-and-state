# Activity 2 - Create a Cat Card

In the last Lab you did (Intro to React & Components) you stripped out a load of JSX code and put each piece (like the cards or the header) into their own components.

Let's do this now but instead of having individual cards for individual cats we're going to have one all seeing, all powerful cat card, that looks different depending on what data we feed it! 🐈 👁

Can you remember how to create a component?

Have a go! 

Then read on, to find out how...

## Step 1

- In `src` create a folder called `components`

## Step 2

- In `components` create a file/component called `CatCard.js`

- Paste in this code to `CatCard.js`:

```
function CatCard() {
    return (
        <div className="card">
            <h3 className="card__text card__header">Mr Gwumpy</h3>
            <img className="card__image" src="https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg" alt="A grumpy cat, frowning angrily"></img>
            <p className="card__text">Species: Cat</p>
            <p className="card__text">Favourite Food(s): Caviar</p>
            <p className="card__text">Birth Year: 1984</p>
        </div>
    )
}

export default CatCard
```

- Save your file

## Step 3

- At the top of `App.js` import your cat card

<details>
<summary>Click here to see the answer</summary>
<pre>

`import CatCard from './components/CatCard'`

</pre>
</details>

Component created and ready to go!

Time to see [Activity 3](./activity-3.md) 😸
