/* eslint-disable import/no-extraneous-dependencies */
// import { add } from 'date-fns'
import classes from './ticket.module.scss'

export default function Ticket({ ticket, id }) {
  const { price, segments } = ticket
  const toTime = (value) => `${Math.ceil(value / 60)}ч ${value % 60}м`
  const convertTimeFormat = (value) => value.toString().padStart(2, '0')
  const travelTime = (initDate, duration) => {
    const startDate = new Date(initDate)
    return `${convertTimeFormat(new Date(startDate).getHours())}:${convertTimeFormat(new Date(startDate).getMinutes())} - ${convertTimeFormat(new Date(startDate.getTime() + duration * 60000).getHours())}:${convertTimeFormat(new Date(startDate.getTime() + duration * 60000).getMinutes())}`
  }
  // eslint-disable-next-line react/destructuring-assignment
  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__header}>
        <div className={classes.ticket__price}>{price} Р</div>
        <div className={classes.ticket__company_name}>
          <img className={classes.ticket__company_logo} src="test-logo.png" alt="" />
        </div>
      </div>
      {segments.map((segment) => (
        <div className={classes.ticket__info} key={`${id}_${segments.indexOf(segment)}_info`}>
          <div className={classes.ticket__info_item}>
            <span className={[classes.ticket__text_header, classes.ticket__text_light].join(' ')}>
              {segment.origin}-{segment.destination}
            </span>
            <span className={[classes.ticket__text, classes.ticket__text_content].join(' ')}>
              {travelTime(segment.date, segment.duration)}
            </span>
          </div>
          <div className={classes.ticket__info_item}>
            <span className={[classes.ticket__text, classes.ticket__text_light].join(' ')}>В ПУТИ</span>
            <span className={[classes.ticket__text, classes.ticket__text_content].join(' ')}>
              {toTime(segment.duration)}
            </span>
          </div>
          <div className={classes.ticket__info_item}>
            <span className={[classes.ticket__text, classes.ticket__text_light].join(' ')}>
              {/* eslint-disable-next-line no-nested-ternary */}
              {segment.stops.length === 0
                ? 'БЕЗ ПЕРЕСАДОК'
                : segment.stops.length === 1
                  ? `${segment.stops.length} ПЕРЕСАДКА`
                  : `${segment.stops.length} ПЕРЕСАДКИ`}
            </span>
            <span className={[classes.ticket__text, classes.ticket__text_content].join(' ')}>
              {segment.stops.join(', ')}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
