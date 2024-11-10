const API_URL = "http://localhost:3000/api"; // adjust this to match your backend URL

export interface Shift {
  id: string;
  startTime: Date;
  endTime: Date;
  specialty: string;
  status: "OPEN" | "FILLED" | "CANCELLED";
  facility: {
    name: string;
  };
}

interface RawShift extends Omit<Shift, "startTime" | "endTime"> {
  startTime: string;
  endTime: string;
}

export const shiftService = {
  async getShifts(): Promise<Shift[]> {
    const response = await fetch(`${API_URL}/shifts`);
    if (!response.ok) {
      throw new Error("Failed to fetch shifts");
    }
    const shifts = await response.json();
    return shifts.map((shift: RawShift) => ({
      ...shift,
      startTime: new Date(shift.startTime),
      endTime: new Date(shift.endTime),
    }));
  },

  async applyForShift(shiftId: string): Promise<void> {
    const response = await fetch(`${API_URL}/shifts/${shiftId}/apply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to apply for shift");
    }
  },
};
