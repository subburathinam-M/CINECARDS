    import React, { useState } from 'react';
    import styled from 'styled-components';

    const LoginButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    const handleMouseEnter = () => {
        if (!clicked) setIsHovered(true);
    };

    const handleMouseLeave = () => {
        if (!clicked) setIsHovered(false);
    };

    const handleClick = () => {
        setClicked(true);
        setIsHovered(false); // Reset hover
        setTimeout(() => setClicked(false), 300); // Reset click effect
    };

    return (
        <StyledWrapper>
        <div
            aria-label="User Login Button"
            tabIndex={0}
            role="button"
            className={`user-profile ${isHovered ? 'hovered' : ''} ${clicked ? 'clicked' : ''}`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="user-profile-inner">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z" />
            </svg>
            <p>Log In</p>
            </div>
        </div>
        </StyledWrapper>
    );
    };

    const StyledWrapper = styled.div`
    .user-profile {
        width: 110px;
        height: 42px;
        border-radius: 12px;
        cursor: pointer;
        transition: 0.3s ease;
        background: linear-gradient(to bottom right, #2e8eff 0%, rgba(46, 142, 255, 0) 30%);
        background-color: rgba(46, 142, 255, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .user-profile.hovered {
        background-color: #e6f2ff;
        box-shadow: 0 0 8px rgba(46, 142, 255, 0.5);
        transform: scale(1.1);
    }

    .user-profile.clicked {
        background-color: #b3d9ff;
        box-shadow: 0 0 8px rgba(0, 102, 204, 0.8);
        transform: scale(1.05);
    }

    .user-profile-inner {
        width: 106px;
        height: 38px;
        border-radius: 10px;
        background-color: #1a1a1a;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: #fff;
        font-size: 0.85rem;
        font-weight: 600;
        transition: color 0.3s ease;
    }

    .user-profile-inner svg {
        width: 20px;
        height: 20px;
        fill: #fff;
        transition: fill 0.3s ease;
    }

    .user-profile.hovered .user-profile-inner {
        color: #2e8eff;
    }

    .user-profile.hovered .user-profile-inner svg {
        fill: #2e8eff;
    }

    .user-profile.clicked .user-profile-inner,
    .user-profile.clicked .user-profile-inner svg {
        color: #fff;
        fill: #fff;
    }
    `;

    export default LoginButton;
