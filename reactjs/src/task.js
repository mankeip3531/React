import Card from './mission.js';
import './task.css';
import Nav from './nav.js';
function Task() {
    return(
        <div>
            <Nav />
            <h3 className="title2" style={{paddingTop: "200px"}}>Weekly To Do List</h3>
            <div className ="task row">
                <div className='col-11 col-md-4 col-xl-4'>
                    <Card 
                    title="Use a non plastic water bottle"
                    imageUrl="https://www.cnet.com/a/img/szfVUDpsSYr9MD3b_c2Jc0RjIAI=/420x236/2019/10/15/b66f1ea0-3763-40bb-9deb-19c65d7c5e3b/crazy-cap-1.jpg"
                    body=""
                    />
                </div>
                <div className='col-11 col-md-4 col-xl-4'>
                    <Card 
                    title="Walk to your destination"
                    imageUrl="https://i.insider.com/5eea8a48f0f419386721f9e8?width=1136&format=jpeg"
                    body=""
                    />
                </div>
                <div className='col-11 col-md-4 col-xl-4 special'>
                    <Card 
                    title="Turn off the light when you don’t need it "
                    imageUrl="https://img.freepik.com/free-photo/female-finger-is-turn-off-lighting-switch_40048-372.jpg?size=626&ext=jpg"
                    body=""
                    />
                    
                </div>
                
            </div>
            <div className = "challenge-box">
                <h3 className="title2">Weekly Challenge</h3>
                <img src = "/img/ECO-Challenge1.PNG" alt=''  className = 'center challenge' style={{maxWidth: '25%'}}/>
            </div>

        </div>
    )
}
export default Task;