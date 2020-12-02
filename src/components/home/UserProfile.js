import React from 'react';

const UserProfile = () => {
  return (
    <div className="UserProfile">
      <div className="User">
        <div className="image"><img src="https://avatars1.githubusercontent.com/u/34939115?s=460.jpg" /></div>
      </div>
      <div className="UserProfile-menu">
        <div className="UserProfileSwitch">
          <ul>
            <li>
              <div className="UserProfile-image">
                <img src="http://lorempixel.com/96/96" />
              </div>
              <div className="UserProfile-name">
                Abhi
								</div>
            </li>
            <li>
              <div className="UserProfile-image">
                <img src="http://lorempixel.com/96/96" />
              </div>
              <div className="UserProfile-name">
                Uniyal
								</div>
            </li>
          </ul>
        </div>
        <div className="UserNavigation">
          <ul>
            <li>Your Account</li>
            <li>Help Center</li>
            <li>Sign Out</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default UserProfile;