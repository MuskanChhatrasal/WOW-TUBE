import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/authContext";
import { CategoryProvider } from "./Context/categoryContext";
import { VideoProvider } from "./Context/videoContext";
import { SingleVideoProvider } from "./Context/singleVideoContext";
import { WatchLaterProvider } from "./Context/watchLaterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CategoryProvider>
          <WatchLaterProvider>
            <VideoProvider>
              <SingleVideoProvider>
                <App />
              </SingleVideoProvider>
            </VideoProvider>
          </WatchLaterProvider>
        </CategoryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
