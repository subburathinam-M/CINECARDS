    const Filter = ({ options, selected, onSelect }) => {
        return (
        <div className="flex overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex space-x-2">
            {options.map(option => (
                <button
                key={option}
                onClick={() => onSelect(option)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    selected === option
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                >
                {option}
                </button>
            ))}
            </div>
        </div>
        );
    };
    
    export default Filter;