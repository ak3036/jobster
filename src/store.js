import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/users/userSlice';
import jobSlice from './features/job/jobSlice';
import allJobsSlice from './features/allJobs/allJobsSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJob: allJobsSlice,
  },
});
