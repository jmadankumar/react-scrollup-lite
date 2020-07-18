import React from 'react';

import ScrollUp from 'react-scrollup-lite';
import 'react-scrollup-lite/dist/index.css';

const App = () => {
    return (
        <div>
            <div className='red'>Scroll Down</div>
            <div className='yellow'>Scroll Down</div>""
            <ScrollUp startPosition={0} showAtPosition={10} position='right'>
                <button>Scroll up</button>
            </ScrollUp>
        </div>
    );
};

export default App;
