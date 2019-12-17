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

  fetchNextMessages(timestamp, limit = 10) {
    return fetch(`${this.url}?since=${timestamp}&limit=${limit}&token=${this.token}`)
      .then(this.parseResponse)
      .then(messages => messages.map(this.transform))
  }

  sendMessage(author, message) {
    return fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': this.token
      },
      body: JSON.stringify({ author, message })
    })
    .then(this.parseResponse)
    .then(this.transform)
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
