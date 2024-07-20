import { SORT_TICKETS, CHANGE_FILTER, DOWNLOAD_TICKETS } from './types'

export function sortTicket(sortPoint) {
  return {
    type: SORT_TICKETS,
    sortPoint,
  }
}

export function changeFilter(payload) {
  return {
    type: CHANGE_FILTER,
    payload,
  }
}

export function downloadTickets() {
  return {
    type: DOWNLOAD_TICKETS,
  }
}
