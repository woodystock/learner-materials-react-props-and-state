# Activity 4

Inside our `components` folder create a file called `CindyClawford.js`

Inside of this Cindy Clawford file, type:

```
function CindyClawford() {
    return (

    )
}

export default CindyClawford;
```

In App.js copy and paste our Cindy Clawford cat card logic and paste this into our Cindy Clawford component like we did for Navbar and Header

Your Cindy Clawford file should look something like this:

```
function CindyClawford() {
    return (
           <div className="card">
            <h2 className="card__text card__header">Cindy Clawford</h2>
            <img className="card__image" src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="A cute tabby kitten"></img>
            <p className="card__text">Species: Cat</p>
            <p className="card__text">Favourite Food(s): Mice</p>
            <p className="card__text">Birth Year: 2012</p>
          </div>
    )
}

export default CindyClawford;
```

Save `CindyClawford.js`

At the top of `App.js` import our new Cindy Clawford component:

`import CindyClawford from './components/CindyClawford'`

Delete our original Cindy Clawford card code, replacing it with our new Cindy Clawford component:

`<CindyClawford/>`

Save `App.js`

Check the browser

Our app should still work and look the same.. but now our Cindy Clawford card has become a reusable component! 👯‍♂️

Move on to [Activity 5](./activity-5.md)

