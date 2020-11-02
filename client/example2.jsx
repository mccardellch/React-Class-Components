class HelloUser extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: props.username,
    };
    
    //for this function, make the 'this' keyword look at entire class
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  
  handleNameChange(e){
    //update state based on the object that is passed in
    this.setState({ username: e.target.value });
  }
  
  render() {
    return (
      <div>
        Hello {this.state.username}
        <p>Change Name:</p>
        <input type="text" value={this.state.username} onChange={this.handleNameChange} />
      </div>
    );
  };
}

const init = () => {
  ReactDOM.render(
    <HelloUser username='Jimbo'/>,
    document.getElementById('app')
  );
}

window.onload = init;