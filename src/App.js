import './App.css';
import RepoHeader from './component/RepoHeader';
import IssueHeader from './component/IssueHeader';
import Issue from './component/Issue';
import SearchBar from './component/SearchBar';
import "./index.css";

const App = () => {
  return (
    <div className="App">
     <RepoHeader />
     <div className="search-and-list-container">
     <SearchBar />
     <div className="list-of-issues">   
       <IssueHeader />
       <Issue />
      </div>
      </div>
    </div>
  );
}

export default App;
