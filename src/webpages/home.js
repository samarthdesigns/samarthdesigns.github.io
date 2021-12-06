import '../styles/App.css';
import { useRef } from 'react';

function Home() {

  const IndustrialProjects = useRef(null);
  const CaseStudies = useRef(null);
  const AdditionalWork = useRef(null);
  const Landing = useRef(null);
  const AboutMe = useRef(null);

  const topScroll = () => {
    window.scrollTo({
      top: Landing.current.offsetTop,
      behavior: "smooth",
    });
  }

  const learnMore = () => {
    window.scrollTo({
      top: IndustrialProjects.current.offsetTop,
      behavior: "smooth",
    });
  }

  const industrialProjectsScroll = () => {
    window.scrollTo({
      top: IndustrialProjects.current.offsetTop,
      behavior: "smooth",
    });
  }


  const caseStudiesScroll = () => {
    window.scrollTo({
      top: CaseStudies.current.offsetTop,
      behavior: "smooth",
    });
  }

  const additionalWorkScroll = () => {
    window.scrollTo({
      top: AdditionalWork.current.offsetTop,
      behavior: "smooth",
    });
  }

  const moreAboutMeScroll = () => {
    window.scrollTo({
      top: AboutMe.current.offsetTop,
      behavior: "smooth",
    });
  }

  return (

    <div class="website">


      <div class="navbar">

        <div class="content">

          <img src="SN.svg" onClick={topScroll}></img>

          <div class="nav-options">

            <p onClick={industrialProjectsScroll}>Industrial Projects</p>
            
            <p onClick={caseStudiesScroll}>Case Studies</p>

            <p onClick={additionalWorkScroll}>Addtional Work</p>
            
            <p onClick={moreAboutMeScroll}>More About Me</p>

          </div>

        </div>

      </div>

      <div class="container main" ref={Landing}>

        <div class="content landing-area">

          <div class="text-section">

            <h1>Hey <span>Samarth</span> here,</h1>

            <p>A product designer who loves designing experiences, illustrating and animating. Currently crafting experiences at <a href="https://insider.in/online" target="_blank" class="insider">Paytm Insider</a>. Previously at <a href="https://www.makemytrip.com/" target="_blank" class="makemytrip">MakeMyTrip</a>, <a href="https://www.goibibo.com/" target="_blank" class="goibibo">GoIbibo</a> and <a href="https://www.airtel.in/bank/" target="_blank" class="airtel">Airtel Payments Bank</a>.</p>

            <div class="button" onClick={learnMore}>Learn More</div>

          </div>

          <div class="spacer"></div>

          <div class="image-area">
            <img src="landing-area.png"></img>
          </div>

        </div>

      </div>

      <div class="container" ref={IndustrialProjects}>

        <div class="content industrial-projects">

          <h1>Industrial Projects</h1>

          <div class="projects">

            <div class="box">
              
              <a href="https://bootcamp.uxdesign.cc/makemytrip-design-internship-experience-2e1196ba1cbe" target="_blank">

                <img src="makemytrip-landing.png"></img>
                <h3>MakeMyTrip</h3>
                <p>This project was under the GoIbibo bus team at MakeMyTrip.</p>

              </a>
              
            </div>

            <div class="spacer"></div>

            <div class="box">

              <a href="https://bootcamp.uxdesign.cc/paytm-insider-vibes-a-design-project-87ca50dae475" target="_blank">

                <img src="insider-landing.png"></img>
                <h3>Paytm Insider Vibes</h3>
                <p>Insider vibes is a platform where we want people to be able to join events and talk to people.</p>

              </a>

            </div>

            <div class="spacer"></div>

            <div class="box">

              <a href="https://bootcamp.uxdesign.cc/airtel-payments-bank-design-internship-experience-302a2b46d9e1" target="_blank">

                <img src="airtel-landing.png"></img>
                <h3>Airtel Payments Bank</h3>
                <p>Mitra Application by Airtel Payments Bank is their merchant facing application.</p>

              </a>


            </div>

          </div>

          <a href="/industrial-projects">

            <div class="more">
              <div class="button">See All Projects</div>
            </div>

          </a>

        </div>

      </div>

      <div class="container" ref={CaseStudies}>

        <div class="content case-studies">

          <div class="text-section">

              <h1>Case Study & Projects</h1>

              <p>There are some ideas which we decide to focus on, work with and give our energy to. Some of those solve problems but all of them are a way of learning during the process.</p>

              <a href="/case-studies">

                <div class="button">See all projects</div>

              </a>

            </div>

            <div class="spacer"></div>

            <div class="image-area">
              <img src="case-studies.png"></img>
            </div>

          </div>

      </div>

      <div class="container" ref={AdditionalWork}>

        <div class="content additional-work">

          <div class="text-section">

            <h1>Additional Work</h1>

            <p>You are not a designer if you don't have sudden urges to design randomly during sleepless nights or as shower thoughts. Just a culmination of them 😉</p>

            <a href="https://www.instagram.com/designersamarth/" target="_blank">
              <div class="button">Check them out</div>
            </a>
            

          </div>

          <div class="spacer"></div>

          <div class="image-area">
            <img src="additional-work.png"></img>
          </div>

          </div>

      </div>

      <div class="container" ref={AboutMe}>

        <div class="content about-me">

          <h1>Learn more about me</h1>

          <div class="actions">

          <div class="box">

            <img src="portfolio-image.png"></img>
            <h3>Portfolio Document</h3>
            <p>Fan of documents rather than websites? I gotchu covered.</p>

            <a href="portfolio.pdf" download>
              <div class="button">Download Portfolio</div>
            </a>
            

          </div>

          <div class="spacer"></div>

          <div class="box">

            <img src="resume-image.png"></img>
            <h3>Resume</h3>
            <p>Want to learn about my experience? Have a look at my resume.</p>

            <a href="resume.pdf" download>
            <div class="button">Download Resume</div>
            </a>

          </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Home;
