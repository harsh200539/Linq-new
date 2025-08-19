import { Users, Trophy, Building, MessageSquare, Award ,Briefcase ,PartyPopper , MessageSquareQuote , ThumbsUp, BookOpenText } from "lucide-react"; // Import new icons
import "../../src/css/styles.css";
import { useNavigate } from "react-router-dom"
import life1 from "../../src/images/LifeatLinq/1.jpeg";
import life2 from "../../src/images/LifeatLinq/2.jpeg";
import life3 from "../../src/images/LifeatLinq/3.jpeg";
import life6 from "../../src/images/LifeatLinq/6.jpg";





export function LifeAtLinq() {
  const navigate= useNavigate ()
  const features = [
    {
      icon: Briefcase,
      title: "",
      description:
        "A close-knit, team-driven work environment",
    },
    {
      icon: PartyPopper,
      title: "",
      description:
        "Cricket matches, celebrations & team-building events",
    },
    {
      icon: Building,
      title: "",
      description:
        "Modern office infrastructure",
    },
    {
      icon: MessageSquareQuote,
      title: "",
      description:
        "Open-door communication and feedback culture",
    },
     {
      icon: ThumbsUp,
      title: "",
      description:
        "Recognition for good work",
    },
     {
      icon: BookOpenText,
      title: "",
      description:
        "Learning and growth at every step",
    },
  ];

  return (
    <section
      id="life-at-linq"
      className="py-5 py-md-5 py-lg-5 bg-linq-dark text-linq-white "
    >
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
            <div className="mb-4">
                <h2 className="display-6 fw-bold mb-3">Life at LINQ</h2>
                <p className="lead text-linq-white-50 mb-4">
                  We combine professionalism with fun. Our culture is
                  collaborative, inclusive, and energetic. At LINQ, you’ll find:
                </p>
              </div>
          <div className="col-lg-6">

            <div className="d-flex flex-column justify-content-center">
             
              <div className="row ">
                {features.map((feature, index) => (
                  <div className="col-12 col-md-6 mb-4" key={index}>
                    <div className="linq-feature-block d-flex">
                      <div className="feature-icon-wrapper me-3">
                        <feature.icon className="feature-icon" size={32} />
                      </div>
                      <div className="feature-content">
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description fw-bold display-4 lh-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="d-flex flex-column">
                {features.map((feature, index) => (
                  <div className="row linq-feature-row" key={index}>
                    <div className="col-12 col-md-10 col-lg-8">
                      {" "}
                      <div className="linq-feature-block">
                        <div className="feature-icon-wrapper">
                          <feature.icon className="feature-icon" size={32} />
                        </div>
                        <div className="feature-content">
                          <h3 className="feature-title">{feature.title}</h3>
                          <p className="feature-description">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>  */}
             
            </div>
          </div>

          <div className="col-lg-6">
            <div className="">
              <div className="  ">
                <img
                  src={life6}
                  alt="LINQ Moment 1"
                  className="img-fluid rounded-0 object-fit-cover  "
                  // style={{ aspectRatio: "1/1" }}
                />
              </div>
              {/* <div className="col">
                <img
                  src={life2}
                  alt="LINQ Moment 2"
                  className="img-fluid rounded-3 object-fit-cover img-hover-zoom lifeatlinq"
                  // style={{ aspectRatio: "1/1" }}
                />
              </div>
              <div className="col">
                <img
                  src={life3}
                  alt="LINQ Moment 3"
                  className="img-fluid rounded-3 object-fit-cover img-hover-zoom lifeatlinq"
                  // style={{ aspectRatio: "1/1" }}
                />
              </div>
              <div className="col">
                <img
                  src={life4}
                  alt="LINQ Moment 4"
                  className="img-fluid rounded-3 object-fit-cover img-hover-zoom lifeatlinq"
                  // style={{ aspectRatio: "1/1" }}
                />
              </div> */}
              
            </div>
          </div>
          
           <div className="d-flex flex-column flex-sm-row gap-2 mt-4">
                <a
                  href="#life-at-linq"
                  className="btn btn-lg btn-lg btn-linq-primary "  onClick={() => navigate("/ImgGallery")}
                >
                  Discover Life at LINQ  
                </a>
              </div>
        </div>
      </div>
    </section>
  );
}
