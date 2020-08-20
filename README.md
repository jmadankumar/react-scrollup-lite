# react-scrollup-lite

> React wrapper component to scroll up/top when user scrolls the page

[![NPM](https://img.shields.io/npm/v/react-scrollup-lite.svg)](https://www.npmjs.com/package/react-scrollup-lite) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-scrollup-lite
```

## Usage

```jsx
import React, { Component } from 'react';

import ScrollUp from 'react-scrollup-lite';

class Example extends Component {
    render() {
        return (
            <ScrollUp
                startPosition={0}
                showAtPosition={10}
                position='right'
                className='scroll-up'
                style={{
                    right: '20px',
                }}
            >
                <button>Scroll up</button>
            </ScrollUp>
        );
    }
}
```

## Proptypes

| Props               | Type   | Description                                                                   |
| ------------------- | ------ | ----------------------------------------------------------------------------- |
| startPosition       | number | start position to scroll up                                                   |
| showAtPosition      | number | when scrolling the page at what position component children should be visible |
| position (optional) | string | left or right (where to show the children component) (default - right)        |

## License

MIT © [Madan Kumar](https://github.com/jmadankumar)
