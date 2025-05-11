    import React, { useState } from 'react';
    import styled from 'styled-components';

    const SignupButton = () => {
    const [isHovered, setIsHovered] = useState(false); // Track hover state
    const [clicked, setClicked] = useState(false); // Track click state

    const handleMouseEnter = () => {
        if (!clicked) {
        setIsHovered(true); // Apply hover styles only if not clicked
        }
    };

    const handleMouseLeave = () => {
        if (!clicked) {
        setIsHovered(false); // Remove hover styles only if not clicked
        }
    };

    const handleClick = () => {
        setClicked(true); // Mark as clicked
        setIsHovered(false); // Remove hover effect immediately after click
        // Simulate button action (open form, etc.)
        setTimeout(() => setClicked(false), 300); // Reset the clicked state after a short delay (simulate the form action)
    };

    return (
        <StyledWrapper>
        <div
            aria-label="User Signup Button"
            tabIndex={0}
            role="button"
            className={`user-profile ${isHovered ? 'hovered' : ''} ${clicked ? 'clicked' : ''}`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="user-profile-inner">
            <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-3.33 0-10 1.67-10 5v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1c0-3.33-6.67-5-10-5z" />
            </svg>
            <p>Sign Up</p>
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
        background: linear-gradient(
        to bottom right,
        #2e8eff 0%,
        rgba(46, 142, 255, 0) 30%
        );
        background-color: rgba(46, 142, 255, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Hover effect when mouse is over the button */
    .user-profile.hovered {
        background-color: rgba(46, 142, 255, 0.7);
        box-shadow: 0 0 8px rgba(46, 142, 255, 0.5);
        outline: none;
        transform: scale(1.1); /* Zoom effect */
    }

    /* Reset effect after the button is clicked */
    .user-profile.clicked {
        background-color: rgba(46, 142, 255, 0.5);
        box-shadow: none;
        transform: scale(1); /* Remove zoom effect */
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

    /* On hover, change the icon and text color to green */
    .user-profile.hovered .user-profile-inner,
    .user-profile.clicked .user-profile-inner {
        color: green;
    }

    .user-profile.hovered .user-profile-inner svg,
    .user-profile.clicked .user-profile-inner svg {
        fill: green;
    }
    `;

    export default SignupButton;
