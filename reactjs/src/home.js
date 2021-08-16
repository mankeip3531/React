import {Gallery} from './gallery.js';
import ReactPlayer from 'react-player';
import Card from './mission.js';
import Column from './column.js';
import Navbar from './navbar.js'
function Home() {
    return(
        <div>
            <Navbar />
            <div className = 'title-screen'>
                <h1 className='title'>Greenage</h1>
                <h3 className='subtitle'>Take your actions to save the world</h3>
            </div>

            <div className='content' id = 'about'>
                <div className = "row">
                    <div classname = "column">
                        <h3 className = "title2">Climate Change</h3>
                        <hr className = "center" size="8" width="15%"   style={{border: 'solid 3px #0e24fb', backgroundColor: '#0e24fb',opacity: 0.8}}/> 
                        <p className = "words">The climate on Earth is rapidly changing, and the consequences are unpredictable. The Earth’s average temperature has increased by 1°F over the past century. Scientists believe that the temperature can rise about 3 to 10°F this century. This can lead to shrinking glaciers, shifting plant and animal ranges, sea level rise, more intense heat waves, stronger hurricanes. </p>
                        <p className = "words">The evidence is pointing at us: humans. The cause of climate change is largely human activity because We have been changing the way we live and burning more fossil fuels. Greenhouse gases are emitted through electricity, transportation, and industrial processes. Imagine living in a world that has high intense temperatures, extreme hurricanes, and cities are buried under the water.</p>
                    </div>
                </div>
                
                <img className = "center" src='https://www.climate.gov/sites/default/files/SOTC_global_temps_1850-2019_620.jpg' alt="Greenage"/>
            </div>

            <div className='video' id ='video'>
                <h3 className = "title">Big News</h3> 
                <ReactPlayer 
                className='vid' 
                url='https://www.youtube.com/watch?v=auCzJFxQbqI' 
                width="50%"
                height="70%"
                />
            </div>

            <div className= 'Gallery' id = 'effect'>
                <h3 className="title2" style={{fontSize: '32px'}}>Before and After Within 100 years</h3>
                {/* <hr className = "center" size="8" width="15%"   style={{border: 'solid 3px #0e24fb', backgroundColor: '#0e24fb',opacity: 0.8}}/>  */}
                <Gallery />;
            </div>
            
            <div className="blue" id="mission">
                <h3 className = "title">Our mission</h3>
            </div>
            <div className="mission">
                <div className='col-11 col-md-4 col-xl-4'>
                <Card 
                title="Reduce Carbon Emissions"
                imageUrl="https://d3hnfqimznafg0.cloudfront.net/images/Article_Images/ImageForArticle_830(1).jpg"
                body=""
                />
                </div>
                <div className='col-11 col-md-4 col-xl-4'>
                <Card 
                title="Reduce use of plastic"
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynY_PpzfXV6o5onxBPA1ooHaKCr4bEdbZag&usqp=CAU"
                body=""
                />
                </div>
                <div className='col-11 col-md-4 col-xl-4'>
                <Card 
                title="Stop wasting energy"
                imageUrl="https://energyoutlet.com/wp-content/uploads/2018/11/Ways-To-Save-Energy-at-Home.png"
                body=""
                />
                </div>
            </div>
            <div>
                <Column />
            </div>
        </div>
    )
}
export default Home;