import React, {Component, useEffect, useState} from "react";
import "../index.css";

class Issues extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      }
    }
  
    async componentDidMount() {
      fetch('https://api.github.com/repos/facebook/react/issues')
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json,
        })
      })
    }
  
    render() {
      return (
        <div>          
            {this.state.data.map(row => 
                <div className="issue-row">
                    <input type="checkbox" data-check-all="" aria-label="Select all issues" autocomplete="off"></input>
                    <div className="svg-and-issue">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg open-issue-svg"
                        viewBox="0 0 16 16"
                        version="1.1"
                        aria-hidden="true"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
                        ></path>
                        </svg>
                    </div>
                   
                    <div  key={row._id}>
                    <h4 className="issue-title">{row.title} </h4>
                        <p class="issue-creator">#{row.number} opened on {row.created_at} by {row.user.login}</p>
                    </div>
                </div>
            )}
        </div>
      )
    }
}

export default Issues;