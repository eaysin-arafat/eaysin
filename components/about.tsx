const About = () => {
  return (
    <section id="about" className="s-about target-section">
      <div className="s-about__section s-about__section--profile">
        <div className="right-vert-line"></div>

        <div className="row">
          <div className="column tab-full">
            <div className="section-intro">
              <h3 className="subhead" data-num="01">
                About Me
              </h3>
              <h1 className="display-1 text-8xl">
                I'm the kind of person who isn't afraid of challenges.
              </h1>
            </div>

            <h3>Profile</h3>

            <p>
              In consectetuer turpis ut velit. Praesent metus tellus, elementum
              eu, semper a, adipiscing nec, purus. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; In ac
              dui quis mi consectetuer lacinia. Fusce neque. Curabitur nisi.
              Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum
              eget, diam. Phasellus magna. Duis arcu tortor, suscipit eget,
              imperdiet nec, imperdiet iaculis, ipsum. Maecenas egestas arcu
              quis ligula mattis placerat. Suspendisse pulvinar, augue ac
              venenatis condimentum, sem libero volutpat nibh, nec pellentesque
              velit pede quis nunc.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- end s-about__section--profile --> */}

      <div className="s-about__section mt-36 md:mt-0">
        <div className="row">
          <div className="column">
            <h3>Career</h3>
          </div>
        </div>

        <div className="row block-900-full work-positions grid md:grid-cols-2">
          <div className="column">
            <div className="position">
              <div className="position__header">
                <h6>
                  <span className="position__co">Google</span>
                  <span className="position__pos">Product Designer</span>
                </h6>
                <div className="position__timeframe">June 2017 - Present</div>
              </div>

              <p>
                Pellentesque posuere. Etiam rhoncus. Praesent blandit laoreet
                nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue
                blandit nunc, eu sollicitudin urna dolor sagittis lacus.
              </p>
            </div>
          </div>
          {/* <!-- end column --> */}
          <div className="column">
            <div className="position">
              <div className="position__header">
                <h6>
                  <span className="position__co">Facebook</span>
                  <span className="position__pos">UX Director</span>
                </h6>
                <div className="position__timeframe">
                  August 2015 - June 2017
                </div>
              </div>

              <p>
                Aliquam erat volutpat. Phasellus volutpat, metus eget egestas
                mollis, lacus lacus blandit dui, id egestas quam mauris ut
                lacus. Pellentesque dapibus hendrerit tortor.
              </p>
            </div>
          </div>
          {/* <!-- end column --> */}
          <div className="column">
            <div className="position">
              <div className="position__header">
                <h6>
                  <span className="position__co">Dropbox</span>
                  <span className="position__pos">Mobile App Designer</span>
                </h6>
                <div className="position__timeframe">
                  April 2014 - August 2015
                </div>
              </div>

              <p>
                In hac habitasse platea dictumst. Donec pede justo, fringilla
                vel, aliquet nec, vulputate eget, arcu. Fusce risus nisl,
                viverra et, tempor et, pretium in, sapien. Phasellus volutpat,
                metus eget.
              </p>
            </div>
          </div>
          {/* <!-- end column --> */}
          <div className="column">
            <div className="position">
              <div className="position__header">
                <h6>
                  <span className="position__co">Microsoft</span>
                  <span className="position__pos">Product Designer</span>
                </h6>
                <div className="position__timeframe">
                  June 2012 - February 2014
                </div>
              </div>

              <p>
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                arcu. Curabitur blandit mollis lacus. Curabitur vestibulum
                aliquam leo. Vivamus in erat ut urna cursus vestibulum.
              </p>
            </div>
          </div>
          {/* <!-- end column --> */}
        </div>
        {/* <!-- work positions --> */}
      </div>
      {/* <!-- end s-about__section --> */}
    </section>
  );
};

export default About;