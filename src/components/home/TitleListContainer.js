import React, { Component } from 'react';
import TitleListItem from './TitleListItem';
import axios from 'axios';

class TitleListContainer extends Component {
  apiKey = 'KxVIgO29rrHrqCAkQSzCfCOxyM9eDMOj';
  // apiKey = 'aUhPqNQX1V9W5wSNJ9J0FOaQdvwgHH7O';

  state = {
    data: {},
    mounted: false
  }

  loadContent = () => {
    // const requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.apiKey;
    // fetch(requestUrl, { mode: 'cors' }).then(response => response.json()).then(json => {
    //     console.log('data', json)
    //     this.setState({
    //         data: json
    //     })
    // }).catch(error => console.log(error.messgae))

    const { data } = axios.get('http://api.giphy.com/v1/gifs/search?q=', {
      params: {
        tag: this.props.url,
        api_key: this.apiKey
      }
    });
    console.log(data);
    this.setState({
      data: data
    })

    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = () => {
    //     if (xhr.readyState == 4 && xhr.status == 200) {
    //         console.log(xhr.responseText);
    //         this.setState({
    //             data: xhr.responseText
    //         })
    //     }
    // }
    // xhr.open("GET", 'http://api.giphy.com/v1/gifs/search?q=' + this.props.url + '&api_key=' + this.apiKey + '&limit=5', true); // true for asynchronous
    // xhr.send();
  }

  componentDidMount() {
    this.loadContent();
    this.setState({
      mounted: true
    })
  }

  componentWillUnmount() {
    this.setState({
      mounted: false
    })
  }

  render() {
    if (this.state.data) {
      console.log('state ' + JSON.stringify(this.state.data));
      var titles = this.state.data.data.map((gif) => {
        var backDrop = gif.images.orginal.url;
        console.log(backDrop);
        var name = gif.name
        console.log(name);

        return (
          <TitleListItem key={gif.id} title={name} score={5} overview={kissing} backdrop={backDrop} />
        );

      });
    } else {
      var titles = '';
    }
    return (
      <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">
            {titles}
          </div>
        </div>
      </div>
    )
  }
};

export default TitleListContainer;