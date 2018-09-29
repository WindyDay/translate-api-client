import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {API_URL} from '../../Const/config.json'
class App extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      target: 'en',
      source: 'auto',
      output: '',
    }
  }

  componentDidMount() {

  }

  translate = () => {
    const { text, target, source } = this.state;
    axios.post(API_URL, {
      text, target, source
    })
      .then(res => {
        this.setState({ output: res.data && res.data.output }, ()=>console.log(this.state.output))
      })
      .catch(err => {
        console.error(err);
        this.setState({ output: err })
      })
  }

  onChangeSelect = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="justify-content-center d-flex">
          <h1 className="text-center font-weight-normal my-4">Translate</h1>
        </div>

        <div className="row body-box p-2">
          <div className="col-md-6 main-container p-3">
            <label htmlFor="source" className="">Source language:</label>
            <div>
              <div className="d-flex justify-content-between">
                <select name="source" id="source" className="form-control col-md-4" onChange={this.onChangeSelect} value={this.state.source}>
                  <option value="auto">Auto detect</option>
                  <option value="fr">French</option>
                  <option value="en">English</option>
                </select>
                <button className="btn btn-success col-md-3" onClick={this.translate}>Translate</button>
              </div>
            </div>

            <textarea name="sourceText" id="sourceText" cols="30" rows="10" placeholder="Enter some text to translate" className="w-100 mt-3 border-0 p-2" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })}></textarea>
          </div>

          <div className="col-md-6 main-container p-3">
            <label htmlFor="target" className="">Target language:</label>
            <select name="target" id="target" className="form-control col-md-4" onChange={this.onChangeSelect} value={this.state.target}>
              <option value="en">English</option>
              <option value="vi">Vietnamese</option>
            </select>

            <textarea name="output" id="output" cols="30" rows="10" className="w-100 mt-3 border-0 p-2" value={this.state.output}></textarea>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    );
  }
}

export default App;
