import React from "react";
import ReactDOM from "react-dom";

const number = 123;
const developer_gh_name = "@ArielMAJ";
const current_year = new Date().getFullYear();
const random_img_link = "https://picsum.photos/200";
const custom_li_style = { color: "blue", width: "5em", padding: ".2em", border: "2px dashed lightblue", borderRadius: "10px" };

const current_hour = new Date().getHours();
let message = {};

if (current_hour >= 18 || current_hour <= 4) {
  message.text = "Good evening";
  message.style = { color: "blue", borderBottomColor: "blue" };
} else if (current_hour >= 12) {
  message.text = "Good afternoon";
  message.style = { color: "green", borderBottomColor: "green" };
} else {
  message.text = "Good morning";
  message.style = { color: "red", borderBottomColor: "red" };
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={message.style}>
      {message.text}
    </h1>

    <h2>Lorem ipsum</h2>
    <ul>
      <li>dolor</li>
      <li>sit</li>
      <li>amet</li>
      <li>Constant: {number}</li>
      <li style={custom_li_style}>Random: {Math.floor(Math.random() * 100)}</li>
      <li>Curly: {"{{}}"}</li>
    </ul>

    <h2> Flaticon Images </h2>
    <div className="center_imgs">
      <img className="max_width_100px" src="https://cdn-icons-png.flaticon.com/512/763/763789.png" />
      <br />
      <a className="small_font" href="https://www.flaticon.com/free-icons/cat" title="cat icons">
        Cat icons created by Freepik - Flaticon
      </a>
      <br />
    </div>

    <div className="center_imgs">
      <img className="max_width_100px" src="https://cdn-icons-png.flaticon.com/512/2338/2338317.png" />
      <br />
      <a className="small_font" href="https://www.flaticon.com/free-icons/cute" title="cute icons">
        Cute icons created by BomSymbols - Flaticon
      </a>
      <br />
    </div>

    <div className="center_imgs">
      <img className="max_width_100px" src="https://cdn-icons-png.flaticon.com/512/2201/2201716.png" />
      <br />
      <a className="small_font" href="https://www.flaticon.com/free-icons/cute" title="cute icons">
        Cute icons created by BomSymbols - Flaticon
      </a>
      <br />
    </div>

    <div className="center_imgs">
      <img className="max_width_100px" src="https://cdn-icons-png.flaticon.com/512/9558/9558738.png" />
      <br />
      <a className="small_font" href="https://www.flaticon.com/free-icons/cute" title="cute icons">
        Cute icons created by Rohim - Flaticon
      </a>
      <br />
    </div>

    <h2>Random Images</h2>
    <div className="center_imgs">
      <img className="max_width_100px" src={random_img_link} />
    </div>

    <div className="center_imgs">
      <img className="max_width_100px" src={random_img_link + "?grayscale"} />
    </div>

    <hr />
    <p className="heading2">Created by {developer_gh_name}</p>
    <p>Copyright {current_year}</p>
  </div>,
  document.getElementById("root")
);
