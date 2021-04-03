import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("Forecast");
	}
	async getHtml() {
		return `
		 <section id="AIsec1" class="AIsec1">
                <div id="AIdiv1" class="AIdiv1">
                    
                    <h1>Forecasting and Time Series Analysis</h1>
                    <p>Our Business Intelligence team at Impulse analytics uses 
                    Machine Learning algorithms to generate accurate forecasts and 
                    interactive visualization of your sales, profit and other 
                    processes for specific periods. This enables you to make data 
                    driven decisions for marketing, production and other factors 
                    relating to your business.</p>

                    


		            <div id="Aimg1" class="Aimg1">
		            <img src="static/public/Images/time-series.jpg" alt="Analytics 
		            and insights" />
		            </div>
		            <p>Forecasting is a form of advanced analytics that uses 
		            current data and historical data to predict different activities, 
		            sales, consumer behaviors, and future trends. It uses many 
		            techniques including but not limited to data mining, statistics, 
		            data modeling, machine learning, and artificial intelligence. </p>
		            
		            </div>
		            
		            <div id="AIdiv2" class="AIdiv2">
                    
                  

		            <p><div id="Aimg2" class="Aimg2">
		            <img src="static/public/Images/time-series-2.jpg" alt="Analytics 
		            and insights"></p>
		            </div>
		            
		            <p>With our forecasting process lifecycle, we can provide 
		            insightful predictions, and smarter analytics that covers some 
		            of the following areas:</p>


					<ol>
					<li><h3>Problem Identification and Analysis</h3>
					Through predictive analysis, we help businesses or companies to 
					identify their business objectives and associated problems. 
					This in turn helps us to develop bespoke solutions that still 
					fit into your business objectives and optimizes business profits.</li>

					<li><h3>Data Collection and Preparation </h3>
					We also help collect data from different sources in an industry 
					and regulatory compliant manner. Thereafter, we filter out these 
					collected data through set thresholds by removing the irrelevant 
					cells and replacing missing values, which is a preparation for 
					further analysis.</li>

					<li><h3>Exploratory Analysis</h3>
					At this stage, we analyze the datasets to generate important 
					insights. We construct Graphs and charts to analyze trends and 
					explore the dataset while simultaneously providing pictorial 
					representations to our clients on-demand.</li>

					<li><h3>Confirmatory Analysis And Modelling</h3>
					At this stage, we leverage on inputs from business stakeholders 
					and data scientists to ensure a confirmation of insights that we 
					have already generated for the building of a desired model. 
					The inputs may be in any one or more of the following respects:
					<ol>
					<li>Hypothesis creation</li>
					<li>Finding correlations and transforming relevant data</li>
					<li>Model building</li>
					<li>Visualization of forecast etc. </li>
					</li>
					</ol>

					<li><h3>Evaluation and Monitoring of Model</h3>
					Most businesses are tempted to leave the table at the exploratory 
					stage but the work doesn’t nearly stop there. There is need for 
					further monitoring and evaluation of the already built model against 
					market changes, consumer behavior among other variables. At impulse 
					analytics, we help our clients keep an eye on these changes and 
					give periodic briefings as may be required. </li>
		            
                </div>

            </section>
		`;
	}
}