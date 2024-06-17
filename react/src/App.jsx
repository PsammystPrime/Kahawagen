import { useState } from "react";
import "./App.css";

export function Navbar() {
  return (
    <header>
      <div className="logo">
        <img src="/logo.jpeg" alt="KahawaGen logo" className="logoImg" />
        <h1>KAHAWA-GEN</h1>
      </div>
      <nav>
        <button className="about">About</button>
        <button className="services">Services</button>
        <button className="location">Find Us</button>
      </nav>
    </header>
  );
}
export function Main() {
  return (
    <main>
      <div className="preview">
        <div className="display">
          <img
            src="/v5107TKrgQLcWj7z4BN4--1--02egd.jpg"
            alt="A grocery guy"
            className="homeImg"
          />
        </div>

        <div className="advert">
          <p>
            Empowering Your Success Through Reliable Generator Repairs and
            Maintenance. <br />
            Providing you with solutions for your Power Problems.
          </p>
          <p>
            <b>THE BEST IN EAST AFRICA</b>
          </p>
          <div className="contact">
            <button>
              <a href="tel:+254716041426">Call</a>
            </button>
            <button>
              <a href="https://wa.me/0716041426">Whatsapp</a>
            </button>
            <button>
              <a href="mailto:Psammystprime384@gmail.com">Email</a>
            </button>
          </div>
        </div>
      </div>

      <div className="pitch">
        <div className="card" id="norm">
          <div className="info">
            <h3>Word from Top Technician</h3>
            <p>
              Welcome to Kahawa-Gen Repairs, your trusted partner in electrical
              and power generator maintenance and repair services. With years of
              expertise and a dedication to excellence, we specialize in keeping
              your generators running smoothly, ensuring uninterrupted power
              supply for your business or home.
            </p>
            <p>Tech. Lead Stephen Mwangi</p>
          </div>
          <img src="/emmanuel-ikwuegbu-zWOgsj3j0wA-unsplash.jpg" alt="#" />
        </div>
        <hr />
        <div className="card" id="invert">
          <img src="/sigmund-JHGFcLznoUY-unsplash.jpg" alt="#" />
          <div className="info">
            <h3>Why Choose us?</h3>
            <p>
              Our team of highly skilled technicians is equipped to handle a
              wide range of repairs, from minor electrical issues to complete
              generator overhauls. We understand the importance of reliability
              when it comes to power generation, which is why we strive to
              deliver prompt and efficient service every time.
            </p>
            <p>Tech. Eng Njuguna</p>
          </div>
        </div>
        <hr />
        <div className="card" id="norm">
          <div className="info">
            <h3>We care for your Electrical Experience</h3>
            <p>
              At Kahawa-Gen Repairs, we prioritize customer satisfaction above
              all else. Whether you need emergency repairs or routine
              maintenance, you can count on us to respond swiftly and
              professionally. Our commitment to quality and attention to detail
              set us apart as the preferred choice for generator repairs in
              Kenya and East Africa.
            </p>
            <p>
              Contact us today to schedule a service appointment, and experience
              the difference that Kahawa-Gen Repairs can make for your
              electrical and power generator needs. Trust us to keep your power
              flowing, so you can focus on what matters most.
            </p>
            <p>Mech. Jack Kimando</p>
          </div>
          <img src="/adrian-brand-dmu18eQLnVQ-unsplash.jpg" alt="#" />
        </div>
        <hr />
      </div>

      <div className="location">locations</div>
      <div className="email" id="email">
        <button className="feedback">
          <a
            href="mailto:psammystprime384@gmail.com"
            style="color: floralwhite"
          >
            Email us
          </a>
        </button>
      </div>
    </main>
  );
}
function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Main></Main>
    </div>
  );
}

export default App;
