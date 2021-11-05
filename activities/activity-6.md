
# Activity 6 - Passing Dynamic Data

Currently our Header says there are 0 cats in our App. This isn't accurate!

Now we know how to pass props to our components, let's update our Header component to reflect the true number of cats in our ~~basket~~ application.

One way to do this is by passing cat data down to Header.

Can you remember how to do this without looking?

<details>
<summary>Click here to see how!</summary>
<pre>

// App.js 

`<Header props={cats}/>`

// Header.js

`function Header(props) {..}`

</pre>
</details>


Now our Header is receiving our cat data, we could add some JavaScript to count how many cats there are. 

- How would we count the number of objects in an array in JavaScript?

- How could we insert this JavaScript logic into our Header element?

<details>
<summary>Click here to find out how!</summary>
<pre>

// Header.js

```function Header(props) {

  return (
    <header className="header__container">
      <h1 className="header__title header__welcome">Welcome to React!</h1>
      <h2 className="header__title">There are currently {props.props.length} Cats in this Cat App</h2>
    </header>
  )
}

export default Header
```

Let's break it down. 🔨

- We are passing our cat properties into our Header component

- We are using curly braces to replace the 0 with some JavaScript

- In the curly braces we use JavaScript Dot Notation to get to our nested cat properties

- We use the JavaScript `.length` property to count how many cat objects there are

- Boom! Our Cat App now accurately reflects how many cats there are! 😺

</pre>
</details>



Now let's really push this to the next level! [Activity 7](./activity-7.md) 