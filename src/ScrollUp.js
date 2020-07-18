import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ScrollUp = ({ children, startPosition, showAtPosition, position }) => {
    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        window.scrollTo(0, startPosition);
    };

    const scrollListener = (event) => {
        if (window.pageYOffset > showAtPosition) {
            console.log(window.pageYOffset, showAtPosition);
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollListener, false);
        return () => {
            window.removeEventListener('scroll', scrollListener, false);
        };
    }, []);

    const styles = {
        display: visible ? 'block' : 'none',
        position: 'fixed',
        bottom: '50px',
        zIndex: 1050,
        ...(position === 'right' ? { right: '50px' } : { left: '50px' }),
    };
    return (
        <div
            onClick={handleClick}
            style={{
                ...styles,
            }}
        >
            {children}
        </div>
    );
};
ScrollUp.propTypes = {
    startPosition: PropTypes.number,
    showAtPosition: PropTypes.number,
    position: PropTypes.oneOf(['left', 'right']),
};

export default ScrollUp;
