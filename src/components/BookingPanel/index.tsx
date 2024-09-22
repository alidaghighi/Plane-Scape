import IconInputField from "../IconInputField";

const plane = <i className="fas fa-plane mr-1"></i>;

const BookingPanel = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-10 space-y-9">
            <h2 className="text-lg font-bold mb-4 text-gray-600">{plane} BOOK YOUR FLIGHT</h2>
            <div className="flex items-center space-x-6 mb-4 flex-wrap">
                <IconInputField
                    icon="fas fa-plane-departure"
                    placeholder="From"
                    type="text"
                    className="flex items-center border p-2 rounded-l-3xl rounded-r-lg"
                    iconClassName="text-violet-900 mr-2"
                    inputClassName="outline-none"
                />
                <IconInputField
                    icon="fas fa-plane-arrival"
                    placeholder="To"
                    type="text"
                    className="flex items-center border p-2 rounded-r-lg rounded-l-lg"
                    iconClassName="text-violet-900 mr-2"
                    inputClassName="outline-none"
                />
                <IconInputField
                    icon="fas fa-calendar-alt"
                    placeholder="Date"
                    type="text"
                    className="flex items-center border p-2 rounded-r-3xl rounded-l-lg"
                    iconClassName="text-violet-900 mr-2"
                    inputClassName="outline-none"
                    datePicker
                />
            </div>
            <div className="flex items-center justify-between">
                <button className="transition ease-in-out duration-100 bg-violet-900 text-white px-4 py-2 rounded-lg hover:bg-violet-600 hover:shadow-md active:bg-violet-700">
                    Show flights
                </button>
            </div>
        </div>
    )
}

export default BookingPanel