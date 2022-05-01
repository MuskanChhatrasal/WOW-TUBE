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
import { HistoryProvider } from "./Context/historyContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CategoryProvider>
          <HistoryProvider>
            <WatchLaterProvider>
              <VideoProvider>
                <SingleVideoProvider>
                  <App />
                </SingleVideoProvider>
              </VideoProvider>
            </WatchLaterProvider>
          </HistoryProvider>
        </CategoryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
