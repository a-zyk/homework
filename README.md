## Introduction about the project

This app will let you to choose a date range, work hours, busy hours per day and calculate how many hours per day you need to work to achieve your goal in the given date frame. It will exclude weekends as well.

## How it works

A date range spanning from the start to the end is created and then iterated over. Busy hours are substracted from 24 hours - that leaves us total time that can be used for studying. This number gets deducted from total time that is required to finish the thesis. As the loop goes on study time gets substracted and the math.min checks if the available time for study more or less than actual work time per day. This ensures that if work hours are less than available study time only work hours are put into the object as a value.

## Things to be improved

More that 24 hours can be put into the busy hours input, negative number can be put in busy hours and work hours inputs and that breaks calculations. Setting min and max values for input would help but that only works in the form input on submit. So keeping the form in the form tag would help.

There is an option to change each day's busy and work hours, however, it does not recalculate/update the object that holds busy/work hours correctly. As the busy hours/work hours object is updated in 2 different functions it breaks. Solution would be to set and rewrite updated busy/work hours in the same function...

There is no option to exclude holidays or change weekend to a work day as it would require to update the object that holds work hours and busy hours, however, the same issue wound arrise as mentioned above.

## Running the project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
