1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- The state of a the whole application is stored in a single store which serves as the single source of truth. Actions are objects that describe wht happened and change the state, reducers are functions that take the previous state and an action and return the new state.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
- Application state is global and any component in the app has access to it while component state only lives on that particular component.
1.  What is middleware?
- Middleware is application that allows us to connect different applications together. They allow us to join the output of an application to the input of another.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
- Redux Thunk is middleware that lets you call action creators that return a function instead of an action object.
1.  Which `react-redux` method links up our `components` with our `redux store`?
- The connect method