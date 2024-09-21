const plane = <i className="fas fa-plane mr-1"></i>;

const BookingPannel = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
            <h2 className="text-lg font-bold mb-4 text-gray-600">{plane} BOOK YOUR FLIGHT</h2>
            <div className="flex items-center space-x-4 mb-4 flex-wrap">
                <div className="flex items-center border rounded-lg p-2 flex-1">
                    <i className="fas fa-plane-departure text-violet-900 mr-2"></i>
                    <input
                        type="text"
                        placeholder="From"
                        className="flex-1 outline-none"
                    />
                </div>
                <div className="flex items-center border rounded-lg p-2 flex-1">
                    <i className="fas fa-plane-arrival text-violet-900 mr-2"></i>
                    <input
                        type="text"
                        placeholder="To"
                        className="flex-1 outline-none"
                    />
                </div>
                <div className="flex items-center border rounded-lg p-2">
                    <i className="fas fa-calendar-alt text-violet-900 mr-2"></i>
                    <input
                        type="text"
                        placeholder="Departure"
                        className="outline-none"
                    />
                </div>
                <div className="flex items-center border rounded-lg p-2">
                    <i className="fas fa-calendar-alt text-violet-900 mr-2"></i>
                    <input
                        type="text"
                        placeholder="Return"
                        className="outline-none"
                    />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-violet-900 text-white px-4 py-2 rounded-lg">
                    Show flights
                </button>
            </div>
        </div>
    )
}

export default BookingPannel