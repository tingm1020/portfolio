import React from "react";
import stylesLoad from '../../../assets/styles/Load.module.scss';

const LoadVariant1 = () => {
    return (
        <div className={`${stylesLoad.Load_block} ${stylesLoad.Load_singlebox_style1}`}>
            {[...Array(4)].map((_, i) => (
                <div key={i} className={stylesLoad.Load_singlebox_style1_ball}></div>
            ))}
            <svg viewBox="0 0 180 180" className={stylesLoad.Load_singlebox_style1_txt} width="180" height="180">
                <defs>
                <path
                    id="circlePath"
                    d="M90,90 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
                />
                </defs>
                <text fill="white" fontSize="15" fontFamily="Zen Maru Gothic" letterSpacing="2">
                <textPath href="#circlePath" startOffset="0%">
                    LOADING ••••••••••••••••LOADING ••••••••••••••••••••
                </textPath>
                </text>
            </svg>
        </div>
    )
}

const LoadComponent = ({ variant }) => {
    const renderVariant = () => {
        switch (variant) {
            case "variant1": 
                return <LoadVariant1 />;
            default: 
                return <LoadVariant1 />;
        }
    };
    return (
        <div className={stylesLoad.Load_container}>
            {renderVariant()}
        </div>
    );
};

export default LoadComponent;