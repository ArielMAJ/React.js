import React from "react";
import Heading from "./Heading";
import LoremList from "./LoremList";

function App() {
    const developer_gh_name = "@ArielMAJ";
    const current_year = new Date().getFullYear();
    const random_img_link = "https://picsum.photos/200";

    return (
        <div>
            <Heading />
            <h2>Lorem ipsum</h2>
            <LoremList />

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
        </div>
    );
}

export default App;
