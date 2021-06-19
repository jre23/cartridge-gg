import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
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

  const handleSubmit = (event) => {
    event.preventDefault();
    let dataValue = event.target.getAttribute("data-target");
    setGifState({ ...gifState, gif: dataValue });
    // used formspree to handle form submissions. reference: https://formspree.io/forms/xrgodlyl/integration
    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        alert("Thanks for your inquiry!");
      } else {
        alert("Oops! There was an error.");
      }
    };
    xhr.send(data);
  };

  return (
    <>
      {/*  
      <main className="container my-5 pt-4 col-12 col-sm-11 col-md-10">

        <div className="row">
          <section className="col-12 col-sm-6 text-white pt-4 pl-4 pr-4 contact-border-background text-center">
            <h1 className="contact-header">Contact Info</h1>
            <hr />
            <div className="contact-info">
              <h5 className="mb-1">Joel Estrada</h5>Seattle, WA
              <br /> Email:{" "}
              <a
                href=" mailto:jre.estrada@gmail.com?subject=Joel's Portfolio Contact
                    Email"
              >
                jre.estrada@gmail.com
              </a>
              <br />
              Phone: (253) 249-3170
              <br />
            </div>
            <div>
              <img
                className="pt-3 px-auto img-fluid img-size"
                alt="english bulldog or thank you gif"
                src={gifState.image}
              ></img>
            </div>
            <br />
          </section>
          <ContactForm handleSubmit={handleSubmit} />
        </div>
      </main>*/}
      <main>
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 mb-3">
                Vertically centered hero sign-up form
              </h1>
              <p className="col-lg-10 fs-4">
                Below is an example form built entirely with Bootstrap’s form
                controls. Each required form group has a validation state that
                can be triggered by attempting to submit the form without
                completing it.
              </p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <form className="p-4 p-md-5 border rounded-3 bg-light">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Sign up
                </button>
                <hr className="my-4" />
                <small className="text-muted">
                  By clicking Sign up, you agree to the terms of use.
                </small>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
