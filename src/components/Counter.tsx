import './counter.css';

interface CounterProps {
    isPrimary?: boolean,
    size?: 8 | 12 | 16 | 20 | 24,
    stroke?: boolean,
    quantity?: string,
    pulse?: boolean
}

export default function Counter({ isPrimary = true, size = 8, stroke = true, quantity = '', pulse = false}: CounterProps) {
    const className = `counter ${isPrimary ? 'primary' : 'secondary'} size-${size} ${stroke ? 'stroke' : ''} ${size <= 12 && pulse ? 'pulse' : ''}`

    let quantityText = '';
    if(size > 12){
        if(Number.isNaN(Number(quantity)))
            quantityText = quantity.substring(0, 3);
        else
            quantityText = quantity.length > 2 ? "99+" : quantity;
    }


    return (
        <span className={className}>
            {quantityText}
        </span>
    );
}