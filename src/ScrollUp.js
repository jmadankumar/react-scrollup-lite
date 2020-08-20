import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ScrollUp = ({
    children,
    startPosition,
    showAtPosition,
    position = 'right',
    className,
    style,
}) => {
    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        window.scrollTo(0, startPosition);
    };

    const scrollListener = (event) => {
        if (window.pageYOffset > showAtPosition) {
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
        zIndex: 999,
        ...(position === 'left' ? { left: '50px' } : { right: '50px' }),
        ...style,
    };
    return (
        <div onClick={handleClick} style={styles} className={className}>
            {children}
        </div>
    );
};
ScrollUp.propTypes = {
    startPosition: PropTypes.number,
    showAtPosition: PropTypes.number,
    position: PropTypes.oneOf(['left', 'right']),
    className: PropTypes.string,
    style: PropTypes.object,
};

export default ScrollUp;
