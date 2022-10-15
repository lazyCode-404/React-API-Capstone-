import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsMicFill, BsFillGearFill, BsCaretLeftFill } from 'react-icons/bs';
import './NewsBody.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="header">
      {
        window.location.pathname === '/'
          ? (
            <span>Home</span>
          )
          : (
            <button type="button" onClick={() => navigate(-1)}>
              <BsCaretLeftFill />
              Back
            </button>
          )
      }
      <h1>COVID-19 Data Statistics</h1>
      <div className="header-actions">
        <span><BsMicFill /></span>
        <span><BsFillGearFill /></span>
      </div>
    </nav>
  );
};

export default Header;
