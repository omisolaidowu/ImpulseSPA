import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("Contact");
	}
	async getHtml() {
		return `

		<div id="mailus" class="mailus">
        <h3 id="mailtext" class="mailtext">Want to get in touch with us? Send us a message now!</h3>
    <form action="/static/mailer.php" id="form" class="form">
      <input type="text" name="email" id="email" class="email" placeholder="email@example.com*"><br>
      <input type="text" name="subject" id="subject" class="subject" placeholder="Subject*"><br>
      <textarea name="message" id="message" class="message" placeholder="Message*"></textarea><br>
      <button name="submit" id="submit" class="submit">Send</button>
      <label id="info" class="info"></label>
    </form>
    </div>
		`;
	}
}