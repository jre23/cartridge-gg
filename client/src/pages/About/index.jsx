import React, { useState, useEffect } from "react";
import API from "../../utils/API";
// import "../../styles/About.css";

const About = () => {
  const [gifState, setGifState] = useState({
    gif: "english bulldog",
    image: "",
  });

  useEffect(() => {
    const giphyAPI = () => {
      API.search(gifState.gif)
        .then((res) => {
          // use Math.random() to choose a random gif
          let randomIndex = Math.floor(Math.random() * 23);
          let imageURL =
            res.data.data[randomIndex].images.original !== undefined
              ? res.data.data[randomIndex].images.original.url
              : res.data.data[randomIndex].images.fixed_height.url;
          setGifState({ gif: gifState.gif, image: imageURL });
        })
        .catch((e) => {
          console.log(e);
        });
    };

    giphyAPI();
  }, [gifState.gif]);

  return (
    <>
      <main>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row align-items-center g-5 py-5 justify-content-center">
            <div class="col-lg-6 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 mb-3">About Joel</h1>
              <p className="col-lg-10 fs-4">
                Hi, I'm Joel! I'm from Seattle and I built this web app so I can
                keep practicing my coding skills while having a little fun! I
                love eating, running, lifting weights, playing video games,
                english bulldogs, and coding! I hope you were able to enjoy some
                of the games I've built! Feel free to connect with me! Thanks
                for stopping by!
              </p>
              <div className="mt-3 d-grid gap-2 d-md-flex justify-content-lg-start justify-content-center">
                <a
                  href="https://www.linkedin.com/in/joelestrada23"
                  target="_blank"
                  type="button"
                  className="btn btn-outline-primary btn-lg px-4 me-md-2"
                >
                  LinkedIn
                </a>
                <a
                  href="https://jre23.github.io/react-portfolio/"
                  rel="noreferrer"
                  target="_blank"
                  type="button"
                  className="btn btn-outline-info btn-lg px-4"
                >
                  Portfolio
                </a>
              </div>
            </div>
            <div className="col-10 col-sm-8 col-lg-6 text-center">
              <img
                className="pt-3 px-auto img-fluid img-size"
                alt="english bulldog or thank you gif"
                src={gifState.image}
              ></img>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
