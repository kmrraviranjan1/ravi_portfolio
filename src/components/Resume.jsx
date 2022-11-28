import React from 'react'
import { FaSchool } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FiDownload } from 'react-icons/fi'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Resume = () => {
    return (
        <div name="resume" className="w-full bg-gradient-to-b p-2 from-black to-gray-800" >
            <div className="max-w-screen-lg pt-20 pb-20 mx-auto w-full flex flex-col justify-center">

                <div className="flex justify-center">
                    <button className="group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" >
                        <a href="/ravi_resume.pdf" download={true}>Download Resume</a>
                        <span>
                            <FiDownload size={25} className="ml-1" />
                        </span>
                    </button>
                </div>

                <div>
                    <VerticalTimeline lineColor=" #D4AF37" animate={true}>
                        <VerticalTimelineElement
                            className="text-white"
                            date="Dec 2021 - Present"
                            // style={{padding:0}}
                            intersectionObserverProps={{default: { rootMargin: '0px 0px 20px 0px' }}}
                            contentStyle={{ background: "rgb(33, 150, 243)" ,backgroundColor: '#8BC6EC',
                            backgroundImage: `linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)`
                            }}
                            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                            icon={<MdWork />}
                        >
                            <div>
                                <p className="vertical-timeline-element-title">
                                    Full Stack Software Developer, Kutuki
                                </p>
                                <p className="vertical-timeline-element-subtitle">Bangalore, Karnatka</p>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="text-white"
                            contentStyle={{ background: "rgb(33, 150, 243)",backgroundColor: '#8BC6EC',
                            backgroundImage: `linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)` }}
                            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                            date="March 2021 - Nov 2021"
                            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                            icon={<FaSchool />}
                        >
                            <div>
                                <p className="vertical-timeline-element-title">
                                    Full-Stack Web Development
                                </p>
                                <p className="vertical-timeline-element-subtitle">
                                    Masai School, Remote Coding Bootcamp
                                </p>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="text-white"
                            date="Aug 2018 - Jan 2021"
                            contentStyle={{ background: "rgb(33, 150, 243)",backgroundColor: '#8BC6EC',
                            backgroundImage: `linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)`}}
                            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                            icon={<MdWork />}
                        >
                            <div>
                                <p className="vertical-timeline-element-title">
                                    Instructor, Agastya International Foundation
                                </p>
                                <p className="vertical-timeline-element-subtitle">Patna, Bihar</p>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="text-white"
                            contentStyle={{ background: "rgb(33, 150, 243)",backgroundColor: '#8BC6EC',
                            backgroundImage: `linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)`}}
                            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                            date="2013 - 2017"
                            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                            icon={<FaSchool />}
                        >
                            <div>
                                <p className="vertical-timeline-element-title">
                                    B.E in ECE
                                </p>
                                <p className="vertical-timeline-element-subtitle">
                                    CEC, Bilaspur, Chhattisgarh
                                </p>
                            </div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>

            </div>
        </div>
    )
}

export default Resume