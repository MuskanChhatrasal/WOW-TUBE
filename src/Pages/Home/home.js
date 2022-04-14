import React from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            marginLeft: "26rem",
            marginTop: "-36rem",
          }}
        >
          <button className="btn-label">All</button>
          <button className="btn-label font-bold">Chineese</button>
          <button className="btn-label font-bold">Spanish</button>
          <button className="btn-label font-bold">Italian</button>
        </div>

        <div className="video-grid">
          <div className="video-card">
            <img
              className="card-img"
              src="https://5.imimg.com/data5/HW/II/SH/SELLER-9770898/veg-thali-500x500.jpg"
            />
            <div className="flex-row card-details">
              <div className="card-title pr-0p5">Thali</div>
              {/* <span onClick={() => setDropdown(!dropdown)}>
              <MoreIcon size={24} />
            </span> */}

              {/* {dropdown && (
              <ul className="card-dropdown">
                <li>
                  <WatchLaterIcon className="mr-0p5" /> Add to watch later
                </li>
                <li>
                  <PlaylistIcon className="mr-0p5" /> Add to playlist
                </li>
              </ul>
            )} */}
            </div>
          </div>

          <div className="video-card">
            <img
              className="card-img"
              src="https://5.imimg.com/data5/HW/II/SH/SELLER-9770898/veg-thali-500x500.jpg"
            />
            <div className="flex-row card-details">
              <div className="card-title pr-0p5">Thali</div>
            </div>
          </div>

          <div className="video-card">
            <img
              className="card-img"
              src="https://5.imimg.com/data5/HW/II/SH/SELLER-9770898/veg-thali-500x500.jpg"
            />
            <div className="flex-row card-details">
              <div className="card-title pr-0p5">Thali</div>
            </div>
          </div>

          <div className="video-card">
            <img
              className="card-img"
              src="https://5.imimg.com/data5/HW/II/SH/SELLER-9770898/veg-thali-500x500.jpg"
            />
            <div className="flex-row card-details">
              <div className="card-title pr-0p5">Thali</div>
            </div>
          </div>

          <div className="video-card">
            <img
              className="card-img"
              src="https://5.imimg.com/data5/HW/II/SH/SELLER-9770898/veg-thali-500x500.jpg"
            />
            <div className="flex-row card-details">
              <div className="card-title pr-0p5">Thali</div>
            </div>
          </div>

          <div className="video-card">
            <img
              className="card-img"
              src="https://5.imimg.com/data5/HW/II/SH/SELLER-9770898/veg-thali-500x500.jpg"
            />
            <div className="flex-row card-details">
              <div className="card-title pr-0p5">Thali</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
