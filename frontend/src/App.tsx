import { useState, useEffect } from "react";
import ShiftCalendar from "./components/ShiftCalendar";
import ShiftList from "./components/ShiftList";
import { shiftService, Shift } from "./services/shiftService";

function App() {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadShifts();
  }, []);

  const loadShifts = async () => {
    try {
      setLoading(true);
      const data = await shiftService.getShifts();
      setShifts(data);
      setError(null);
    } catch (err) {
      setError("Failed to load shifts");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleApplyForShift = async (shiftId: string) => {
    try {
      await shiftService.applyForShift(shiftId);
      // Reload shifts to get updated status
      await loadShifts();
    } catch (err) {
      console.error(err);
      // Handle error (maybe show a toast notification)
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Available Shifts
        </h1>

        {loading && <div className="text-center">Loading shifts...</div>}
        {error && <div className="text-center text-red-500">{error}</div>}

        {!loading && !error && (
          <div className="grid gap-8">
            <ShiftCalendar shifts={shifts} />
            <ShiftList shifts={shifts} onApply={handleApplyForShift} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
