/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ticketService from '../services/tickets-service'

export const fetchTickets = createAsyncThunk('ticket/fetchTicket', async () => {
  const res = await ticketService.GetTickets()
  return res
})

const initialState = {
  filteredTicketList: [],
  fetchedIbj: {},
  ticketList: [],
  visibleTicketList: [],
  isLoading: true,
  currentCount: 5,
  pagesCounter: 1,
  sortingPoint: 'a',
  error: null,
}

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setFilteredTicketList(state, action) {
      state.filteredTicketList = state.ticketList.filter((ticket) => {
        const stops = ticket.segments.reduce(
          (acc, segment) => (acc > segment.stops.length ? acc : segment.stops.length),
          0
        )
        const { all, one, two, three, none } = action.payload
        return all
          ? 1
          : one && stops === 1
            ? 1
            : two && stops === 2
              ? 1
              : three && stops === 3
                ? 1
                : none && stops === 0
                  ? 1
                  : !(none || all || one || two || three)
                    ? 1
                    : 0
      })
    },
    setVisibleTicketList(state) {
      const { filteredTicketList } = state
      state.visibleTicketList = filteredTicketList.slice(0, state.currentCount)
    },
    resizeTicketList(state) {
      state.currentCount += 5
    },
    sortTickets(state, action) {
      const { ticketList } = state
      state.sortingPoint = action.payload
      if (state.sortingPoint === 'a') ticketList.sort((ticket1, ticket2) => ticket1.price - ticket2.price)
      else
        ticketList.sort(
          (ticket1, ticket2) =>
            ticket1.segments.reduce((acc, seg) => acc + seg.duration, 0) -
            ticket2.segments.reduce((acc, seg) => acc + seg.duration, 0)
        )
    },
    changeSortingPoint(state, action) {
      state.sortingPoint = action.payload
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchTickets.pending, (state) => {
      state.isLoading = true
    })
    addCase(fetchTickets.fulfilled, (state, action) => {
      state.isLoading = false
      state.fetchedIbj = action.payload
      const { tickets } = action.payload
      state.ticketList = tickets
      state.filteredTicketList = tickets
      state.error = null
    })
    // eslint-disable-next-line no-unused-vars
    addCase(fetchTickets.rejected, (state) => {
      state.error = 'Ошибка!!!'
    })
  },
})

// eslint-disable-next-line no-empty-pattern
export const { setVisibleTicketList, resizeTicketList, sortTickets, setFilteredTicketList, changeSortingPoint } =
  ticketSlice.actions
export default ticketSlice.reducer
