import './column.css'

function Column() {
    return (
        <div className = 'table'>
            <div class="row">
                <div className="column">
                    <h1 className = "title2 name" style = {{fontSize: "30px"}}>To stop climate change, we should stop burning fossil fuels as soon as possible.</h1>
                    <ul className = "list"> 
                        <li>Closing coal plants</li>
                        <li>Building clean energy infrastructure</li>
                    </ul>
                </div>
                <div className="column2">
                    <img src = 'https://bloombergcoalcountdown.com/wp-content/uploads/2021/02/shutterstock_605248844-1-1.jpg' alt='' width='100%' height="100%"/>
                </div>
            </div>
            <div className = 'row'>
                <div className="column">
                    <img src = 'https://e360.yale.edu/assets/site/_1260xAUTO_stretch_center-center/CloseTheLoop_Australia_IMG_20200620_163953_web.jpg' alt='' width='100%' height="100%"/>
                </div>
                <div className="column2">
                    <h1 className = "title2 name" style = {{fontSize: "30px"}}>Pave our road with recycle plastic</h1>
                    <ul className = "list"> 
                        <li>shredded and melted bags, bottles, and snack wraps</li>
                        <li>Turning recycle plastic into paving material — it won’t get buried; it won’t get burned; it won’t make it to the ocean.</li>
                    </ul>
                </div>
            </div>
            <div className = "row">
                <div className = "column">
                    <h1 className = "title2 name" style = {{fontSize: "30px"}}>Turn off your house applicances when you are not using it</h1>
                    <ul className = "list"> 
                        <li>Saving energy reduces air and water pollution and conserves natural resources, which in turn creates a healthier living environment for people everywhere</li>
                        <li>Energy efficiency reduces the need to burn the fuels to begin with, reducing pollution while saving money</li>
                    </ul>
                </div>
                <div className = "column2">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-portable-ac-units-1554305629.png" alt='' width='100%' height="100%"/>
                </div>
            </div>
        </div>
    )
}
export default Column;