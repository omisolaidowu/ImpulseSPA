import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("Intelligence");
	}
	async getHtml() {
		return `
		 <section id="AIsec1" class="AIsec1">
                <div id="AIdiv1" class="AIdiv1">
                    
                    <h1>Business Intelligence</h1>
                    <p>At Impulse Analytics, we provide bespoke business 
                    intelligence service support for our clients. We 
                    leverage on the latest business intelligence technologies 
                    to provide historical, current, and predictive analysis of 
                    adopted business strategies for effective decision-making. 
                    Our core services are targeted at helping businesses navigate 
                    and make innovative use of data to enhance their productivity 
                    and make secure decisions</p> <p>Now more than ever, 
                    there is a complete mind-shift in the business sphere, as 
                    corporate executives no longer have to shoot in the dark 
                    whilst making important decisions. Statistics have shown 
                    that companies that leverage business intelligence services 
                    make <a href=" https://techjury.net/blog/business-intelligence-
                    statistics/" target="blank">5 times faster decision-making</a>. 
                    They just have to look at data and analyze. This is quite simply 
                    the essence of business intelligence. However, data is just numbers 
                    and perhaps letters, until analyzed. </p>

		            <div id="Aimg1" class="Aimg1">
		            <img 
		            src="/static/public/Images/Capim.jpg" alt="Analytics and insights" />
		            </div>
		            
		            <p>At impulse analytics, we turn your dreams to reality by 
		            bringing you the best insights that keep you competitive and 
		            intentional through our BI process, which is explained below.</p>
					<h3>1. Data preparation and gathering</h3>
					Data is the raw material of business intelligence. The fuel 
					drives predictive analysis and strategic decision-making. 
					It is usually sourced from daily activities of the given 
					organization. Whether your data is embedded in a database 
					server or a spreadsheet, we can sort the data, manipulate it 
					and turn raw data into useful information. A sales transaction 
					for example would be recorded and stored as a piece of data in 
						the Customer Relation Management (CRM) database.

					<h3>2. Data analysis</h3>
					Knowledge and insights are gained from the data collected 
					through descriptive and inferential data analysis. Analyzing 
					the data simply means asking it questions and getting meaningful 
					answers. The powerful and interactive BI tools we use make it 
					easy for us to derive insights from data through advanced 
					visualizations, mapping, time series intelligence and forecasts. 
					<p>We try to answer the following questions through our data 
					analytics features: </p>
					<ul>
					            <li>How is the product performing per product line?</li>
					             <li>How is the product performing per territory and 
					             demographics?</li>
					<li>What are the factors influencing sales of product sales 
					prediction in a given business model? </li>
					</ul>
					The goal of every analysis is to generate insights from data and 
					help decision makers to understand it, identify patterns and trends 
					between them and make forecasts.

					<h3>3. Decision Making</h3>
					All the other listed steps are the means to an end. The end of 
					the BI process is to foster data driven decision-making. Data 
					analyzed are presented in easily comprehensible formats to help 
					make better decisions regarding the organizations. Key performance 
					indices are set, taking a cue from the company’s goal, to track 
					the progress of the decisions made.
		            
		            </div>
		            
		            <div id="AIdiv2" class="AIdiv2">
                    
                  
                    <h3>Our Business intelligence service encompasses the following 
                    elements:</h3>
                    
                    <li><strong>Analysis:</strong> Basically confirmatory and 
                    exploratory analysis which involves identification of patterns 
                    and establishing relationships</li>
                        <li><strong>Data mining:</strong> Conversion of raw data 
                        into useful information</li>
                        <li><strong>Reporting:</strong> Presentation of insights 
                        into meaningful visualizations and essays</li>
                        <li><strong>Predictive analysis:</strong> involving forecasting 
                        and time series intelligence.</li>

		            <p><div id="Aimg2" class="Aimg2">
		            <img src="/static/public/Images/Capimage2.jpg" alt="Analytics 
		            and insights"></p>
		            </div>
		            
		            <h2>Why Business Intelligence (BI)?</h2>
					Overall, the role of BI is to improve an organization’s 
					business operations using relevant data. Research has shown 
					that leading companies in the world make data driven decision 
					through the help of BI. BI can help your company get from where 
					you are to where you want to get to because you no longer 
					make random decisions, you make decisions based on the trends 
					in the data.
					<p>Without BI, organizations cannot readily take advantage 
					of data-driven decision-making. Instead, executives and workers 
					scramble to make important business decisions on some other 
					factors, such as previous experiences, intuition and instinct. 
					Although these methods sometimes result in good decisions, there 
					is a risk of errors and missteps because of the lack of 
					sufficient data underpinning them.</p>
   
                </div>

            </section>
		`;
	}
}