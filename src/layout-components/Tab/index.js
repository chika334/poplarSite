import React, { Component } from "react";
import rccg from "../../assets/images/product-logos/rccg.jpg";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";

class index extends Component {
  openCity = (evt, cityName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };
  componentDidMount() {
    document.getElementById("defaultOpen").click();
  }
  render() {
    return (
      <div>
        <div className="tab">
          <button
            className="tablinks mr-2 p-2"
            id="defaultOpen"
            onClick={(event) => this.openCity(event, "London")}
          >
            <img src={rccg} width="30" alt="tabImage" />
            <p>{process.env.REACT_APP_RCCG}</p>
            {/* London */}
          </button>
          <button
            className="tablinks mr-2 p-2"
            onClick={(event) => this.openCity(event, "Paris")}
          >
            <img src={rccg} width="30" alt="tabImage" />
            <p>{process.env.REACT_APP_RCCG}</p>
          </button>
          <button
            className="tablinks mr-2 p-2"
            onClick={(event) => this.openCity(event, "Tokyo")}
          >
            <img src={rccg} width="30" alt="tabImage" />
            <p>{process.env.REACT_APP_RCCG}</p>
          </button>
          <button
            className="tablinks mr-2 "
            onClick={(event) => this.openCity(event, "Tokyo")}
          >
            <img src={rccg} width="30" alt="tabImage" />
            <p>{process.env.REACT_APP_RCCG}</p>
          </button>
        </div>

        <div id="London" className="tabcontent">
          <Tab1 />
        </div>

        <div id="Paris" className="tabcontent">
          <Tab2 />
        </div>

        <div id="Tokyo" className="tabcontent">
          <Tab3 />
        </div>

        <div id="France" className="tabcontent">
          <Tab4 />
        </div>
      </div>
    );
  }
}

export default index;
