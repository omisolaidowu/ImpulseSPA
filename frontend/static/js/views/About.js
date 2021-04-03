import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("About");
	}
	async getHtml() {
		return `

		 <section id="absec1" class="absec1">
      
      <div id="aboutcont1" class="aboutcont1">
        <h2>About Impulse Analytics</h2>
    <p>Impulse analytics is a team of professionals from various 
    fields that have come together
    for thier passion to bridge the gap between technology and business - 
    especially in Nigeria and Africa as a whole. The team comprises of 
    a group of data scientists, 
    maketing professionals, web developers, content writers, 
    and financial analysts who are solution-driven.</p>
    </div>
   
  </section>
  <section id="absec2" class="absec2">

    <div id="aboutcont2" class="aboutcont2">
      <h2>Our Mission</h2>
      Providing data science solutions that help companies make data-driven 
      decisions - this will 
      enhance the scalability and process efficiency of start-ups and 
      pre-existing companies, thereby 
      driving the nation into a more advanced economy through data science. 
    </div>
    <div id="aboutcont3" class="aboutcont3">
      <h2>Our vision</h2>
      Attaining a stage of a large network of groups of data science 
      professionals that are solution-driven.
      Having a great pool of database and data wherehouse from 
      various sources and themes which will be
      useful for the government, government parastatals, 
      and other non-governmental organizations.
    </div>
  </section>
		`;
	}
}