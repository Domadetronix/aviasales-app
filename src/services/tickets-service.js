/* eslint-disable no-underscore-dangle */
class TicketService {
  _basicUrl = 'https://aviasales-test-api.kata.academy/'

  async GetSearchId() {
    const res = await fetch(`${this._basicUrl}search`)
    if (!res.ok) {
      throw new Error('Couldnt fetch to api')
    }
    return res.json()
  }

  async GetTickets() {
    const id = await this.GetSearchId()
    const res = await fetch(`${this._basicUrl}tickets?searchId=${id.searchId}`).then((ans) => ans.json())
    return res
  }
}
const ticketService = new TicketService()
export default ticketService
