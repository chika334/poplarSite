import React, { useState } from "react";
import { Toolbar, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, Button, Grid, Container } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import SearchBar from "material-ui-search-bar";
// import Search from "../../Search/Search";
import rccg from "../../../assets/images/product-logos/rccg.jpg";
import eko from "../../../assets/images/product-logos/eko.jpg";
import ikeja from "../../../assets/images/product-logos/ikeja.png";
import dstv from "../../../assets/images/product-logos/dstv.jpg";
import "./style.css";

function SliderArrowNext(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={["fas", "chevron-right"]} />
    </div>
  );
}

const slideDetails = [
  {
    src: `${rccg}`,
    title: `${process.env.REACT_APP_RCCG}`,
    quote:
      "Enim cupidatat cillum sit mollit enim reprehenderit dolore esse eiusmod proident incididunt officia reprehenderit.",
    link: `${process.env.REACT_APP_URL}/electric`,
  },
  {
    src: `${eko}`,
    title: `${process.env.REACT_APP_EKO}`,
    quote:
      "Enim cupidatat cillum sit mollit enim reprehenderit dolore esse eiusmod proident incididunt officia reprehenderit.",
    link: `${process.env.REACT_APP_URL}/electric`,
  },
  {
    src: `${ikeja}`,
    title: `${process.env.REACT_APP_IKEJA}`,
    quote:
      "Enim cupidatat cillum sit mollit enim reprehenderit dolore esse eiusmod proident incididunt officia reprehenderit.",
    link: `${process.env.REACT_APP_URL}/electric`,
  },
  {
    src: `${dstv}`,
    title: `${process.env.REACT_APP_DSTV}`,
    quote:
      "Enim cupidatat cillum sit mollit enim reprehenderit dolore esse eiusmod proident incididunt officia reprehenderit.",
    link: `${process.env.REACT_APP_URL}/cable`,
  },
  {
    src: `${rccg}`,
    title: `${process.env.REACT_APP_RCCG}`,
    quote:
      "Enim cupidatat cillum sit mollit enim reprehenderit dolore esse eiusmod proident incididunt officia reprehenderit.",
    link: `${process.env.REACT_APP_URL}/electric`,
  },
  {
    src: `${eko}`,
    title: `${process.env.REACT_APP_EKO}`,
    quote:
      "Enim cupidatat cillum sit mollit enim reprehenderit dolore esse eiusmod proident incididunt officia reprehenderit.",
    link: `${process.env.REACT_APP_URL}/electric`,
  },
  {
    src: `${ikeja}`,
    title: `${process.env.REACT_APP_IKEJA}`,
    quote:
      "Enim cupidatat cillum sit mollit enim reprehenderit dolore esse eiusmod proident incididunt officia reprehenderit.",
    link: `${process.env.REACT_APP_URL}/electric`,
  },
  {
    src: `${dstv}`,
    title: `${process.env.REACT_APP_DSTV}`,
    quote:
      "Enim cupidatat cillum sit mollit enim reprehenderit dolore esse eiusmod proident incididunt officia reprehenderit.",
    link: `${process.env.REACT_APP_URL}/cable`,
  },
  {
    src: `${rccg}`,
    title: `${process.env.REACT_APP_RCCG}`,
    quote:
      "Enim cupidatat cillum sit mollit enim reprehenderit dolore esse eiusmod proident incididunt officia reprehenderit.",
    link: `${process.env.REACT_APP_URL}/electric`,
  },
  {
    src: `${eko}`,
    title: `${process.env.REACT_APP_EKO}`,
    quote:
      "Enim cupidatat cillum sit mollit enim reprehenderit dolore esse eiusmod proident incididunt officia reprehenderit.",
    link: `${process.env.REACT_APP_URL}/electric`,
  },
  {
    src: `${ikeja}`,
    title: `${process.env.REACT_APP_IKEJA}`,
    quote:
      "Enim cupidatat cillum sit mollit enim reprehenderit dolore esse eiusmod proident incididunt officia reprehenderit.",
    link: `${process.env.REACT_APP_URL}/electric`,
  },
  {
    src: `${dstv}`,
    title: `${process.env.REACT_APP_DSTV}`,
    quote:
      "Enim cupidatat cillum sit mollit enim reprehenderit dolore esse eiusmod proident incididunt officia reprehenderit.",
    link: `${process.env.REACT_APP_URL}/cable`,
  },
  {
    src: `${rccg}`,
    title: `${process.env.REACT_APP_RCCG}`,
    quote:
      "Enim cupidatat cillum sit mollit enim reprehenderit dolore esse eiusmod proident incididunt officia reprehenderit.",
    link: `${process.env.REACT_APP_URL}/electric`,
  },
  {
    src: `${eko}`,
    title: `${process.env.REACT_APP_EKO}`,
    quote:
      "Enim cupidatat cillum sit mollit enim reprehenderit dolore esse eiusmod proident incididunt officia reprehenderit.",
    link: `${process.env.REACT_APP_URL}/electric`,
  },
  {
    src: `${ikeja}`,
    title: `${process.env.REACT_APP_IKEJA}`,
    quote:
      "Enim cupidatat cillum sit mollit enim reprehenderit dolore esse eiusmod proident incididunt officia reprehenderit.",
    link: `${process.env.REACT_APP_URL}/electric`,
  },
  {
    src: `${dstv}`,
    title: `${process.env.REACT_APP_DSTV}`,
    quote:
      "Enim cupidatat cillum sit mollit enim reprehenderit dolore esse eiusmod proident incididunt officia reprehenderit.",
    link: `${process.env.REACT_APP_URL}/cable`,
  },
];

function SliderArrowPrev(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={["fas", "chevron-left"]} />
    </div>
  );
}

export default function LivePreviewExample() {
  const [filter, setFilter] = useState("");
  const marketingTestimonials1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    cssEase: "linear",
    className: "slides",
    responsive: [
      {
        breakpoint: 599,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  // console.log(filter);

  const handleSubmit = (e, filter) => {
    e.preventDefault();
    console.log(filter);
    const keyword = filter.toLowerCase();
  };

  return (
    <>
      <div className="pt-5 bg-secondary">
        <div className="px-3 py-5">
          <div className="text-center">
            <h1 className="display-3 text-black mb-2 font-weight-bold">
              Our Products and services
            </h1>
            <p className="font-size-xl mb-0 mb-lg-5 text-black-50">
              Products we provide.
            </p>
          </div>
          <div style={{ top: "10px", left: "3%", right: "3%" }}>
            {/* <Search /> */}
            {/* <Toolbar>
              <div className="w-100 d-flex align-items-center justify-content-center">
                <TextField
                  className="w-100"
                  onChange={handleSearchChange}
                  label="Search..."
                  variant="standard"
                />
                <Button onClick={(e) => handleSubmit(e, filter)}>
                  <SearchIcon className="" />
                </Button>
              </div>
            </Toolbar> */}
          </div>
          <Slider
            {...marketingTestimonials1}
            className="slider-arrows-outside mb-5 slider-arrows-dark slider-dots-outside"
          >
            {" "}
            <div>
              <Card className="m-4">
                <CardContent>
                  <div className="align-items-center">
                    <div>
                      <Card className="card-transparent">
                        <img src={rccg} style={{ width: 80 }} alt="..." />
                        <h4 className="text-center">
                          {process.env.REACT_APP_RCCG}
                        </h4>
                      </Card>
                    </div>
                    <div className="pl-4">
                      <blockquote className="my-3 text-black-50">
                        Enim cupidatat cillum sit mollit enim reprehenderit
                        dolore esse eiusmod proident incididunt officia
                        reprehenderit.
                        <Link to={`${process.env.REACT_APP_URL}/electric`}>
                          <FontAwesomeIcon
                            className="ml-3"
                            style={{ color: "#048cfc" }}
                            icon={["fas", "arrow-right"]}
                          />
                        </Link>
                      </blockquote>
                      <div className="font-size-lg font-weight-bold">
                        Product:-
                        <small className="text-black-50 pl-2">
                          {process.env.REACT_APP_RCCG}
                        </small>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="m-4">
                <CardContent>
                  <div className="align-items-center">
                    <div>
                      <Card className="card-transparent">
                        <img src={eko} style={{ width: 80 }} alt="..." />
                        <h4 className="text-center">
                          {process.env.REACT_APP_EKO}
                        </h4>
                      </Card>
                    </div>
                    <div className="pl-4">
                      <blockquote className="my-3 text-black-50">
                        Enim cupidatat cillum sit mollit enim reprehenderit
                        dolore esse eiusmod proident incididunt officia
                        reprehenderit.
                        <Link to={`${process.env.REACT_APP_URL}/electric`}>
                          <FontAwesomeIcon
                            className="ml-3"
                            style={{ color: "#048cfc" }}
                            icon={["fas", "arrow-right"]}
                          />
                        </Link>
                      </blockquote>
                      <div className="font-size-lg font-weight-bold">
                        Product:-
                        <small className="text-black-50 pl-2">
                          {process.env.REACT_APP_EKO}
                        </small>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="m-4">
                <CardContent>
                  <div className="align-items-center">
                    <div>
                      <Card className="card-transparent">
                        <img src={ikeja} style={{ width: 65 }} alt="..." />
                        <h4 className="text-center">
                          {process.env.REACT_APP_IKEJA}
                        </h4>
                      </Card>
                    </div>
                    <div className="pl-4">
                      <blockquote className="my-2 text-black-50">
                        Enim cupidatat cillum sit mollit enim reprehenderit
                        dolore esse eiusmod proident incididunt officia
                        reprehenderit.
                        <Link to={`${process.env.REACT_APP_URL}/electric`}>
                          <FontAwesomeIcon
                            className="ml-3"
                            style={{ color: "#048cfc" }}
                            icon={["fas", "arrow-right"]}
                          />
                        </Link>
                      </blockquote>
                      <div className="font-size-lg font-weight-bold">
                        Product:-
                        <small className="text-black-50 pl-2">
                          {process.env.REACT_APP_IKEJA}
                        </small>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="m-4">
                <CardContent>
                  <div className="align-items-center">
                    <div>
                      <Card className="card-transparent">
                        <img src={rccg} style={{ width: 80 }} alt="..." />
                        <h4 className="text-center">
                          {process.env.REACT_APP_DSTV}
                        </h4>
                      </Card>
                    </div>
                    <div className="pl-4">
                      <blockquote className="my-3 text-black-50">
                        Enim cupidatat cillum sit mollit enim reprehenderit
                        dolore esse eiusmod proident incididunt officia
                        reprehenderit.
                        <Link to={`${process.env.REACT_APP_URL}/cable`}>
                          <FontAwesomeIcon
                            className="ml-3"
                            style={{ color: "#048cfc" }}
                            icon={["fas", "arrow-right"]}
                          />
                        </Link>
                      </blockquote>
                      <div className="font-size-lg font-weight-bold">
                        Product:-
                        <small className="text-black-50 pl-2">
                          {process.env.REACT_APP_DSTV}
                        </small>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="m-4">
                <CardContent>
                  <div className="align-items-center">
                    <div>
                      <Card className="card-transparent">
                        <img src={rccg} style={{ width: 80 }} alt="..." />
                        <h4 className="text-center">
                          {process.env.REACT_APP_RCCG}
                        </h4>
                      </Card>
                    </div>
                    <div className="pl-4">
                      <blockquote className="my-3 text-black-50">
                        Enim cupidatat cillum sit mollit enim reprehenderit
                        dolore esse eiusmod proident incididunt officia
                        reprehenderit.
                        <Link to={`${process.env.REACT_APP_URL}/electric`}>
                          <FontAwesomeIcon
                            className="ml-3"
                            style={{ color: "#048cfc" }}
                            icon={["fas", "arrow-right"]}
                          />
                        </Link>
                      </blockquote>
                      <div className="font-size-lg font-weight-bold">
                        Product:-
                        <small className="text-black-50 pl-2">
                          {process.env.REACT_APP_RCCG}
                        </small>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="m-4">
                <CardContent>
                  <div className="align-items-center">
                    <div>
                      <Card className="card-transparent">
                        <img src={eko} style={{ width: 80 }} alt="..." />
                        <h4 className="text-center">
                          {process.env.REACT_APP_EKO}
                        </h4>
                      </Card>
                    </div>
                    <div className="pl-4">
                      <blockquote className="my-3 text-black-50">
                        Enim cupidatat cillum sit mollit enim reprehenderit
                        dolore esse eiusmod proident incididunt officia
                        reprehenderit.
                        <Link to={`${process.env.REACT_APP_URL}/electric`}>
                          <FontAwesomeIcon
                            className="ml-3"
                            style={{ color: "#048cfc" }}
                            icon={["fas", "arrow-right"]}
                          />
                        </Link>
                      </blockquote>
                      <div className="font-size-lg font-weight-bold">
                        Product:-
                        <small className="text-black-50 pl-2">
                          {process.env.REACT_APP_EKO}
                        </small>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="m-4">
                <CardContent>
                  <div className="align-items-center">
                    <div>
                      <Card className="card-transparent">
                        <img src={ikeja} style={{ width: 65 }} alt="..." />
                        <h4 className="text-center">
                          {process.env.REACT_APP_IKEJA}
                        </h4>
                      </Card>
                    </div>
                    <div className="pl-4">
                      <blockquote className="my-3 text-black-50">
                        Enim cupidatat cillum sit mollit enim reprehenderit
                        dolore esse eiusmod proident incididunt officia
                        reprehenderit.
                        <Link to={`${process.env.REACT_APP_URL}/electric`}>
                          <FontAwesomeIcon
                            className="ml-3"
                            style={{ color: "#048cfc" }}
                            icon={["fas", "arrow-right"]}
                          />
                        </Link>
                      </blockquote>
                      <div className="font-size-lg font-weight-bold">
                        Product:-
                        <small className="text-black-50 pl-2">
                          {process.env.REACT_APP_IKEJA}
                        </small>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Slider>
          <p className="text-center pt-3">
            Check out our other products
            <Link to={`${process.env.REACT_APP_URL}/products`}>
              <FontAwesomeIcon
                className="ml-3"
                style={{ color: "#048cfc" }}
                icon={["fas", "arrow-right"]}
              />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
