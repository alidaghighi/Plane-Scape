interface IIconInputField {
    icon?: string;
    placeholder?: string;
    type?: string;
    className?: string;
    iconClassName?: string;
    inputClassName?: string;
    iconLeft?: boolean;
    datePicker?: boolean;
}

const IconInputField = ({ 
    icon = '', 
    placeholder = '', 
    type = 'text', 
    className = '', 
    iconClassName = '', 
    inputClassName = '',
    iconLeft = true,

}: IIconInputField) => {

    return (   
        <div className={className}>
            {iconLeft && <i className={icon + ' ' + iconClassName} />}
            <input 
                type={type} 
                placeholder={placeholder} 
                className={inputClassName}
            />
            {!iconLeft && <i className={icon + ' ' + iconClassName} />}
        </div>
    )
};
export default IconInputField;
