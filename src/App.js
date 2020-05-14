import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateNewItem from './CreateNewItem';
import ItemList from './ItemList';
import DeleteLastItem from './DeleteLastItem';

class App extends React.Component {
  state = {
    items: [],
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  handleAddItem = item => {
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  };

  handleDeleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <CreateNewItem
    		handleChange={ this.handleChange }
			onAddItem={ this.handleAddItem }
    	/>

        <DeleteLastItem 
			buttonDisabled={ this.noItemsFound }
			handleDelete={ this.handleDeleteLastItem }
		/>

        <p className="items">Items</p>
        <ItemList
			items={ this.state.items }
		/>
      </div>
    );
  }
}

export default App;
