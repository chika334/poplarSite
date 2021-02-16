import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, Button, Grid, Container } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import SearchBar from "material-ui-search-bar";
import Search from "../../Search/Search";
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
  // const [values, setValues] = useState("");
  // const classes = useStyles();
  // const marketingTestimonials1 = {
  //   dots: true,
  //   // fade: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   infinite: true,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   nextArrow: <SliderArrowNext />,
  //   prevArrow: <SliderArrowPrev />,
  //   className: "slides"
  //   // responsive: [
  //   //   {
  //   //     breakpoint: 1100,
  //   //     settings: { slidesToShow: 2, slidesToScroll: 2 },
  //   //     // mobile: 400,
  //   //     // settings: { slidesToShow: 1, slidesToScroll:  1},
  //   //   },
  //   // ],
  // };

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

  // const doSomethingWith = (values) => {
  //   console.log(values);
  // };

  return (
    <>
      <div className="pt-5 bg-secondary">
        <div className="px-3 py-5">
          <div className="text-center">
            <h1 className="display-3 text-black mb-2 font-weight-bold">
              Our Products and services
            </h1>
            <p className="font-size-xl mb-0 mb-lg-5 text-black-50">
              Id cupidatat ullamco amet reprehenderit quis proident.
            </p>
          </div>
          <div style={{ top: "10px", left: "3%", right: "3%" }}>
            <Search />
          </div>
          {/* <div className="row">
            {slideDetails.map((allDetails, index) => (
              <Slider
                key={index}
                {...marketingTestimonials1}
                // className="slider-arrows-outside mb-5 slider-arrows-dark slider-dots-outside"
              >
                <div className="">
                  <Card className="m-4">
                    <CardContent>
                      <div className="align-items-center">
                        <div>
                          <Card className="card-transparent">
                            <img
                              src={allDetails.src}
                              style={{ width: 80 }}
                              alt="..."
                            />
                            <h4 className="text-center">{allDetails.title}</h4>
                          </Card>
                        </div>
                        <div className="pl-4">
                          <blockquote className="my-3 text-black-50">
                            {allDetails.quote}
                            <Link to={allDetails.link}>
                              <FontAwesomeIcon
                                className="ml-3 text-primary"
                                icon={["fas", "arrow-right"]}
                              />
                            </Link>
                          </blockquote>
                          <div className="font-size-lg font-weight-bold">
                            Product:-
                            <small className="text-black-50 pl-2">
                              {allDetails.title}
                            </small>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Slider>
            ))}
          </div> */}
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
            <Link to={`${process.env.REACT_APP_URL}/Products`}>
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
