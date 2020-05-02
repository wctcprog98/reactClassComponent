import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// class App extends React.Component{
//   render() {
//     return (
//       <div>
//         <Header name="Nenye"/>
//         <Greeting />
//       </div>
//     )
//   }
// }

class Header extends Component{
  
  render() {
    
      return (
          <header>
              <p>Welcome, {this.props.name} </p>
       </header>
      )
  }
} 

class Greeting extends Component {
  render() {
      const date = new Date()
    const hours = date.getHours()
    let timeOfDay 
    const styles = {
      fontSize:30
    }

    if (hours < 12) {
      timeOfDay = "morning"
      styles.color = "#ffa500"
    }
    else if (hours >= 12) {
      timeOfDay = "afternoon"
      styles.color = "#ff0000"
    }
    else {
      timeOfDay = "night"
      styles.color = "#0000ff"
    }
      return (
          <div>
              <p>Good {timeOfDay} to you, sir or madam!</p>
          </div>
      )
  }
}

ReactDOM.render(<App />,
  document.getElementById('root')
);
