import './counter.css';
import React from "react";

export interface Theme {
    backgroundColor: string;
    fontColor: string;
}

interface CounterProps {
    theme?: 'primary' | 'secondary' | Theme,
    size?: 8 | 12 | 16 | 20 | 24,
    stroke?: boolean,
    quantity?: string,
    pulse?: boolean,
    customColor?: string,
}

const PRIMARY_THEME = {
    backgroundColor: '#37b676',
    fontColor: '#fff'
}

const SECONDARY_THEME = {
    backgroundColor: '#e8e8e8',
    fontColor: '#000'
}

export default function Counter({theme = 'primary', size = 8, stroke = true, quantity = '', pulse = false}: CounterProps) {
    const className = `counter size-${size} ${stroke ? 'stroke' : ''} ${size <= 12 && pulse ? 'pulse' : ''}`

    let quantityText = '';
    if(size > 12){
        if(Number.isNaN(Number(quantity)))
            quantityText = quantity.substring(0, 3);
        else
            quantityText = quantity.length > 2 ? "99+" : quantity;
    }
    const targetTheme = typeof theme === 'string' ? (theme === 'primary' ? PRIMARY_THEME : SECONDARY_THEME) : theme;
    const style = {
        '--style-color': targetTheme.backgroundColor,
        '--style-font-color': targetTheme.fontColor,
    } as React.CSSProperties;

    return (
        <span className={className} style={style}>
            {quantityText}
        </span>
    );
}