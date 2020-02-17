import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import { connect } from "react-redux";
import { getEmployeesArray } from "../../actions/index";
import { useHistory, useParams } from "react-router-dom";

import {
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

function EmployeeDisplay(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  let history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    props.getEmployeesArray();
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.array - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.array - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = props.array.map(item => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        // onExiting={() => setAnimating(true)}
        // onExited={() => setAnimating(false)}
      >
        <img
          id="cardImg"
          src={item.imgUrl}
          alt=""
        />

        <CarouselCaption
          //   className="text-danger"

          captionHeader={item.firstName + " " + item.lastName}
          captionText={item.city}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <div>
        <style>
          {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: rgb(20,247,229);
background: linear-gradient(90deg, rgba(20,247,229,1) 0%, rgba(23,238,225,1) 0%, rgba(25,233,223,1) 0%, rgba(34,206,212,1) 10%, rgba(40,188,204,1) 31%, rgba(49,163,194,1) 43%, rgba(56,142,185,1) 78%, rgba(57,140,184,1) 81%, rgba(58,138,183,1) 82%, rgba(60,132,181,1) 86%, rgba(66,116,175,1) 100%);
            }`}
        </style>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={props.array}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
      <Button
        className="center"
        id="backButton"
        outline
        onClick={history.goBack}
      >
        Back
      </Button>

      {/* {props.array.map((item, index, array) => (
        <EmployerCard key={index} employer={item} />
      ))} */}
    </>
  );
}

const mapStateToProps = state => {
  return {
    array: state.array,
    profile: state.profile,
    user: state.user,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(mapStateToProps, { getEmployeesArray })(EmployeeDisplay);
