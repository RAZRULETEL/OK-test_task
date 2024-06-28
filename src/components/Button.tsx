import React from "react";
import './button.css';
import Counter, {CounterProps, CounterSize, Theme} from "./Counter";

type ButtonSize = 28 | 36 | 56;
interface ButtonProps {
    label?: string;
    isPrimary?: boolean;
    size?: ButtonSize;
    state?: 'enabled' | 'disabled' | 'loading';
    children?: React.ReactElement;
    onMouseDown?: (event: MouseEvent) => void;
}

const PrimaryCounterTheme: Theme = {
    backgroundColor: '#ff9133',
    fontColor: '#fff'
};

const DEFAULT_BUTTON_SIZE = 36;
const ButtonToCounterSize: {[key in ButtonSize]: CounterSize} = {
    28: 16,
    36: 20,
    56: 24
}

const ButtonContext = React.createContext<[CounterSize, Theme]>([ButtonToCounterSize[DEFAULT_BUTTON_SIZE], PrimaryCounterTheme]);

function Button({label = 'Button', isPrimary = true, size = DEFAULT_BUTTON_SIZE, state = 'enabled', onMouseDown, children, ...settings}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const ripple = React.createRef<HTMLDivElement>();

    const className = `custom-button size-${size} ${isPrimary ? 'primary' : 'secondary'} ${state === 'loading' ? 'loading' : ''}`;

    const counterSize = ButtonToCounterSize[size];
    const counterTheme: Theme = isPrimary ? PrimaryCounterTheme: {
        backgroundColor: '#e3ddd9',
        fontColor: '#000'
    };
    return (
        <button
            className={className}
            disabled={state === 'disabled'}
            onMouseDown={e => {
                const rect = e.currentTarget.getBoundingClientRect();
                const offsetX = e.clientX - rect.left;
                const offsetY = e.clientY - rect.top;
                if (ripple.current) {
                    ripple.current.style.top = `${offsetY}px`;
                    ripple.current.style.left = `${offsetX}px`;
                }
                onMouseDown && onMouseDown(e);
            }}
            {...settings}>
            <div className="content">
                <span>{label}</span>
                <ButtonContext.Provider value={[counterSize, counterTheme]}>
                    {children}
                </ButtonContext.Provider>
            </div>
            <div className="ripple" ref={ripple}></div>
        </button>
    );
}

Button.Counter = function ButtonCounter(props: CounterProps){
    const [counterSize, counterTheme] = React.useContext(ButtonContext);
    return <Counter {...props} size={counterSize} theme={counterTheme}/>
};

export default Button;
