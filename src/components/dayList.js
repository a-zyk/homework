"use client";
import Day from "./Day";
export default function DayList({ stats, handleDayUpdate }) {
  const statsElement = Object.keys(stats).map((key) => {
    return (
      <div className="flex w-full" key={key}>
        <Day
          handleDayUpdate={handleDayUpdate}
          date={key}
          workHours={stats[key].workHours}
          busyHours={stats[key].busyHours}
          isWeekend={stats[key].isWeekend}
        />
      </div>
    );
  });

  return statsElement;
}
