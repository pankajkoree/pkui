const Dropdown = ({ label }) => (
    <div className="relative">
      <Button onClick={() => setIsDropdownOpen(!isDropdownOpen)} size="sm">
        {label}
      </Button>
      {isDropdownOpen && (
        <div className="absolute z-10 mt-1 w-32 bg-white rounded-sm border shadow-sm">
          <div className="py-1">
            <a
              href="#"
              className="block px-3 py-1 text-xs hover:bg-gray-50 dark:bg-gray-700 dark:text-white"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-3 py-1 text-xs hover:bg-gray-50 dark:bg-gray-700 dark:text-white"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-3 py-1 text-xs hover:bg-gray-50 dark:bg-gray-700 dark:text-white"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );