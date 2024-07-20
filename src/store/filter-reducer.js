import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  all: false,
  none: false,
  one: false,
  two: false,
  three: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterTickets(state = initialState, action) {
      if (action.payload === 'all') {
        if (state.all) return { ...state, all: false, none: false, one: false, two: false, three: false }
        return { ...state, all: true, none: true, one: true, two: true, three: true }
      }
      if (action.payload === 'none') {
        if (state.all) return { ...state, all: false, none: !state.none }
        if (!state.all && !state.none && state.one && state.two && state.three) {
          return { ...state, all: true, none: !state.none }
        }
        return { ...state, none: !state.none }
      }
      if (action.payload === 'one') {
        if (state.all) return { ...state, all: false, one: !state.one }
        if (!state.all && state.none && !state.one && state.two && state.three) {
          return { ...state, all: true, one: !state.one }
        }
        return { ...state, one: !state.one }
      }
      if (action.payload === 'two') {
        if (state.all) return { ...state, all: false, two: !state.two }
        if (!state.all && state.none && state.one && !state.two && state.three) {
          return { ...state, all: true, two: !state.two }
        }
        return { ...state, two: !state.two }
      }
      if (action.payload === 'three') {
        if (state.all) return { ...state, all: false, three: !state.three }
        if (!state.all && state.none && state.one && state.two && !state.three) {
          return { ...state, all: true, three: !state.three }
        }
        return { ...state, three: !state.three }
      }
      return state
    },
  },
})

export const { filterTickets } = filterSlice.actions
export default filterSlice.reducer
