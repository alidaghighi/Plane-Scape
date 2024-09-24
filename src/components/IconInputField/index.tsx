import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  icon = "",
  placeholder = "",
  type = "text",
  className = "",
  iconClassName = "",
  inputClassName = "",
  iconLeft = true,
  datePicker = false,
}: IIconInputField) => {

  const [startDate, setStartDate] = useState<Date | null | undefined>(
    new Date()
  );

  if (datePicker) {
    return (
      <>
        <div className={className}>
          {iconLeft && <i className={icon + " " + iconClassName} />}
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="outline-none"
          />
          {!iconLeft && <i className={icon + " " + iconClassName} />}
        </div>
      </>
    );
  }

  return (
    <div className={className}>
      {iconLeft && <i className={icon + " " + iconClassName} />}
      <input type={type} placeholder={placeholder} className={inputClassName} />
      {!iconLeft && <i className={icon + " " + iconClassName} />}
    </div>
  );
};
export default IconInputField;
