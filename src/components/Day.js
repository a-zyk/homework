"use client";
import { useState } from "react";
import { editIcon, checkIcon } from "./icons";
export default function Day({
  date,
  busyHours,
  workHours,
  handleDayUpdate,
  isWeekend,
}) {
  const [editing, setEditing] = useState(false);
  const [changedBusyHours, setChangedBusyHours] = useState(busyHours);
  const [changedWorkHours, setChangedWorkHours] = useState(workHours);

  const handleHoursEdit = () => {
    setEditing(true);
  };

  const handleHoursEditingDone = () => {
    console.log(changedBusyHours);
    handleDayUpdate(date, changedBusyHours, changedWorkHours);
    setEditing(false);
  };

  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <div>{new Date(date).toISOString().split("T")[0]}</div>
      <div className="">
        {editing ? (
          <div className="flex flex-start items-center gap-5 p-2">
            <div>
              <label htmlFor="busy-hours-editing">Busy Hours</label>
              <input
                id="busy-hours-editing"
                onChange={(e) => setChangedBusyHours(e.target.value)}
                value={changedBusyHours}
                placeholder={busyHours}
                type="number"
                className="p-1 border w-full text-gray-900 border-gray-300 cursor-pointer rounded-lg"
              ></input>
            </div>

            <div>
              <label htmlFor="work-hours-editing">Work Hours</label>
              <input
                id="work-hours-editing"
                onChange={(e) => setChangedWorkHours(e.target.value)}
                value={changedWorkHours}
                placeholder={workHours}
                type="number"
                className="p-1 border w-full text-gray-900 border-gray-300 cursor-pointer rounded-lg"
              ></input>
            </div>
            <div className="flex flex-grow"></div>
            <button onClick={handleHoursEditingDone}>{checkIcon}</button>
          </div>
        ) : (
          <div className="flex flex-start items-center gap-5">
            <div className="">
              <label>Busy Hours</label>
              <div>{busyHours}</div>
            </div>
            <div className="">
              <label>Work Hours</label>

              {isWeekend ? (
                <div>It is a weekend, relax</div>
              ) : (
                <div>{workHours}</div>
              )}
            </div>
            <div className="flex flex-grow"></div>
            <button onClick={handleHoursEdit}>{editIcon}</button>
          </div>
        )}
      </div>
    </div>
  );
}
