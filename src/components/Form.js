"use client";

export default function Form({
  handleSubmit,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setBusyHours,
  setTotalStudyHours,
}) {
  return (
    <div className="md:mt-5 flex items-center max-w-[800px]  flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow">
      <div className="md:max-h-none max-h-[350px] h-full overflow-hidden md:max-w-[300px]  ">
        <img
          className="md:rounded-l-lg min-h-[300px] w-full "
          src="/book.jpg"
        ></img>
      </div>

      <div className="flex flex-col gap-5 p-4">
          <div className="font-semibold">Are you ready to write your thesis?</div>
        <div className="md:flex gap-4">
          <div className="flex flex-col basis-full gap-4 ">
            <div>
              <label htmlFor="study-hours">How many hours it will take?</label>
              <input
            id="study-hours"
                onChange={(e) => setTotalStudyHours(e.target.value)}
                className="p-1 border w-full text-gray-900 border-gray-300 cursor-pointer rounded-lg"
                type="number"
              ></input>
            </div>

            <div>
              <label htmlFor="busy-hours">Busy hours per day?</label>
              <input
            id="busy-hours"
                onChange={(e) => setBusyHours(e.target.value)}
                className="text-gray-900 p-1 border border-gray-300 rounded-lg cursor-pointer w-full"
                type="number"
                max="24"
                min="0"
              ></input>
            </div>
          </div>

          <div className="flex flex-col basis-full gap-4">
            <div>
              <label htmlFor="start-date">Start Date</label>
              <input
            id="start-date"
                min={new Date().toISOString().split("T")[0]}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="text-gray-900 border p-1 border-gray-300 rounded-lg cursor-pointer w-full"
                type="date"
              ></input>
            </div>

            <div>
              <label htmlFor="end-date">End Date</label>
              <input
            id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="text-gray-900 border p-1 border-gray-300 rounded-lg cursor-pointer w-full"
                type="date"
              ></input>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-3">
          <button
            onClick={handleSubmit}
            className="bg-stone-500 w-full md:w-auto hover:bg-stone-700 text-white font-bold py-2 px-4 rounded"
          >
            Show the daily routine
          </button>
        </div>
      </div>
    </div>
  );
}
