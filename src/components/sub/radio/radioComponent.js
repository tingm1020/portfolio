import stylesPage from '../../../assets/styles/Page.module.scss';

const RadioComponent = ({ onChange, options, defaultValue }) => {
    return (
        <form>
            {options.map((option, index) => (
                <label key={index} className={stylesPage.Radio_style1_label}>
                    <input 
                        type="radio" 
                        name="image" 
                        value={option.value} 
                        className={stylesPage.Radio_style1_input} 
                        onChange={onChange} 
                        defaultChecked={option.value === defaultValue}
                    />
                    <span className={stylesPage.Radio_style1_txt}>{option.label}</span>
                </label>
            ))}
        </form>
    );
};

export default RadioComponent;

