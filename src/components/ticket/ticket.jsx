import classes from './ticket.module.scss'

export default function Ticket() {
  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__header}>
        <div className={classes.ticket__price}>13400 Р</div>
        <div className={classes.ticket__company_name}>
          <img className={classes.ticket__company_logo} src="test-logo.png" alt="" />
        </div>
      </div>
      <div className={classes.ticket__info}>
        <div className={classes.ticket__info_item}>
          <span className={[classes.ticket__text_header, classes.ticket__text_light].join(' ')}>MOW-HKT</span>
          <span className={classes.ticket__text_content}>10:45 - 08:00</span>
        </div>
        <div className={classes.ticket__info_item}>
          <span className={[classes.ticket__text, classes.ticket__text_light].join(' ')}>В ПУТИ</span>
          <span className={classes.ticket__text_content}>21ч 15м</span>
        </div>
        <div className={classes.ticket__info_item}>
          <span className={[classes.ticket__text, classes.ticket__text_light].join(' ')}>2 ПЕРЕСАДКИ</span>
          <span className={classes.ticket__text_content}>HKG</span>
        </div>
      </div>
      <div className={classes.ticket__info}>
        <div className={classes.ticket__info_item}>
          <span className={[classes.ticket__text, classes.ticket__text_light].join(' ')}>MOW-HKT</span>
          <span className={classes.ticket__text_content}>10:45 - 08:00</span>
        </div>
        <div className={classes.ticket__info_item}>
          <span className={[classes.ticket__text, classes.ticket__text_light].join(' ')}>В ПУТИ</span>
          <span className={classes.ticket__text_content}>21ч 15м</span>
        </div>
        <div className={classes.ticket__info_item}>
          <span className={[classes.ticket__text, classes.ticket__text_light].join(' ')}>2 ПЕРЕСАДКИ</span>
          <span className={classes.ticket__text_content}>HKG</span>
        </div>
      </div>
    </div>
  )
}
