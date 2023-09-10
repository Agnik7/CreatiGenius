import React from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import "./AboutStyle.css";
import Pic1 from '../assets/pic6.png';
import Pic2 from '../assets/pic3.png';
import Pic3 from '../assets/pic4.png';
import Pic4 from '../assets/pic9.png';
export default function About() {
  const navigate = useNavigate();
  const handleLoginRoute = () => {
    navigate("/register");
  };
  return (
    <>
      <Nav />
      <main className="index">
        <section className="top_section parts">
          <span className="open">
            <h1>About Us: Unlocking Creative Genius</h1>
            <p>
              Welcome to CreatiGenius, your creative companion in the digital
              age. We are the ultimate content generator that fuels your
              imagination and provides you with instant stories, plays, and
              scripts precisely tailored to your needs.
            </p>

            <div className="About_btn">
              <button id="about" onClick={handleLoginRoute}>
                Sign Up!
              </button>
            </div>
          </span>
          <span className="pic">
            <img src={Pic1} alt="creatigenius"></img>
          </span>
        </section>
        <section className="middle_section parts">
          <span className="pic">
            <img src={Pic2} alt="creatigenius"></img>
          </span>
          <span className="about_us">
            <h1>Our Mission</h1>
            <p className="p">
              At CreatiGenius, we believe in the power of imagination. Our
              mission is to empower writers, storytellers, and content creators
              with the tools they need to bring their ideas to life,
              effortlessly. We are here to bridge the gap between inspiration
              and realization.
            </p>
            <h2>How CreatiGenius Works</h2>
            <p className="p">
              Our cutting-edge platform harnesses the latest in artificial
              intelligence and natural language processing to craft compelling
              narratives, gripping plays, and engaging scripts in a matter of
              seconds. Whether you're a writer looking for inspiration, a
              filmmaker in search of the perfect script, or a student needing
              assistance with your creative projects, CreatiGenius has you
              covered.
            </p>
          </span>
          <span className="pic">
            <img src={Pic3} alt="creatigenius"></img>
          </span>
        </section>
        <section className="bottom_section parts">
          <span className="pic">
            <img src={Pic4} alt="creatigenius"></img>
          </span>
          <span className="why">
            <h1>Why Choose CreatiGenius?</h1>
            <p>
              <strong>Unlimited Creativity:</strong> Our platform can generate
              content of varying lengths, ensuring it fits your project's
              requirements perfectly.
              <br />
              <strong>Tailored to You:</strong> We understand the importance of
              tone and style. CreatiGenius allows you to customize your
              content's voice, making it uniquely yours.
              <br />
              <strong>Time-Saving:</strong> Say goodbye to writer's block and
              hours of brainstorming. CreatiGenius provides instant results,
              freeing up your time for what matters most – bringing your ideas
              to life.
              <br />
              <strong>Quality Guaranteed:</strong> Our AI-driven content
              generator is constantly evolving, ensuring the highest quality
              output for your creative endeavors.
            </p>
          </span>
        </section>
        <section className="join">
          <h1>Join the CreatiGenius Community</h1>
          <p className="p">
            We're more than just a content generator; we're a community of
            creative minds coming together to push the boundaries of
            storytelling. Join us on this journey, and let's unlock your
            creative genius together.Whether you're looking to captivate your
            audience, boost your business, or explore your creative potential,
            CreatiGenius is your partner in achieving greatness. Join our
            community of content creators today and unlock the limitless
            possibilities of storytelling. Experience the genius of content
            creation with CreatiGenius
          </p>
        </section>
      </main>
    </>
  );
}
