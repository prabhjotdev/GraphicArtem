import React, { Component } from "react";
import "./Chat.css";
import Navbar from "../NavBar/Navbar";

class Chat extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="page-content page-container" id="page-content">
          <div class="padding">
            <div class="row container d-flex justify-content-center">
              <div class="col-md-6">
                <div class="card card-bordered">
                  <div class="card-header">
                    <h4 class="card-title">
                      <strong>Chat</strong>
                    </h4>
                  </div>
                  <div
                    class="ps-container ps-theme-default ps-active-y"
                    id="chat-content"
                    style={{
                      overflow: "scroll !important; height:400px !important;"
                    }}
                  >
                    <div class="media media-chat">
                      {" "}
                      <img
                        class="avatar"
                        src="https://img.icons8.com/color/36/000000/administrator-male.png"
                        alt="..."
                      />
                      <div class="media-body">
                        <p>Hi</p>
                        <p>How are you ...???</p>
                        <p class="meta">
                          <time datetime="2018">23:58</time>
                        </p>
                      </div>
                    </div>
                    <div class="media media-meta-day">Today</div>
                    <div class="media media-chat media-chat-reverse">
                      <div class="media-body">
                        <p>Hiii, I'm good.</p>
                        <p>
                          I need a custom art. Could you help me?
                        </p>
                        <p class="meta">
                          <time datetime="2018">00:06</time>
                        </p>
                      </div>
                    </div>
                    <div class="media media-chat">
                      {" "}
                      <img
                        class="avatar"
                        src="https://img.icons8.com/color/36/000000/administrator-male.png"
                        alt="..."
                      />
                      <div class="media-body">
                        <p>Okay</p>
                        <p>I can help with that.</p>
                        <p class="meta">
                          <time datetime="2018">00:07</time>
                        </p>
                      </div>
                    </div>
                    <div class="media media-chat media-chat-reverse">
                      <div class="media-body">
                        <p>That's awesome!</p>
                        <p class="meta">
                          <time datetime="2018">00:09</time>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="publisher bt-1 border-light">
                    <img
                      class="avatar avatar-xs"
                      src="https://img.icons8.com/color/36/000000/administrator-male.png"
                      alt="..."
                    />
                    <input
                      class="publisher-input"
                      type="text"
                      placeholder="Write something"
                    />
                    <span class="publisher-btn file-group">
                      <i class="fa fa-paperclip file-browser"></i>
                      <input type="file" />
                    </span>{" "}
                    <a class="publisher-btn" href="#" data-abc="true">
                      <i class="fa fa-smile"></i>
                    </a>{" "}
                    <a class="publisher-btn text-info" href="#" data-abc="true">
                      <i class="fa fa-paper-plane"></i>
                    </a>{" "}
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

export default Chat;
