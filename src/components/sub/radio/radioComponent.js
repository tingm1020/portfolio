import stylesPage from '../../../assets/styles/Page.module.scss';

const RadioComponent = ({ onChange, options, defaultValue }) => {
    return (
        <form>
            {options.map((option, index) => (
                <label key={index} className={stylesPage.RadioStyle1Label}>
                    <input 
                        type="radio" 
                        name="image" 
                        value={option.value} 
                        className={stylesPage.RadioStyle1Input} 
                        onChange={onChange} 
                        defaultChecked={option.value === defaultValue}
                    />
                    <span className={stylesPage.RadioStyle1Txt}>{option.label}</span>
                </label>
            ))}
        </form>
    );
};

export default RadioComponent;

