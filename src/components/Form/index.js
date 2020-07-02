import React, { Component } from "react";

class Form extends Component {
    //setting initial state
    state = {
        name: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        //updating state
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
              <form className="form">
                <input
                  value={this.state.name}
                  name="name"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Search"
                />
               </form>
            </div>
          );
        }

}

export default Form;