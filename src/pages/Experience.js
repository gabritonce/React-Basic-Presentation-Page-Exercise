import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School } from "@mui/icons-material";
import { Work } from "@mui/icons-material";
import "../styles/experience.css"


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education"
          date="2009-2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}>
          <h3 className="vertical-timeline-element-title">
            G. Minuto Hotel Management Institute, Italy
          </h3>
          <p>Tourism Operator Diploma</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
          date="2019-Now"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}>
          <h3 className="vertical-timeline-element-title">
            Pasticceria Impero Caprarie
          </h3>
          <p>Waiter/Barista</p>

        </VerticalTimelineElement>


        <VerticalTimelineElement className="vertical-timeline-element--education"
          date="Mar 2023 - Jul 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}>
          <h3 className="vertical-timeline-element-title">
            Epicode
          </h3>
          <p>Front-End Developer Course</p>
          <p><b>Skills:</b> HTML · FlexBox · Github · DOM · OOP · Bootstrap · SASS · Typescript · Angular · JavaScript · CSS</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
          date="2020-Now"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}>
          <h3 className="vertical-timeline-element-title">
            I Sarti Del Web
          </h3>
          <p>Audio-video technician</p>
          <p>Implemented business processes for various clients in the marketing sector. 
            Created, directed, and produced a podcast about the podcasting industry, featuring over 10 experts and reaching over 11,000 listens.
            Produced over 500 contents on platforms like Spreaker and Kajabi</p>

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
