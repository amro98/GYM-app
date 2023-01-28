import React from 'react'
import { useNavigate } from "react-router-dom";
import Back from "../../assets/images/back.jpg"
import Cardio from "../../assets/images/cardio.jpg"
import Chest from "../../assets/images/chest.jpg"
import LowerArms from "../../assets/images/lower-arms.jpg"
import LowerLegs from "../../assets/images/lower-legs.jpg"
import Neck from "../../assets/images/neck.jpg"
import Shoulders from "../../assets/images/shoulders.jpg"
import UpperArms from "../../assets/images/upper-arms.jpg"
import UpperLegs from "../../assets/images/upper-legs.jpg"
import Waist from "../../assets/images/waist.jpg"

function ExercisesTypes() {

  const navigate = useNavigate();
  return (
    <div className="container ">
        <div className="row ">
          <div className="col-md-6" >
            {/* back */}
            <div className='exercise mb-2' onClick={() =>{navigate(`/exercise/back`)}}>
                <img src={Back} alt="back" className="w-100 rounded" height={300}/>
                <div className='caption rounded d-flex justify-content-center align-items-center'>
                    <h3>Back</h3>
                </div>
            </div>

          </div>
          <div className="col-md-3 ">
            {/* cardio */}
            <div className='exercise mb-2' onClick={() =>{navigate(`/exercise/cardio`)}}>
            <img src={Cardio} alt="cardio" className="w-100 rounded" height={300}/>
            <div className='caption rounded d-flex justify-content-center align-items-center'><h3>Cardio</h3></div>
            </div>
          </div>
          <div className="col-md-3 ">
            {/* chest */}
            <div className='exercise mb-2' onClick={() =>{navigate(`/exercise/chest`)}}>
            <img src={Chest} alt="chest" className="w-100 rounded" height={300}/>
            <div className='caption rounded d-flex justify-content-center align-items-center'><h3>Chest</h3></div>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-3 ">
            {/* lower arms */}
            <div className='exercise mb-2' onClick={() =>{navigate(`/exercise/lower arms`)}}>
            <img src={LowerArms} alt="lower arms" className="w-100 rounded" height={300}/>
            <div className='caption rounded d-flex justify-content-center align-items-center'><h3>Lower Arms</h3></div>
            </div>
          </div>
          <div className="col-md-6 ">
            {/* lower legs */}
            <div className='exercise mb-2' onClick={() =>{navigate(`/exercise/lower legs`)}}>
            <img src={LowerLegs} alt="lower legs" className="w-100 rounded" height={300}/>
            <div className='caption rounded d-flex justify-content-center align-items-center'><h3>Lower Legs</h3></div>
            </div>
          </div>
          <div className="col-md-3 ">
            {/* neck */}
            <div className='exercise mb-2' onClick={() =>{navigate(`/exercise/neck`)}}>
            <img src={Neck} alt="neck" className="w-100 rounded" height={300}/>
            <div className='caption rounded d-flex justify-content-center align-items-center'><h3>Neck</h3></div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-3 ">
            {/* shoulders */}
            <div className='exercise mb-2' onClick={() =>{navigate(`/exercise/shoulders`)}}>
            <img src={Shoulders} alt="shoulders" className="w-100 rounded" height={300}/>
            <div className='caption rounded d-flex justify-content-center align-items-center'><h3>Shoulders</h3></div>
            </div>
          </div>
          <div className="col-md-3 ">
            {/* upper arms */}
            <div className='exercise mb-2' onClick={() =>{navigate(`/exercise/upper arms`)}}>
            <img src={UpperArms} alt="upper arms" className="w-100 rounded" height={300}/>
            <div className='caption rounded d-flex justify-content-center align-items-center'><h3>Upper Arms</h3></div>
            </div>
          </div>
          <div className="col-md-3 ">
            {/* upper legs */}
            <div className='exercise mb-2' onClick={() =>{navigate(`/exercise/upper legs`)}}>
                <img src={UpperLegs} alt="upper arms" className="w-100 rounded" height={300}/>
                <div className='caption rounded d-flex justify-content-center align-items-center'><h3>Upper Legs</h3></div>
                </div>
          </div>
          <div className="col-md-3 ">
            {/* waist */}
            <div className='exercise mb-2' onClick={() =>{navigate(`/exercise/waist`)}}>
                <img src={Waist} alt="waist" className="w-100 rounded" height={300}/>
                <div className='caption rounded d-flex justify-content-center align-items-center'><h3>Waist</h3></div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default ExercisesTypes
