import React from "react";

import {

  VerticalTimeline,

  VerticalTimelineElement,

} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";





import math from "../assets/math.jpg";
import ml from "../assets/ml.png";
import deep from "../assets/deep.jpg";
import npl from "../assets/npl.png";

function FutureEventTimeLine() {

  return (

    <div id="progress">

      <div className="overflow-hidden px-4 sm:px-8">

        <div className="eventsbg mt-24 my-48 w-full">

          <VerticalTimeline lineColor="#2196f3">

            {[

              {

                date: "Step-1",

                title: "Learn Maths & Python",

                subtitle: "Linear Algebra , Calculus , Probability & Statistics",

                icon: math,

              },

              {

                date: "Step-2",

                title: "Learn Important Machine Learning Concepts",

                subtitle: "",

                icon: ml,

              },

              {

                date: "STEP-3",

                title: "Learn Important Deep Learning Concepts ",

                subtitle: "",

                icon: deep,

              },

              {

                date: "STEP-4",

                title: "Specialize in NLP or Computer Vision",

                subtitle: "",

                icon: npl,

              },

              {

                date: "STEP-5",

                title: "Learn To Deploy ML Models ",

                subtitle: "",

                icon: ml,

              },



              

            ].map((event, index) => (

              <VerticalTimelineElement

                key={index}

                className={`vertical-timeline-element--${

                  index % 2 === 0 ? "right" : "left"

                }`}

                contentStyle={{

                  background: index % 2 === 0 ? "rgb(33, 150, 243)" : "rgb(33,243,150)",

                  color: "#fff",

                  padding: "20px",

                }}

                contentArrowStyle={{

                  borderRight: "7px solid rgb(33, 150, 243)",

                }}

                date={event.date}

                iconStyle={{

                  background: "rgb(33, 150, 243)",

                  color: "#fff",

                  overflow: "hidden",

                  padding: "2px",

                }}

                icon={

                  <img

                    src={event.icon}

                    alt={event.title}

                    className="rounded-full w-full h-full object-cover"

                  />

                }

              >

                <h3 className="vertical-timeline-element-title text-base sm:text-lg font-semibold">

                  {event.title}

                </h3>

                <h5 className="vertical-timeline-element-subtitle text-sm sm:text-base">

                  {event.subtitle}

                </h5>

              </VerticalTimelineElement>

            ))}

          </VerticalTimeline>

        </div>

      </div>

    </div>

  );

}



export default FutureEventTimeLine;
