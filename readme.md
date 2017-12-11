# Session Eleven

## Homework

* Spend some quality time with the exercises on [Built with React](http://buildwithreact.com) (do the Tutorial).

## Reading

* http://exploringjs.com/es6/ (specifically http://exploringjs.com/es6/ch_core-features.html#sec_from-constr-to-class and http://exploringjs.com/es6/ch_classes.html#ch_classes)
* Book marking the [Create React App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-stylesheet) notes is also a very good idea. Please skim them.

## ES6 Classes

see `_classes`

### JSX

App.js > Header.js:

1. logo: {logo}: JSX
3. class → className: JSX
4. xhtml style closing tags: JSX

Examine CSS: 

1. injected via Webpack:`<style>`
2. multiple `<style>` tags (advantages?)
3. note prefixing in output

Nesting:

Add `<p>test</p>` above div in Header.js

Comments:

`{/* <img src={logo} className="logo" alt="logo" /> */}` 

<!-- See http://wesbos.com/react-jsx-comments/ -->

Note - to use Emmet run - `ctrl-e`

```
$ create-react-app react-pirates
```

```
$ cd react-pirates
```

```
npm run start
```

Import our fonts.

* public/index.html

```
<link href="https://fonts.googleapis.com/css?family=Pirata+One" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Trade+Winds" rel="stylesheet">
```

Add some formatting in a new directory.

* src/assets/css/app.css:

```
.App-header {
  background-color: #eee;
  height: 150px;
  padding: 20px;
  color: #333;
}
```

* index.css

```
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 100%;
  background: #f6f6f6;
}

h3 {
  text-align: center;
  font-family: 'Trade Winds', cursive;
  font-size: 2rem;
}

```

### Components

In a new components folder.

* src/components/Pirate.js

```
import React, { Component } from 'react';

class Pirate extends React.Component {
  render(){
    return (
      <p>Pirate Component</p>
      )
  }
}

export default Pirate;
```

## Properties

* App.js

```
import Pirate from './components/Pirate';
```

In the render function:

```
<Pirate tagline="Ahoy there Matey!" />
```

* Pirate.js

```
import React, { Component } from 'react';

class Pirate extends React.Component {
  render(){
    return (
      <p>{this.props.tagline}</p>
      )
  }
}

export default Pirate;

```

In src/assets/css add a new css file.

* Pirate.css

```
.pirate ul {
  display: flex;
  flex-direction: row;
  list-style: none;
}

.pirate ul li {
  flex: 1;
}
```

Import it into the Pirate component and add any needed className to the jsx.

* Pirate

`import '../assets/css/Pirate.css'`

### React tool

Inspect using React tool.

Examine component structure (nesting). Use the form. Examine and map each component.

Native: `$0`

React: `$r`

Select <Pirate />

Console: `$r.props`

## Create a Header component

Note link to image and commented line.

* Header

```
import React, { Component } from 'react';
import logo from '../assets/img/anchor.svg';

class Header extends React.Component {
  render(){
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Pirate List</h2>
      </div>)
    }
  }

export default Header;
```

Create an assets/img directory with the svg file.

Import Header.js into App.js

<!-- and load some sample data. -->

* App.js:

`import Header from './components/Header';`

Add it to the render method.

* App.js

```
return (
  <div className="App">
  <Header />

  ...

  )
```

Add css for the header.

* Header.css

```
.logo {
    height: 200px;
}

.header {
    height: 220px;
    padding: 20px;
    color: #333;
    background: #bada55 url(../img/hero.png) 100% 50% no-repeat;
    background-size: 50%;
}

h1 {
    font-family: 'Pirata One', cursive;
    font-size: 5rem;
    color: #C90813;
    line-height: 1.1;
}
```

Import in into the Header component.

* Header

`import '../assets/css/Header.css';`

Note that to remove the spinning anchor we must use jsx comments:

* Header

```
{/* <img src={logo} className="logo" alt="logo" /> */}
```

Remove the import as well.



<!-- `import samplePirates from './sample-pirates';` -->


## Adding Pirates

New component: PirateForm.js:

```
import React, { Component } from 'react';
import AddPirateForm from './AddPirateForm';

class PirateForm extends React.Component {
  render(){
    return (
      <div>
      <h3>Pirate Forms</h3>
      <AddPirateForm />
      </div>
      )
  }
}

export default PirateForm;
```

State / Data binding

AddPirateForm.js

```
import React, { Component } from 'react';

class AddPirateForm extends React.Component {
  render(){
    return (
      <form>
      <input type="text" placeholder="Pirate name" />
      <input type="text" placeholder="Pirate vessel" />
      <input type="text" placeholder="Pirate weapon" />
      <button type="submit">Add Pirate</button>
      </form>
      )
  }
}

export default AddPirateForm;
```

* App.js

```
import PirateForm from './PirateForm';

...

<PirateForm />
```

## Method - createPirate

`<form onSubmit={(e) => this.createPirate(e)}>`:

```
return (
  <form onSubmit={(e) => this.createPirate(e)}>
  <input type="text" placeholder="Pirate name" />
  <input type="text" placeholder="Pirate vessel" />
  <input type="text" placeholder="Pirate weapon" />
  <button type="submit">Add Pirate</button>
  </form>
  )
```

In AddPirateForm (a method on the class):

```
createPirate(event) {
  event.preventDefault();
  console.log('make a pirate')
}
```

Test

Add `refs` to the form to store references to the input:

```
<form onSubmit={(e) => this.createPirate(e)}>
<input ref={(input) => this.name = input } type="text" placeholder="Pirate name" />
<input ref={(input) => this.vessel = input } type="text" placeholder="Pirate vessel" />
<input ref={(input) => this.weapon = input } type="text" placeholder="Pirate weapon" />
<button type="submit">Add Pirate</button>
</form>
```

Go to React dev tools, find AddPirateForm component, $r in the console to see the inputs.

Create a `pirate` object.

* AddPirateForm:

```js
createPirate(event) {
  event.preventDefault();
  const pirate = {
    name: this.name.value,
    vessel: this.vessel.value,
    weapon: this.weapon.value,
  }
  console.log(pirate)
}
```

Test by entering a pirate in the form.

## State / Data binding

In AddPirateForm.js we created a method - createPirate()

And within, a pirate variable:

```
  createPirate(event){
    event.preventDefault()
    console.log('making a pirate')
    const pirate = {
      name: this.name.value,
      vessel: this.vessel.value,
      weapon: this.weapon.value
    }
    console.log(pirate)
  }
```

Added [refs](https://facebook.github.io/react/docs/refs-and-the-dom.html) to the form to store references to the input.

```
<input ref={(input) => this.name = input } type="text" placeholder="Pirate name" />
```

When we submit we need to put the contents of the form into our const pirate object.

```
<form onSubmit={(e) => this.createPirate(e)}>
<input ref={(input) => this.name = input } type="text" placeholder="Pirate name" />
<input ref={(input) => this.vessel = input } type="text" placeholder="Pirate vessel" />
<input ref={(input) => this.weapon = input } type="text" placeholder="Pirate weapon" />
<button type="submit">Add Pirate</button>
</form>
```

We are running createPirate() but not doing anything with it.


### Get the pirate object into state. 

The key difference between props and state is that state is internal and controlled by the component itself, while props are external and controlled by whatever renders the component. - [ref](http://buildwithreact.com/tutorial/state)

We initialize state in App.js:

```
class App extends Component {

  constructor() {
    super();
    this.state = {
      pirates: {}
    }
  }
```

React tools, find App, view state.

And add to App.js:

```
  addPirate(pirate){
    //update state
    const pirates = {...this.state.pirates}
    //add new pirate
    const timestamp = Date.now()
    pirates[`pirate-${timestamp}`] = pirate
    //set state
    this.setState({ pirates: pirates })
  }
```

For spread operator see:

`reference / spread-operator.html`


Bind the add form to our app.

App.js:

```
  constructor() {
    super();
    this.addPirate = this.addPirate.bind(this);
    this.state = {
      pirates: {}
    }
  }
```

#### Review

Review super in classes:

`reference / extending-classes.html`

Note - bind() - creates a new function that, when called, has its `this` keyword set to the provided value.

See: 

`reference / bind / index.html`

`reference / bind / button.html`


### State

Our createPirate function in AddPirateForm is called and works but it does not save the new pirate anywhere. 

We now have an addPirate function in App.js:

```
  addPirate(pirate){
    //update state
    const pirates = {...this.state.pirates}
    //add new pirate
    const timestamp = Date.now()
    pirates[`pirate-${timestamp}`] = pirate
    //set state
    this.setState({ pirates: pirates })
  }
```

Unlike the createPirate function, it stores the new pirate in state. Test with App in React tool:

`$r.addPirate({name: 'joe'})`


### Passing Props

Let's focus on the addPirate function first.

App.js > PirateForm > AddPirateForm

We need to make the addPirate function available to AddPirateForm with props.

* To `PirateForm` from `App.js`:

`<PirateForm addPirate={this.addPirate} />`:  

```
  render() {
    return (
      <div className="App">
      <Header />
      <Pirate tagline="Ahoy there matey!" />
      <PirateForm addPirate={this.addPirate} />
      </div>
      );
  }
```

Examine PirateForm props in React tool.

Only one level more! Pass the prop to AddPirateForm.

* To `AddPirateForm` from `PirateForm`:

`<AddPirateForm addPirate={this.props.addPirate} />`:

```
import React, { Component } from 'react';
import AddPirateForm from './AddPirateForm'

class PirateForm extends Component {
  render() {
    return (
      <div className="pirate-form">
      <h3>Pirate Forms</h3>
      <AddPirateForm addPirate={this.props.addPirate} />
      </div>
      )
  }
}

export default PirateForm;
```

Examine AddPirateForm props

Since there is no reference to AddPirateForm in App.js we needed to perform this props pass via PirateForm.

We will use createPirate to develop a pirate instance and them pass the result to addPirate to store the instance in state.

* AddPirateForm:

`this.props.addPirate(pirate);`

```
  createPirate(event) {
    event.preventDefault();
    const pirate = {
      name: this.name.value,
      vessel: this.vessel.value,
      weapon: this.weapon.value,
    }
    this.props.addPirate(pirate);
  }
```

#### Using the form to add a pirate.

We have refs on the input fields. When we click "Add Pirate" the form still holds the data so we need to empty it out. 

Empty the form with a [ref](https://facebook.github.io/react/docs/refs-and-the-dom.html#adding-a-ref-to-a-class-component).

* AddPirateFrom

`<form ref={ (input)=>this.pirateForm = input } onSubmit={(e) => this.createPirate(e)}>`:

```
    return (
      <form ref={(input)=>this.pirateForm = input } onSubmit={(e) => this.createPirate(e)}>
      <input ref={(input) => this.name = input } type="text" placeholder="Pirate name" />
      <input ref={(input) => this.vessel = input } type="text" placeholder="Pirate vessel" />
      <input ref={(input) => this.weapon = input } type="text" placeholder="Pirate weapon" />
      <button type="submit">Add Pirate</button>
      </form>
      )
```

and `this.pirateForm.reset();`:

```
createPirate(event) {
    event.preventDefault()
    console.log('make a pirate')
    const pirate = {
      name: this.name.value,
      vessel: this.vessel.value,
      weapon: this.weapon.value,
    }
    this.props.addPirate(pirate)
    this.pirateForm.reset()
  }
```

The form should now empty and the addPirate function is called to store our pirate in state.

* AddPirateFrom.css

```css
form {
  display: flex;
  flex-direction: column;
}

input {
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem;
}

button {
  background: #007eb6;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem;
  width: 40%;
  margin-left: auto;
  margin-right: 0.5rem;
  border-radius: 4px;
}
```

Import the css into AddPirateForm.

* AddPirateForm

`import './css/AddPirateForm.css'`

## Displaying Pirates

We can add pirates to state but cannot see them in the UI.

* Pirate.js:

```
import React, { Component } from 'react'
import './css/Pirate.css'

class Pirate extends React.Component {
  render(){
    return (
      <ul>
        <li>Pirate</li>
      </ul>
      )
  }
}

export default Pirate;
```

Unlike Angular there are no built in loops, repeats etc. You must use regular JS. We need a replacement for ng-repeat to make pirate components.

### Sample Pirates

1: Using a JSON Array in Pirate.js

Examine sample json file in the `data` folder in `src` using:

JSON.stringify(<data-that-you-want-to-stringify>,<replacer-function-null>,<indentation>)

[JSON stringify vs JSON parse](http://stackoverflow.com/questions/17785592/difference-between-json-stringify-and-json-parse)

Pirate.js:

`import piratesFile from '../data/sample-pirates-array'`:

`<pre><code>{ JSON.stringify(piratesFile, null, 4)}</code></pre>`:

```js
import React, { Component } from 'react'
// import './css/Pirate.css'
import piratesFile from '../data/sample-pirates-array'

class Pirate extends React.Component {
  render(){
    return (
      <ul>
        <li>
          <pre><code>{ JSON.stringify(piratesFile, null, 4)}</code></pre>
        </li>
      </ul>
      )
  }
}

export default Pirate;
```

With Array.map():

array.map(<function that applies to each item in the array>) to create components

Example: Doubling numbers:

```
> var numbers = [1,5,8]
> numbers
> numbers.map(function(number){return number * 2})
> const double = function(number){return number * 2}
> double(5)
> numbers.map(double)
```

See also [session-1](https://github.com/mean-spring-2017/session-1/blob/master/_Arrays/array-methods.html)

Pirate.js:

```
render(){
  return (
    <ul>
        {piratesFile.pirates.map(function(pirate){
          return (
            <li>
            <h4>{pirate.name}</h4>
            </li>
          )
        })}
    </ul>
    )
}
```

2: With an Object

Switch the json out for the .js version of samples, remove the import (`import piratesFile from './data/sample-pirates'`) and rollback to:

```
class Pirate extends React.Component {
  render(){
    return (
      <ul>
      <li>Pirate</li>
      </ul>
      )
  }
}
```

This time in `App.js` :

```
import piratesFile from './data/sample-pirates-object'
```

(Check for errors - might need to recompile by stopping and starting npm.)

```
import piratesFile from './data/sample-pirates-object'
console.log(piratesFile)
```

### Object.keys()

For this version of sample-pirates we cannot directly use .map which is a method on the Array prototype - not the Object prototype. 

Use `Object.keys()`  [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

```
> var arr = [1,2,3]
> Object.keys(arr)
```

We will 'massage' the <Pirate /> component in App.js to enable the use of .map().

App.js:

```
<ul>
{
  Object.keys(this.state.pirates)
  .map( key => <Pirate key={key} /> )
}
</ul>
```

and use the key to pass a details prop to the Pirate component:

```
<ul>
{
  Object.keys(this.state.pirates)
  .map( key => <Pirate key={key} details={this.state.pirates[key]} /> )
}
</ul>
```

Pirate.js:

```
render(){
  return (
    <ul>
      <li>{this.props.details.name}</li>
    </ul>
    )
}
```

Create a new pirate using the form.

Simplify and add a few more properties:

```
  render(){
    const {details} = this.props;
    return (
      <ul>
        <li>{details.name}</li>
        <li>{details.weapon}</li>
        <li>{details.vessel}</li>
      </ul>
      )
  }
```

Test again using the form.

Examine diffs in Code.


### Load sample data via PirateForm

PirateForm:

`<button onClick={this.props.loadSamples}>Load Sample Pirates</button>`:

```
  render() {
    return (
      <div className="pirate-form">
      <h3>Pirate Forms</h3>
      <AddPirateForm addPirate={this.props.addPirate} />
      <button onClick={this.props.loadSamples}>Load Sample Pirates</button>
      </div>
      )
  }
```

App.js:

We've already imported: `import piratesFile from './sample-pirates-object'`

```
loadSamples(){
  this.setState({
    pirates: piratesFile
  })
}
```

```
  constructor() {
    super();
    this.addPirate = this.addPirate.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.state = {
      pirates: {}
    }
  }
```

We can use a button in App.js:

```
<button onClick={this.loadSamples}>Load Sample Pirates</button>
```

Delete and try in `PirateForm`.

Add `loadSamples={this.loadSamples}` to props.

* App.js

`<PirateForm addPirate={this.addPirate} loadSamples={this.loadSamples} />`:

```
    return (
      <div className="App">
      <Header />
      {
        Object
        .keys(this.state.pirates)
        .map( key => <Pirate key={key} details={this.state.pirates[key]} /> )
      }


<!-- ??? -->
      <PirateForm addPirate={this.addPirate} />
<!-- ??? -->


      </div>
      )
```

PirateForm (done):

```
class PirateForm extends Component {
  render() {
    return (
      <div className="pirate-form">
      <h3>Pirate Form Component</h3>
      <AddPirateForm addPirate={this.props.addPirate} />
      <button onClick={this.props.loadSamples}>Load Sample Pirates</button>
      </div>
      )
  }
}
```

Examine CSS to layout properly.

```
class Pirate extends Component {
  render(){
    const {details} = this.props;
    return (
      <div className="pirate">
      <ul>
        <li>{details.name}</li>
        <li>{details.weapon}</li>
        <li>{details.vessel}</li>
      </ul>
      </div>
      )
  }
}
```


### Remove Pirate

New function in App:

```
removePirate(key){
  const pirates = {...this.state.pirates}
  delete pirates[key]
  this.setState({pirates})
}
```

Constructor in App:

```
this.removePirate = this.removePirate.bind(this)
```

$r (App)

```
$r.removePirate('pirate1')
```

On Pirate in App `removePirate = {this.removePirate}`:

```
{
  Object
  .keys(this.state.pirates)
  .map( key => <Pirate key={key} 
    details={this.state.pirates[key]} 
    removePirate={this.removePirate} /> )
}
```

Pass the prop to `PirateForm` from App:

```
<PirateForm 
addPirate={this.addPirate} 
removePirate={this.removePirate} 
loadSamples={this.loadSamples} />
```

* PirateFrom 

`<button onClick={() => this.props.removePirate('pirate1')}>RemovePirate</button>`

This only removes pirate1.

Add it to the `Pirate` component.

Pirate.js:

```
return (
  <div className="pirate">
  <ul>
    <li>{details.name}</li>
    <li>{details.weapon}</li>
    <li>{details.vessel}</li>
    <button onClick={() => this.props.removePirate('pirate1')}>RemovePirate</button>
  </ul>
  </div>
  )
```

N.B. You cannot access a key inside a component

Load pirates and examine the state in App.

Pass it along as part of the Pirate component `index={key}` in App.

* App

```
{
  Object
  .keys(this.state.pirates)
  .map( key => <Pirate key={key} 
    index={key}
    details={this.state.pirates[key]} 
    removePirate={this.removePirate} /> )
}
```

Pirate.js (only allowable elment as child of <ul> is <li>).

* Pirate

```
return (
  <ul>
    <li>{details.name}</li>
    <li>{details.weapon}</li>
    <li>{details.vessel}</li>
    <li><button onClick={() => this.props.removePirate(this.props.index)}>X</button></li>
  </ul>
  )
```

Now we can add and delete any pirate. 

### Persisting the Data

Create an account at https://firebase.google.com/

Create a new project called firstname-lastname-pirates

Go to the empty database (left hand menu)

Go to rules:

```
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

and Publish.

App.js state.

in src create `base.js`

```
import Rebase from 're-base'

const base = Rebase.createClass({
  
})
```

[Rebase](https://www.npmjs.com/package/rebase) is a simple utility that we are going to need to massage strings.

`$ npm install rebase --save`

Add domain, database URL, API key.

In Firebase click on Overview > Add Firebase to your webapp

We need:

```
apiKey: "AIzaSyAHnKw63CUBAqSuCREgils_waYJ0qwpGiU",
authDomain: "daniel-deverell-pirates.firebaseapp.com",
databaseURL: "https://daniel-deverell-pirates.firebaseio.com",
```


```
import Rebase from 're-base'

const base = Rebase.createClass({
  apiKey: "AIzaSyAHnKw63CUBAqSuCREgils_waYJ0qwpGiU",
  authDomain: "daniel-deverell-pirates.firebaseapp.com",
  databaseURL: "https://daniel-deverell-pirates.firebaseio.com",
})

export default base
```

Import into App.js

`import base from './base'`

Component Lifecycle: component will mount

```
componentWillMount(){
  this.ref = base.syncState(`daniel-deverell-pirates/pirates`, {
    context: this,
    state: 'pirates'
  })
}
```

```
componentWillUmount(){
  base.removeBinding(this.ref)
}
```

Load pirates and examine the Firebase HTML5 websockets

To delete a pirate we need to accomodate Firebase:

```
removePirate(key){
  const pirates = {...this.state.pirates}
  pirates[key] = null
  this.setState({pirates})
}
```

Pirate.js

```
const myColor = '#C90813'

const myStyle={
  color: myColor
}
```

Examine Code. Commit and push to github.

///// Stop here

### Routing

https://reacttraining.com/react-router/web/guides/quick-start

`> npm install react-router-dom --save`

index.js

```
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class Main extends React.Component {
  render() {
    return (
    <Router>
    <div>
      <Route exact path="/" component={App}/>
    </div>
  </Router>
      )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
  );
```

### Pirate Detail

Use Header.js as a template

```
import React, { Component } from 'react'

class PirateDetail extends Component {
  render() {
    return (
      <div className="pirate-detail">
        <h1>Pirate detail</h1>
      </div>
      )
  }
}

export default PirateDetail;
```

`<Route path="/pirate/:pid" component={PirateDetail} />`:

```
import PirateDetail from './PirateDetail';

class Main extends React.Component {
  render() {
    return (
    <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/pirate/:pid" component={PirateDetail} />
    </div>
  </Router>
      )
  }
}
```

We probably want the routing to occur in App.js to keep the header and replace <Pirate /> and PirateForm />






### Validation Homework

Note the dependencies in package.json.

`npm install`

`npm run boom!`

Note the classes Angular adds to the input fields as they are manipulated by the user in `static/partials/pirate-list.template.html`

Give the form a name:

`<form ng-submit="addPirate(pirate)" name="addform">`

Disable the submit button:

`<button ng-disabled="addform.$invalid" type="submit">Add Pirate</button>`

Note: you can visually identify the button as being disabled using:

```css
button[disabled] {
  background: #bbb;
  cursor: not-allowed;
  border: none;
}
```

https://www.w3schools.com/csSref/playit.asp?filename=playcss_cursor&preval=not-allowed

Give the input a name. Add a paragraph with ng-show conditions.

```html
<div class="form-group">
  <label>
    <input ng-model="$ctrl.pirate.name" required ng-minlength="6" placeholder="Name" name="pname" />
    <svg viewBox="0 0 20 20" class="icon">
      <path d="M0 0 L10 10 L0 20"></path>
    </svg>
  </label>
  <p class="error" ng-show="addform.pname.$invalid && addform.pname.$touched"> A name must have at least 6 characters.</p>
</div>
```

Note the svg. 

```css
.error {
  color: red;
} 

label {
  display: flex;
  height: 2rem;
}

input {
  width: 100%;
  height: 1.6rem;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid hsl(0%, 0%, 85%);
  order: 1;
}
```

https://www.sitepoint.com/closer-look-svg-path-data/

Ref: this video from [frontend.center](https://www.youtube.com/watch?v=af4ZQJ14yu8).

```
input:focus {
  outline: none;
  border-color: hsl(0%, 0%, 25%)
}

.icon {
  width: 1rem;
  opacity: 0;
  transition: all 0.5s;
  transform: translateX(-100%)
  // stroke-dasharray: 0, 20;
  // stroke-dashoffset: -14.642;
}

.icon path {
  stroke: black;
  fill: none;
  stroke-width: 1px;
}

input:focus + .icon {
  opacity: 1;
  transform: translateX(0)
  // stroke-dasharray: 28.284, 20;
  // stroke-dashoffset: 0;
}

.ng-valid.ng-not-empty {
  border-color: hsl(166, 72%, 40%)
}

.ng-invalid.ng-dirty {
  border-color: hsl(0, 100%, 40%)
}

```

Using the dash effect:

```
.icon {
  width: 1rem;
  // opacity: 0;
  transition: all 0.5s;
  // transform: translateX(-100%)
  stroke-dasharray: 0, 20;
  stroke-dashoffset: -14.642;
}

.icon path {
  stroke: black;
  fill: none;
  stroke-width: 1px;
}

input:focus + .icon {
  // opacity: 1;
  // transform: translateX(0)
  stroke-dasharray: 28.284, 20;
  stroke-dashoffset: 0;
}
```


See https://www.w3schools.com/angular/angular_validation.asp for a complete set of examples for Angular validation.






### Notes










































