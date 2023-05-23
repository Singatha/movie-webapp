import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  displaySearchResults: false,
  searchString: '',
}

export const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setDisplaySearchResults: (state, action) => {
      state.displaySearchResults = action.payload
    },
    setSearchString: (state, action) => {
      state.searchString = action.payload
    },
  },
})

export const { setDisplaySearchResults, setSearchString } = mediaSlice.actions

export default mediaSlice.reducer
