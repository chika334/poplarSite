import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent } from "@material-ui/core";
import Slider from "react-slick";
// import SearchBar from "material-ui-search-bar";
import Search from '../../Search/Search'
import rccg from "../../../assets/images/product-logos/rccg.jpg";

function SliderArrowNext(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={["fas", "chevron-right"]} />
    </div>
  );
}

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
  const marketingTestimonials1 = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SliderArrowNext />,
    prevArrow: <SliderArrowPrev />,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
        // mobile: 400,
        // settings: { slidesToShow: 1, slidesToScroll:  1},
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
          <div
            style={{ top: "10px", left: "3%", right: "3%" }}
          >
            {/* <SearchBar
              value={values}
              onChange={(newValue) => setValues(newValue)}
              onRequestSearch={() => doSomethingWith(values)}
              autoFocus
            /> */}
            <Search />
          </div>
          <Slider
            {...marketingTestimonials1}
            className="slider-arrows-outside mb-5 slider-arrows-dark slider-dots-outside"
          >
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
                        <Link to="#">
                          <FontAwesomeIcon
                            className="ml-3 text-primary"
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
                        <Link to="#">
                          <FontAwesomeIcon
                            className="ml-3 text-primary"
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
                        <Link to="#">
                          <FontAwesomeIcon
                            className="ml-3 text-primary"
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
                        <Link to="#">
                          <FontAwesomeIcon
                            className="ml-3 text-primary"
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
                        <Link to="#">
                          <FontAwesomeIcon
                            className="ml-3 text-primary"
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
                        <Link to="#">
                          <FontAwesomeIcon
                            className="ml-3 text-primary"
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
                        <Link to="#">
                          <FontAwesomeIcon
                            className="ml-3 text-primary"
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
          </Slider>
          <p className="text-center pt-3">
            Check out our other products
            <Link to={`${process.env.REACT_APP_URL}/Products`}>
              <FontAwesomeIcon
                className="ml-3 text-primary"
                icon={["fas", "arrow-right"]}
              />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
