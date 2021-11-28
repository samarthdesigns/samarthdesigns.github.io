import '../styles/pages.css';
import data from '../listing.json'

function IndustrialProjects() {


  return (

    <div class="website">

        <div class="nav">

          <a href="/">

            <div class="content">

              <p>BACK HOME</p>

            </div>

          </a>

        </div>

        <div class="container header">

          <div class="content">
          
            <h1>

              Industrial Projects

            </h1>

            <p>
            “Only when the design fails does it draw attention to itself; when it succeeds, it’s invisible.”
            </p>

            <h6>typographer and book designer John D. Berry</h6>

          </div>

        </div>

        <div class="container projectsList">

          <div class="content">

            {

              data.IndustrialProjects.map((item,i)=>(
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

export default IndustrialProjects;
