# Activity 2

By now you should have installed your dependencies and have your React app running in the browser 🏃‍♀️💨

The creator of this React App clearly has fantastic flare and style (if not a slightly unhealthy obsession with cats). However, if we take a closer look at the `App.js` file we can see they've got all their code in one long return... 

That isn't very modular! 🙀

## Create a Components file

To turn this sorry `App.js` file into something more React-y, we need to strip out some of that code and turn the different elements into reusable components.

In the `src` directory:

- create a `components` folder 

This will contain our components

Note: There are no strict rules on how to structure a project in React, the way we're going to structure this app is just one common way of doing it

## Navbar to fab-bar! 

In your new `src` directory create a new file called `Navbar.js`

Type this code out into the file:

```function Navbar() {
    return (
        
    )
}

export default Navbar;
```

👉 Top tip: It is important you *type* any React code out manually instead of copying and pasting it, as this will help you memorize the syntax.

In `App.js` copy the navbar (lines 7 - 14) then paste them into our `Navbar.js` return statement (between the brackets () )

It should look something like [this](https://github.com/techreturners/learner-materials-intro-to-react/blob/activity-4-example-solution/src/components/Navbar.js)

Save `Navbar.js`

At the top of `App.js` write `import Navbar from './components/Navbar.js'`

Then on line 8 (or thereabouts) write `<Navbar/>` - this needs to be capitalized 

Save `App.js`

Check the browser

Your app should still work and look exactly like it did... 

The difference being you have turned the Navbar into a reusable component, importing it and rendering it in `App.js`! Great work! 

This means that 

1. Our `App.js` file is looking shorter and easier to read
2. Our navbar is now a component that could get reused in different parts of our app if we wanted to

You're ready to move onto [Activity 3](./activity-3.md) 😸




