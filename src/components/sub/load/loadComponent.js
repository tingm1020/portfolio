import stylesLoad from '../../../assets/styles/Load.module.scss';

const LoadVariant1 = () => {
    return (
        <div className={`${stylesLoad.LoadBlock} ${stylesLoad.LoadSingleboxStyle1}`}>
            {[...Array(4)].map((_, i) => (
                <div key={i} className={stylesLoad.LoadSingleboxStyle1Ball}></div>
            ))}
            <svg viewBox="0 0 180 180" className={stylesLoad.LoadSingleboxStyle1Txt} width="180" height="180">
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
        <div className={stylesLoad.LoadContainer}>
            {renderVariant()}
        </div>
    );
};

export default LoadComponent;