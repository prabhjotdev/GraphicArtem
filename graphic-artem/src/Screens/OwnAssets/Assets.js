import React, { Component } from "react";
import Navbar from "../NavBar/Navbar";
import "./Assets.css";

class Assets extends Component {
  render() {
    return (
      <div class="main-panel">
        <Navbar/>
        <div class="content">
          <div class="container-fluid">
            <div class="card">
              <div class="row">
                <div class="card-header text-center">
                  <h4 class="card-title">Asset Management</h4>
                  <p class="card-category">Managing assets</p>
                </div>
                <div class="card-body">
                  <div class="container-fluid">
                    <div class="input-group">
                      <input
                        class="form-control border-end-0 border rounded-pill"
                        type="text"
                        placeholder="Search"
                        id="example-search-input"
                      />
                      <span class="input-group-append">
                        <button
                          class="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3"
                          type="button"
                        >
                          <i class="fa fa-search"></i>
                        </button>
                      </span>
                    </div>
                    <table class="table table-hover table-striped">
                      <thead>
                        <tr class="container">
                          <div class="row">
                            <th class="col"></th>
                            <th class="col"></th>
                            <th class="col"></th>
                          </div>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Document 1</td>
                          <td>
                            <button type="btn" class="btn btn-secondary">
                              EDIT
                            </button>
                          </td>
                          <td>
                            <button type="btn" class="btn btn-danger">
                              DELETE
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Document 2</td>
                          <td>
                            <button type="btn" class="btn btn-secondary">
                              EDIT
                            </button>
                          </td>
                          <td>
                            <button type="btn" class="btn btn-danger">
                              DELETE
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Document 3</td>
                          <td>
                            <button type="btn" class="btn btn-secondary">
                              EDIT
                            </button>
                          </td>
                          <td>
                            <button type="btn" class="btn btn-danger">
                              DELETE
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Document 4</td>
                          <td>
                            <button type="btn" class="btn btn-secondary">
                              EDIT
                            </button>
                          </td>
                          <td>
                            <button type="btn" class="btn btn-danger">
                              DELETE
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <btn class="btn btn-primary float-right">Create Folder</btn>
                    <h5>Upload Type</h5>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                        checked="checked"
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        JPEG
                      </label>
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineRadio2">
                        PNG
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineRadio2">
                        Mp3
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineRadio2">
                        Doc
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineRadio2">
                        PDF
                      </label>
                    </div>
                    <br />
                    <label for="formFileDisabled" class="form-label">
                      Enabled
                    </label>
                    <input
                      class="form-control"
                      type="file"
                      id="formFileDisabled"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Assets;
