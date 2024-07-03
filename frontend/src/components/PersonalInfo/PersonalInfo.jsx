import React, { useContext } from 'react'
import "./PersonalInfo.css"
import { StoreContext } from '../../context/StoreContext'

const PersonalInfo = () => {

  const {user} = useContext(StoreContext);

  return (
    <div className='personal-info'>
      <div className="title">
        Personal Information
      </div>
      <div className="info-cards">
        <div className="info-card">
          <span>Name</span>
          <hr />
          <p>{user.name}</p>
        </div>
        <div className="info-card">
          <span>Birthday</span>
          <hr />
          <p>20 / 04 / 2004</p>
        </div>
        <div className="info-card">
          <span>School/College</span>
          <hr />
          <p>MIT World Peace University</p>
        </div>
        <div className="info-card">
          <span>Gender</span>
          <hr />
          <p>Male</p>
        </div>
        <div className="info-card">
          <span>Email</span>
          <hr />
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
