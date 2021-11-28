import '../styles/App.css';
import data from '../listing.json'

function CaseStudies() {


  return (

    <div class="website listingPage">

        <div class="nav redheader">

          <a href="/">

            <div class="content">

              <p>BACK HOME</p>

            </div>

          </a>

        </div>

        <div class="container header redheader">

          <div class="content">
          
            <h1>

              Case Study and Projects

            </h1>

            <p>
            “Good design is good business.”
            </p>

            <h6>retired IBM CEO Thomas Watson, Junior</h6>

          </div>

        </div>

        <div class="container projectsList">

          <div class="content">

            {

              data.CaseStudies.map((item,i)=>(
                <a href={item.Link} target="_blank">

                  <div class="box">
                
                    <img src={`/banners/${item.ImageDestination}`}></img>
                    <h3>{item.Title}</h3>
                    <p>{item.Description}</p>
              
                  </div>

                </a>
              ))

            }

          </div>

        </div>

    </div>

  );
}

export default CaseStudies;
