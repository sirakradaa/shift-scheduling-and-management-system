import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Shift {
  id: string;
  startTime: Date;
  endTime: Date;
  specialty: string;
  status: "OPEN" | "FILLED" | "CANCELLED";
}

interface ShiftsState {
  items: Shift[];
  loading: boolean;
  error: string | null;
}

const initialState: ShiftsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchShifts = createAsyncThunk("shifts/fetchShifts", async () => {
  const response = await fetch("/api/shifts");
  return response.json();
});

export const shiftsSlice = createSlice({
  name: "shifts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShifts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchShifts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchShifts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch shifts";
      });
  },
});

export default shiftsSlice.reducer;
