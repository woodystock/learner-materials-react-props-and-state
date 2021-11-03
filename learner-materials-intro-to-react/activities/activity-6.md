# Activity 6 - extension exercise

Your React app should now have lots of nice, reusable components 

Fantastic work! 🔥

After componentifying (is that a word?) the starter code there might be a few places you've spotted where we could add even more components. Components inside of components even! 🤯

One example where we could create more components might be in our Navbar component. 

```
function Navbar() {
    return (
        <nav className="nav__container nav sticky content">
            <ul className="nav__container nav ul">
                <li><a className="links" href="home">Home</a></li>
                <li><a className="links" href="mews">Mews</a></li>
                <li><a className="links" href="contact">Contact</a></li>
                <li><a className="links" href="https://www.cats.org.uk/sponsor">About</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
```

Although this works perfectly well, whenever we see repetition in code it is usually an indicator we could D.R.Y things out...

## Food for thought 🌮 🧠

Looking at the Navbar, are there any repeating patterns here that could be stripped out into further, smaller components?

Is there anywhere else in our project we could reuse these components or do something similar? 

What would be a problem with stripping out elements into smaller components here? Hint: Some things are the same, but what would we do about the parts that change like the link text?

Great work on getting this far! In the next session we will be answering some of the above questions and covering Props and State 🙌



