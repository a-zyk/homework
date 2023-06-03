"use client";
import { useState } from "react";
import DayList from "@/components/dayList";
import Form from "@/components/Form";
export default function Home() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalStudyHours, setTotalStudyHours] = useState();
  const [busyHours, setBusyHours] = useState();
  const [stats, setStats] = useState({});
  const [workHoursLeft, setWorkHoursLeft] = useState();

  // Get date range in between 2 given dates
  const dateRange = (startDate, endDate) => {
    let dateRange = [];
    for (
      let i = new Date(startDate);
      i <= new Date(endDate);
      i.setDate(i.getDate() + 1)
    ) {
      dateRange.push(new Date(i));
    }
    return dateRange;
  };

  // Handle all inputs, handle calculations and construct an object

  const setResults = () => {
    const days = dateRange(startDate, endDate);

    let newStats = Object.assign({}, stats);

    let workHours = totalStudyHours;
    days.forEach((day) => {
      const hoursLeftInTheDay = 24;
      const adjustedBusyHours = busyHours;
      const timeLeftForStudies = hoursLeftInTheDay - adjustedBusyHours;
      let actualyStudyTime = Math.min(timeLeftForStudies, workHours);

      if (skipWork(day)) {
        actualyStudyTime = 0;
      }

      workHours -= actualyStudyTime;

      newStats[day] = {
        busyHours: adjustedBusyHours,
        workHours: actualyStudyTime,
        isWeekend: skipWork(day),
      };
    });
    setWorkHoursLeft(workHours);
    setStats(newStats);
  };
  // Does not work as state is being set in 2 places and while updating busy/study hours change in every date would end up in a loop. :(
  const handleDayUpdate = (day, updatedBusyHours, updatedWorkHours) => {
    setStats((previousStats) => ({
      ...previousStats,
      [day]: {
        busyHours: updatedBusyHours,
        workHours: updatedWorkHours,
      },
    }));
  };
  //Check if the day is the weekend. No Study hours for those days
  const skipWork = (day) => {
    return day.getDay() === 0 || day.getDay() === 6;
  };
  //  Check if statistic object exist, if so show if you are going to make it or not.
  let showIfGonnaMakeIt =
    workHoursLeft == 0 ? (
      <div>You are going to make it!</div>
    ) : (
      <div>
        You are not going to make it, {workHoursLeft} hours needed to succeed.
      </div>
    );

  return (
    <>
      <div className="container flex flex-col items-center max-w-[800px]">
        <Form
          handleSubmit={setResults}
          busyHours={busyHours}
          setBusyHours={setBusyHours}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          setTotalStudyHours={setTotalStudyHours}
        />
        <div className="font-semibold text-lg m-2">
          {Object.keys(stats).length ? showIfGonnaMakeIt : null}
        </div>

        <DayList handleDayUpdate={handleDayUpdate} stats={stats} />
      </div>
    </>
  );
}
