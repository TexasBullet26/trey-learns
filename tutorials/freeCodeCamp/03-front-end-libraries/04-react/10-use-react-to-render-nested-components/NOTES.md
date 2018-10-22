# Use React to Render Nested Components

The last challenge showed a simple way to compose two components:

```javascript
const ParentComponent = () => {
  return (
    <div>
      I am the parent!
    </div>
  );
};

const ChildComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ParentComponent />
      </div>
    );
  }
};
```

There are many different ways you can compose components with React.

**Component composition** - is one of React's powerful features. You break down your UI into its basic building blocks, and those pieces become the components. This helps to seperate the code responsible for the UI from the code responsible for handling your application logic. When you work with React, it is important to start thinking about your user interface in terms of components like the App example in the last challenge:

```javascript
const ExampleComponent = () => {
  return (
    <App>
      <Nav />
      <Content />
      <Footer />
    </App>
  );
};
```
