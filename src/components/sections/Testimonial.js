import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Meet our Team!",
    paragraph: "the peeps behind Purru app",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <Image
                    src={require("./../../assets/images/team-1.png")}
                    alt="Features split 01"
                    width={528}
                    height={396}
                  />
                </div>
                <a target="_blank" href="">
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">
                      Delvin Tanjaya
                    </span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a target="_blank" href="https://www.linkedin.com/in/delvintanjaya/">Project Manager</a>
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <Image
                    src={require("./../../assets/images/team-2.png")}
                    alt="Features split 01"
                    width={528}
                    height={396}
                  />
                </div>
                <a target="_blank" href="">
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">
                      Gusde Wirawan
                    </span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a target="_blank" href="https://www.linkedin.com/in/gusdewirawan/">Coder</a>
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <Image
                    src={require("./../../assets/images/team-3.png")}
                    alt="Features split 01"
                    width={528}
                    height={396}
                  />
                </div>
                <a target="_blank" href="">
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">
                      Arnold Sidiprasetija
                    </span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a target="_blank" href="https://www.linkedin.com/in/arnoldprasetija/">Coder</a>
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <Image
                    src={require("./../../assets/images/team-4.png")}
                    alt="Features split 01"
                    width={528}
                    height={396}
                  />
                </div>
                <a target="_blank" href="">
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">
                      Renaka Agusta
                    </span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a target="_blank" href="https://www.linkedin.com/in/renakaagusta/">Coder</a>
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <Image
                    src={require("./../../assets/images/team-5.png")}
                    alt="Features split 01"
                    width={528}
                    height={396}
                  />
                </div>
                <a target="_blank" href="">
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">
                      Pradipta Manuputty
                    </span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a target="_blank" href="https://www.linkedin.com/in/pamanuputty/">UI / UX</a>
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <Image
                    src={require("./../../assets/images/team-6.png")}
                    alt="Features split 01"
                    width={528}
                    height={396}
                  />
                </div>
                <a target="_blank" href="">
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">
                      Winnie Nettabella
                    </span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a target="_blank" href="https://www.linkedin.com/in/winnie-nettabella-629805147/">UI / UX</a>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
