export class ChatApi {
  constructor(url, token) {
    this.url = url
    this.token = token
  }

  fetchAllMessages() {
    return fetch(`${this.url}?token=${this.token}`)
      .then(this.parseResponse)
      .then(messages => messages.map(this.transform))
  }

  transform({ _id, message, author, timestamp }) {
    return { id: _id, text: message, author, timestamp: Number(timestamp) }
  }

  parseResponse(response) {
    if (response.ok) {
      return response.json()
    }
  }
}
