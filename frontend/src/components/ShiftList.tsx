import { useState } from "react";

interface Shift {
  id: string;
  startTime: Date;
  endTime: Date;
  specialty: string;
  status: "OPEN" | "FILLED" | "CANCELLED";
  facility: {
    name: string;
  };
}

interface ShiftListProps {
  shifts: Shift[];
  onApply: (shiftId: string) => Promise<void>;
}

export default function ShiftList({ shifts, onApply }: ShiftListProps) {
  const [applying, setApplying] = useState<string | null>(null);

  const handleApply = async (shiftId: string) => {
    try {
      setApplying(shiftId);
      await onApply(shiftId);
    } finally {
      setApplying(null);
    }
  };

  return (
    <div className="space-y-4">
      {shifts.map((shift) => (
        <div
          key={shift.id}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{shift.specialty}</h3>
              <p className="text-gray-600">
                {new Date(shift.startTime).toLocaleDateString()}{" "}
                {new Date(shift.startTime).toLocaleTimeString()} -{" "}
                {new Date(shift.endTime).toLocaleTimeString()}
              </p>
            </div>
            <div>
              <span
                className={`px-2 py-1 rounded ${
                  shift.status === "OPEN"
                    ? "bg-green-100 text-green-800"
                    : shift.status === "FILLED"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {shift.status}
              </span>
            </div>
          </div>
          <button
            className={`mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors 
              ${shift.status !== "OPEN" ? "opacity-50 cursor-not-allowed" : ""}
              ${applying === shift.id ? "opacity-75 cursor-wait" : ""}`}
            onClick={() => handleApply(shift.id)}
            disabled={shift.status !== "OPEN" || applying === shift.id}
          >
            {applying === shift.id ? "Applying..." : "Apply for Shift"}
          </button>
        </div>
      ))}
    </div>
  );
}
