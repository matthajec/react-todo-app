# React Todo App

## Description
React Todo App is a simple app that allows the user to create todo lists. The user can add items, delete items, check off todos, rearrange using drag and drop, and filter by completion.

## Framework(s)/Package(s)
* ReactJS
* PropTypes
* SCSS
* [react-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd)

## Challenge(s)
The biggest challenge I had was implementing the drag and drop feature. The solution was to just learn more about the package I was using for the dropdown (react-beautiful-dnd) by reading the documentation, looking at examples, and going through their quick start guide. After doing that it was relatively easy to implement.

Another challenge was themes. At first I was going to use props, but I ended up going with context instead because if the app were to be expanded it might not be efficient to pass props down the entire tree. I had trouble getting the context to work, so I went back to the react documentation on createContext and useContext to get it working.
