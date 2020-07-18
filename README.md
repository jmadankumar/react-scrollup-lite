# react-scrollup-lite

> React wrapper component for scroll up

[![NPM](https://img.shields.io/npm/v/react-scrollup-lite.svg)](https://www.npmjs.com/package/react-scrollup-lite) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-scrollup-lite
```

## Usage

```jsx
import React, { Component } from 'react';

import ScrollUp from 'react-scrollup-lite';
import 'react-scrollup-lite/dist/index.css';

class Example extends Component {
    render() {
        return (
            <ScrollUp startPosition={0} showAtPosition={10} position='right'>
                <button>Scroll up</button>
            </ScrollUp>
        );
    }
}
```

## Proptypes

|Props|types|description|
|-----|------|----------|
|startPosition|number| start position to scroll up|
|showAtPosition|number| At what position component children should be visible|
|position|string|left or right|

## License

MIT © [Madan Kumar](https://github.com/jmadankumar)
