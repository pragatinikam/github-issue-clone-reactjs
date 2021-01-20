import React from "react";
import "../index.css";

const IssueHeader = () => {
    return(
      
        <div className="issue-header">
            
            <div className="number-issues-container">
                <a className="number-issues-open" href="/"> 
                    
                    <input type="checkbox" data-check-all="" aria-label="Select all issues" autocomplete="off"></input>
                        
                        <div className="header-svg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg"
                                viewBox="0 0 16 16"
                                version="1.1"
                                aria-hidden="true"
                                >
                                <path
                                fill-rule="evenodd"
                                d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
                                > 
                                </path>
                                </svg>
                        </div>
                        
                    <div className="issues-status-count">460 Open</div>
                </a>  
                  
                <a className="number-issues-closed" href="/">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg"
                    viewBox="0 0 16 16"
                    version="1.1"
                    aria-hidden="true"
                    >
                    <path
                    fill-rule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                    >
                    </path>
                    </svg>
                    <div className="issues-status-count">8,973 Closed</div>
                </a>
            </div>
      
            <div className="issue-header-tabs-container">
                <a href="/" className="issue-header-button issue-header-button-author ">
                Author<span class="dropdown-caret"></span>
                </a>
                <a href="/" className="issue-header-button issue-header-button-label">
                Label<span class="dropdown-caret"></span>
                </a>
                <a href="/" className="issue-header-button issue-header-button-projects">
                Projects<span class="dropdown-caret"></span>
                </a>
                <a href="/" className="issue-header-button  issue-header-button-milestones">
                Milestones<span class="dropdown-caret"></span>
                </a>
                <a href="/" className="issue-header-button issue-header-button-assignee">
                Assignee<span class="dropdown-caret"></span>
                </a>
                <a href="/" className="issue-header-button issue-header-button-sort">
                Sort<span class="dropdown-caret"></span>
                </a>
            </div>
            
        </div>  
    );
};

export default IssueHeader;