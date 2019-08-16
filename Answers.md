1. What problem does the context API help solve?

Lets us bypass the component hierarchy to pass down state.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux.
What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: the functions that change the state

Reducers: allows us to write pure functions that modify state.

Store: all the changes are stored in the this single Object. It is immutable, and the contains the state for our
application.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?


Application state: Is a global state and should be immutable, redux is designed to handle this.

Component state: is just used to changed localized state inside a component. -might be useful handling temporary inputs
such as forms.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
It allows us to do asynchronous actions inside our actions creator.



5. What is your favorite state management system you've learned and this sprint? Please explain why!


Context API since it's the simplest but redux is way more powerful. Think over time I'll appreciate redux.
