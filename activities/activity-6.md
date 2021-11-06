# Activity 6 - Passing Dynamic Data

Currently our Header says there are 0 cats in our App. This isn't accurate!

Now we know how to pass props to our components, let's update our Header component to reflect the true number of cats in our ~~basket~~ application.

This Header count is a perfect example of "state" or "dynamic data" in our app. The number of cats we have might change and our cat count should update to reflect this.

One way to do this is by working out the number of cats in our array and passing this count down to our Header component using props.

- How would we check or count the number of objects in an array in JavaScript?

<details>
<summary>Click here to find out how!</summary>
<pre>

// In App.js above our return statement, declare a variable and save our cats length to it

`const catCount = cats.length`

</pre>
</details>

Now we have the number of cats in our array (console.log() this to double check!)

- How could we insert this JavaScript logic into our Header element?

- We'll need to pass our catCount variable down to our Header component as props then access those props in our `<h2>`

Have a go yourself then..

<details>
<summary>Click here to find out how!</summary>
<pre>

// In App.js we pass our catCount variable to our Header component through props

`<Header catCount={catCount}>`

// In Header.js we receive props through the Header parameters

`function Header(props) {..}`

// In Header.js we replace the 0 with our dynamic data

```function Header(props) {

  return (
    <header className="header__container">
      <h1 className="header__title header__welcome">Welcome to React!</h1>
      <h2 className="header__title">There are currently {props.catCount} Cats in this Cat App</h2>
    </header>
  )
}

export default Header
```

Let's break it down. 🔨

- In App.js we use the JavaScript `.length` property to count how many cat objects there are and save this number to a variable

- We pass this variable to our Header component using props

- Our Header component receives our props through it's parameters

- We use curly braces to replace the 0 in our h2 with our props

</pre>
</details>

Boom! Our Cat App now accurately reflects how many cats there are - 16! 😺

To test whether our Header component is accurately reflecting our applications state though, let's add another cat to our basket to make sure!

In our `useState()` function add Captain Catface into our cat data array

```
{
      "name": "Captain Catface",
      "species": "Sea Cattain",
      "favFoods": ["fish, rum"],
      "birthYear": 2016,
      "photo": "https://cdni.rt.com/files/2016.05/article/5743512dc46188d2298b45a1.jpg",
      "alt": "A cat wearing a ships captains uniform"
    }
```

Our header should now say "There are currently 17 Cats in this Cat App".

Alternatively you could delete a cat and the count should also update.

Great work!

Our Cat app is now "reacting" to changes in our state! 🙌

Let's push this to the next level! [Activity 7](./activity-7.md)
