import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY= "AIzaSyCyXaeG3lixO9UwjnAE5iIjehk3qP9WbjI";
// create a new component, this component shoud produce
// some html
class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: []}
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      //console.log(data);
      this.setState({videos});
      //this.setState({ videos: videos});
    });
  }

  // the parent App component is passing props (videos to VideoList [child component])
  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos= { this.state.videos } />

      </div>
    );

  }
}
//Take this component's generated HTML and put it
//on the page ( in the DOM)
//React.render(App);
ReactDOM.render(<App />, document.querySelector('.container'));
