# Activity 4 - Loop de loop!

In `App.js` create a forLoop to render your Cat Card

Hint: To insert JavaScript into our HTML or 'JSX' you'll need to write your JavaScript code inside a pair of curly braces { }

<details>
<summary>Click here to see the answer</summary>
<pre>

```
    {cats.map(cat => {
    return (
        <CatCard />
    )
    })}
```

Ok let's break it down. 🔨

- We first told React we were going to insert some JavaScript into our `App.js` return statement by declaring a pair of curly bois (braces)

- We took our cat data, 'cats' and used the `.map()` method to loop through our cats

- For every cat object in our cat data array, we return a `<CatCard />`
</pre>
</details>





Move on to [Activity 5](./activity-5.md)
