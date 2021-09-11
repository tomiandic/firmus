import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../data/data.json";

//TODO: fetch all jobs and set them in global state
export const fetchJobs = createAsyncThunk("profile/fetchJobs", async () => {
  const response = data.allJobs;
  return response;
});

export const userProfileSlice = createSlice({
  name: "profile",
  initialState: {
    selectedJobs: {},
    selectedLanguages: data.additionalLanguages.reduce((res, item, idx) => {
      console.log("jes"), Object.assign(res, { [item.name]: false });
    }, {}),
    availability: data.days,
    info: {
      fullName: "",
      city: "",
      date: "1999-01-01",
      genre: "F",
      gdpr: false,
      phoneNumber: "+385 ",
    },
    credentials: {
      mail: "",
    },
  },
  reducers: {
    updateProfile: (state, action) => {
      const { property, value } = action.payload;
      state[property] = { ...state[property], ...value };
    },
  },
  extraReducers: {
    [fetchJobs.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchJobs.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.status = "success";
      let jobs = {};
      Object.keys(action.payload).forEach((category) =>
        action.payload[category].forEach((job) => (jobs[job.name] = false))
      );
      state.selectedJobs = jobs;
    },
  },
});

export const { updateProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
