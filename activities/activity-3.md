# Activity 3

In the `components` folder you created earlier create another file called `Header.js`

Inside of this file type:

```
function Header() {
    return (

    )
}

export default Header;
```

In App.js copy and paste our `h1` and surrounding `header` element into our new `Header.js` component file (after the return statement, between the braces)

It should look something like [this](https://github.com/techreturners/learner-materials-intro-to-react/blob/activity-4-example-solution/src/components/Header.js)

Save `Header.js`

At the top of  `App.js` import the new Header component:

`import Header from './components/Header'`

Delete our original `<header>` and `<h1>`, replacing them with our new header component:

`<Header/>`

Save `App.js`

Check the browser

Our app should still work and look the same.. but now our Header code has become a reusable component! Oh yeah! 🥳

Move on to [Activity 4](./activity-4.md)