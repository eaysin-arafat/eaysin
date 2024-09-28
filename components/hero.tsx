const Hero = () => {
  return (
    <section
      id="hero"
      className="s-hero target-section"
      data-parallax="scroll"
      data-image-src="../app/assets/images/hero-bg-3000.jpg"
      data-natural-width="3000"
      data-natural-height="2000"
      data-position-y="center"
    >
      <div className="row hero-content">
        <div className="column large-full">
          <h1>
            Hello, I'm John Doe, a frontend developer & designer currently based
            somewhere.
          </h1>

          <ul className="hero-social">
            <li>
              <a href="#0" title="">
                Twitter
              </a>
            </li>
            <li>
              <a href="#0" title="">
                GitHub
              </a>
            </li>
            <li>
              <a href="#0" title="">
                Blogs
              </a>
            </li>
            <li>
              <a href="#0" title="">
                Linkedin
              </a>
            </li>
          </ul>
          {/*  end hero-social */}
        </div>
      </div>

      <div className="hero-scroll">
        <a href="#about" className="scroll-link smoothscroll">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 24l-8-9h6v-15h4v15h6z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;