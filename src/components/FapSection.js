import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout, useScroll } from "framer-motion";
import { UseScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = UseScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="question"></div>

          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
              omnis!
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule?">
          <div className="question"></div>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
              omnis!
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods?">
          <div className="question"></div>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
              omnis!
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products Do You Offer?">
          <div className="question"></div>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
              omnis!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
