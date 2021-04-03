import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("Home");
	}
	async getHtml() {
		return `

		<section>

	<section id="sec1" class="sec1">
	
	
	<div id="content1" class="content1">
		<h1 class="font-effect-anaglyph">Impulse Analytics</h1>
		Get insights, be ahead &#128270;
		<p>At impulse analytics, we turn your dreams 
		into reality by bringing you the best insights 
			that keep you competitive and intentional.</p> 
			<button id="button" class="button" ><span><a href="/about" data-link>Learn more</a></span></button>
			
	</div>
	<div id="imgcont" class="imgcont">
		<img src="/static/public/Images/Head4.jpg" id="capimage" class="capimage">
	</div>
	
</section>
</section>

<section id="sec2" class="sec2">
	<div id="content2" class="content2">
		<p>&#128202;</p>
		<h2>Analytics and Insights</h2>
		With our business intelligence technologies, we provide historical, 
		current, and predictive views of our business in order to enable 
		effective strategy and decision making which in turn ascertains increased 
		profit for your business
	</div>

	<div id="content3" class="content3">
		<p>&#9997;</p>
		<h2 id="c">Market Research</h2>
		With our effective and accurate data collection tools, 
		we provide insight on the concentration, reviews and recommendations 
		of your potential customers and active customers.
	</div>

	<div id="content4" class="content4">
		<p>&#128200;</p>
		<h2>Breakeven Analysis</h2>
		Our various break-even models help us determine when your new 
		product or business will start making maximum profit which provides 
		informed decision.
	</div>
</section>

	
	<div id="content5" class="content5">
		<h2>SALES FORECAST AND TIME SERIES ANALYSIS</h2>
	Using various machine learning algorithms, you are sure of an accurate 
	forecast and interactive visualization of your sales, profit and 
	other processes over a long period of time which enables you to 
	make a data driven decision for marketing, production and other 
	factors relating to your business

	</div>
	
	<div class="image-container" id="image-container">
		<div class="im1">
			<img src="/static/public/Images/sales_forcast_analysis.png">
		</div>

		<div class="im2">
			<img src="/static/public/Images/Market_research.png">
		</div>

		<div class="im3">
			<img src="/static/public/Images/time_series_analysis.png">
		</div>

		<div class="im1">
			<img src="/static/public/Images/sales_forcast_analysis.png">
		</div>

		<div class="im2">
			<img src="/static/public/Images/Market_research.png">
		</div>

		<div class="im2">
			<img src="/static/public/Images/Market_research.png">
		</div>
<span class="prev-span" id="prev-span">
		<a class="prevnew" id="prevnew">&#10094;</a>
	</span>

	<span class="next-span" id="next-span">
		<a class="nextnew" id="nextnew">&#10095;</a>
	</span>
		
</div>






		`;
	}
}