import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import './DateRangePicker.css';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedRange, setSelectedRange] = useState('Custom');

  const handleSelectRange = (range) => {
    const today = new Date();
    switch (range) {
      case 'This week':
        setStartDate(new Date(today.setDate(today.getDate() - today.getDay())));
        setEndDate(new Date());
        break;
      case 'Last week':
        setStartDate(new Date(today.setDate(today.getDate() - today.getDay() - 7)));
        setEndDate(new Date(today.setDate(today.getDate() + 6)));
        break;
      // Add more cases for other ranges
      default:
        setStartDate(new Date());
        setEndDate(new Date());
    }
    setSelectedRange(range);
  };

  return (
    <div className="daterange-picker">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="MMM d, yyyy"
      />
      <span> - </span>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        dateFormat="MMM d, yyyy"
      />

      <div className="dropdown">
        <button className="dropbtn">{selectedRange}</button>
        <div className="dropdown-content">
          <div onClick={() => handleSelectRange('This week')}>This week</div>
          <div onClick={() => handleSelectRange('Last week')}>Last week</div>
          <div onClick={() => handleSelectRange('This month')}>This month</div>
          <div onClick={() => handleSelectRange('Last month')}>Last month</div>
          <div onClick={() => handleSelectRange('Last 30 days')}>Last 30 days</div>
          <div onClick={() => handleSelectRange('Last 180 days')}>Last 180 days</div>
          <div onClick={() => handleSelectRange('Last 365 days')}>Last 365 days</div>
          <div onClick={() => handleSelectRange('All time')}>All time</div>
          <div onClick={() => handleSelectRange('Custom')}>Custom</div>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
