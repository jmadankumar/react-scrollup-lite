import * as React from 'react';

interface ScrollUpProps {
    startPosition: number;
    showAtPosition: number;
    position?: 'left' | 'right';
    className?: string;
    style?: React.CSSProperties;
}
export default class ScrollUp extends React.Component<ScrollUpProps, any> {}
