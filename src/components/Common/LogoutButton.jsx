import React from 'react';
import styled from 'styled-components';

const LogoutButton = ({ onClick, className }) => {
  return (
    <StyledWrapper className={className}>
      <button className="Btn" onClick={onClick}>
        <div className="sign">
          <svg viewBox="0 0 512 512">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
          </svg>
        </div>
        <div className="text">Logout</div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  
  .Btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: 0.3s;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to right, #3498db, #e74c3c);
    margin: 0;
  }

  .sign {
    width: 100%;
    transition-duration: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sign svg {
    width: 17px;
  }

  .sign svg path {
    fill: white;
  }

  .text {
    position: absolute;
    right: 0;
    width: 0;
    opacity: 0;
    color: #ecf0f1;
    font-size: 14px;
    font-weight: 500;
    transition-duration: 0.3s;
  }

  .Btn:hover {
    width: 100%;
    border-radius: 6px;
  }

  .Btn:hover .sign {
    width: 30%;
    padding-left: 8px;
  }

  .Btn:hover .text {
    opacity: 1;
    width: 70%;
    padding-right: 8px;
  }

  .Btn:active {
    transform: translateY(1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

export default LogoutButton;