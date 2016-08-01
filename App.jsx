import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: 'initial data...'
    };

    this.setStateHandler = this.setStateHandler.bind(this);
    this.setForceUpdateHandler = this.setForceUpdateHandler.bind(this);
    this.getDomNodeHandler = this.findDomNodeHandler.bind(this);
    this.setNewNumber = this.setNewNumber.bind(this);
    this.updateState = this.updateState.bind(this);

  };

  updateState(e) {
    this.setState({
      data: e.target.value
    });
  }

  setNewNumber() {
    this.setState({
      data: this.state.data + 1
    });
  }

  setStateHandler() {
    var item = "set state...";
    var newArray = this.state.data;
    newArray.push(item);
    this.setState({data: newArray});
  }

  setForceUpdateHandler() {
    this.forceUpdate();
  }

  findDomNodeHandler() {
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'green';
  }

   render() {
     var myStyle = {
        fontSize: 20,
        color: '#FF0000',
        display: "block"
     };

    //  var rows = this.state.data.map(function(item, i){
    //    return (<h4 key={i} style={myStyle}>{item}</h4>);
    //  });

      return (
         <div>
           <Header/>
           <FormContent myDataProp={this.state.data}
             updateStateProp={this.updateState}></FormContent>
         </div>
      );
   }
}

class FormContent extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.myDataProp}
          onChange={this.props.updateStateProp}/>
        <h2>{this.props.myDataProp}</h2>
      </div>
    );
  }
}

class Content extends React.Component {
  componentWillMount() { console.log('Component WILL MOUNT!')}

  componentDidMount() { console.log('Component DID MOUNT!')}

  componentWillReceiveProps(newProps) { console.log('Component WILL RECIEVE PROPS!')}

  shouldComponentUpdate(newProps, newState) { return true;}

  componentWillUpdate(nextProps, nextState) { console.log('Component WILL UPDATE!');}

  componentDidUpdate(prevProps, prevState) { console.log('Component DID UPDATE!')}

  componentWillUnmount() { console.log('Component WILL UNMOUNT!')}

  render() {
    return (
      <div>
        <h2>{this.props.myNumber}</h2>
      </div>
    );
  }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default App;
