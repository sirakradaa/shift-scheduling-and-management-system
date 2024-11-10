import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface Shift {
  id: string;
  startTime: Date;
  endTime: Date;
  specialty: string;
  status: "OPEN" | "FILLED" | "CANCELLED";
}

export default function ShiftCalendar({ shifts }: { shifts: Shift[] }) {
  const events = shifts.map((shift) => ({
    title: `${shift.specialty} - ${shift.status}`,
    start: new Date(shift.startTime),
    end: new Date(shift.endTime),
    resource: shift,
  }));

  return (
    <div className="h-[600px] p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="bg-white p-4 rounded-lg shadow"
      />
    </div>
  );
}
