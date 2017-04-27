import React, {Component} from 'react'

class Main extends Component{


  toggle(){

  }

  destroyString (index){
    this.props.destroy(index)
    console.log(index)
  }


  render() {
    return(

        <section className="main">
          <input className="toggle-all" type="checkbox"/>
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {this.props.todos.map((todos, index) => {
              return (
                <li className={todos.complete ? "completed":null} key={index}>
                  <div className="view">
                    <input className="toggle" type="checkbox" onClick={this.props.toggle.bind(this, todos)}
                    checked={todos.complete}/>
                    <label>{todos.task}</label>
                    <button className="destroy" onClick={this.destroyString.bind(this, index)}></button>
                  </div>
                  <input className="edit" value="Create a TodoMVC template"/>
                </li>
              )
            })}
          </ul>
        </section>

    )
  }
}

export default Main;
