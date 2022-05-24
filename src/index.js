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
import { PlaylistProvider } from "./Context/playlistContext";
import { ToastProvider } from "./Context/toastContext";
import { LikedVideoProvider } from "./Context/likeVideoContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <CategoryProvider>
            <PlaylistProvider>
              <LikedVideoProvider>
                <HistoryProvider>
                  <WatchLaterProvider>
                    <VideoProvider>
                      <SingleVideoProvider>
                        <App />
                      </SingleVideoProvider>
                    </VideoProvider>
                  </WatchLaterProvider>
                </HistoryProvider>
              </LikedVideoProvider>
            </PlaylistProvider>
          </CategoryProvider>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
