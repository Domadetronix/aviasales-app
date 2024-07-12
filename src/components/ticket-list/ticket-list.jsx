import Ticket from '../ticket/ticket'

import classes from './ticket-list.module.scss'

export default function TicketList() {
  return (
    <div className={classes['ticket-list']}>
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  )
}
