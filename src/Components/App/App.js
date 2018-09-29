import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
                <select name="source" id="source" className="form-control col-md-3 ">
                  <option value="123">123</option>
                  <option value="124">124</option>
                </select>
                <button className="btn btn-success col-md-3">Translate</button>
              </div>
            </div>

            <textarea name="sourceText" id="sourceText" cols="30" rows="10" placeholder="Enter some text to translate" className="w-100 mt-3 border-0 p-2"></textarea>
          </div>

          <div className="col-md-6 main-container p-3">
            <label htmlFor="target" className="">Target language:</label>
            <select name="target" id="target" className="form-control col-md-3">
              <option value="123">123</option>
              <option value="124">124</option>
            </select>

            <textarea name="sourceText" id="sourceText" cols="30" rows="10" placeholder="" readOnly className="w-100 mt-3 border-0 p-2  "></textarea>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    );
  }
}

export default App;
