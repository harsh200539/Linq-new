"use client";
import React, { useState } from "react";
import ProjectCard from "../Career/jobdetails.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { DEFAULT_JOBS } from "../lib/default-data";

const ProjectCardList = ({ initialJobs = [] }) => {
    const [jobs] = useState(initialJobs.length > 0 ? initialJobs : DEFAULT_JOBS);
    const [openIndex, setOpenIndex] = useState(0);

    const toggleCard = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const settings = {
        dots: true,
        infinite: jobs.length > 2,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false,
        cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="project-card-carousel-wrapper px-2">
            <Slider {...settings}>
                {jobs.map((job, index) => (
                    <div key={job.id || index} className="px-2 pb-4">
                        <ProjectCard
                            data={job}
                            isOpen={openIndex === index}
                            onToggle={() => toggleCard(index)}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProjectCardList;


export default ProjectCardList;
