import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("MarketResearch");
	}
	async getHtml() {
		return `
		<section id="AIsec1" class="AIsec1">
                <div id="AIdiv1" class="AIdiv1">
                    
                    <h1>Market Research and Customer Analytics</h1>
                    <p>Companies and businesses collect many customer and 
                    consumer data for various reasons including several Know-Your 
                    Customer (KYC) Obligations. We help these companies to leverage 
                    on these data for market research purposes ranging from brand 
                    perception to product acceptance forecasts etc. </p>

                    <p>With our effective and accurate data collection and survey 
                    tools, we provide insight on the feasibility of your new product 
                    or service. This sometimes involves our study of concentration, 
                    reviews and recommendations of potential and active customers.</p>

                    


		            <div id="Aimg1" class="Aimg1"><img src="static/public/Images/market-research.jpg" 
		            alt="Analytics and insights" />
		            </div>
		           <p>Marketing analytics is set to grow tremendously over the next five years. 
		           This is because of the critical impact it has on a company’s understanding 
		           of their entire brands’ success. Our aim is to make your products penetrate 
		           the market better than your competitors’. This service involves conducting 
		           surveys to target customer, mapping out customer locations, and evaluation 
		           of competitors’ products and strategies.</p>
		            
		            </div>
		            
		            <div id="AIdiv2" class="AIdiv2">
                    
                  

		            <p><div id="Aimg2" class="Aimg2">
		            <img src="static/public/Images/market-research-2.jpg" alt="Analytics and insights">
		            </p>
		            </div>
		            
		           <h2>How Market Research can Benefit Your Business</h2>
		           <p>Most resilient and financially healthy businesses and 
		           companies in this present day are those ones who rely heavily 
		           on market research before product launch or significant corporate 
		           decisions. A lot of information can be generated from a simple 
		           market survey.</p>

					<p>Far more information can be generated using Business 
					Intelligence tools for market research and analysis. This 
					is where our market research team helps bridge the gap. 
					We design fitting market surveys for determining any one or 
					more of the following:</p>
					<ol>
					<li>Testing new products within a target market;</li>
					<li>Identification of customer needs;</li>
					<li>Determination of market size and concentration;</li>	
					<li>Information about consumer/customer preferences;</li>
					<li>Evaluation of brand perception;</li>
					<li>Determination of appropriate sales mechanism;</li>
					<li>Information about comparative market advantages of and over 
					competitors; </li>
					<li>Feasibility studies etc.</li>
					</ol>
					<p>Our market research team also performs the following services on 
					behalf of our clients:</p>
					<ul>

					<li><strong>Problem Identification:</strong> Identifying the subject 
					of the research is the first step to a successful market research. 
					With our expertise in research and survey, we develop the research 
					problem, objectives, and hypothesis, which in turn helps us, 
					determine how to draw out the perfect questionnaire for the potential 
					or existing clients. </li>
					<li><strong>Sampling: </strong>We use our numerous sampling 
					techniques to discover the right number of people to represent 
					the larger group. To avoid inaccuracy in our results, we ensure a 
					balanced sample that is large enough. We also ensure that you do 
					not collect information from the wrong population. We do this by 
					certifying the data is collected from the population with the right 
					characteristics.</li>
					<li><strong>Data Collection:</strong> We perform our accurate data 
					collection through face to face interviewing, online survey platforms, 
					ocus groups, questionnaire distribution, mail surveys among 
					other methods. </li>
					<li><strong>Data Analysis:</strong> A lot of insight can be drawn 
					from the data collected, this includes but not limited to the following:
					<ol>
					<li><strong>Exploratory and confirmatory analysis</strong>
					Charts and graphs are deduced from the data to give quantitative and 
					qualitative trends of the customers. This may include socio-demographic 
					ata, pricing, market size and segmentation, customer needs, consumer 
					recommendations etc.</li>
					<li><strong>Customer analytics:</strong>
					Customer satisfaction can be drawn from the data collected and 
					explored above. We also use concentration and heat maps to identify 
					 location and concentration of potential and existing customers. 
					 This analysis will help you make informed decision about your business 
					 location and other logistical considerations.</li>
					<li><strong>Break-even analysis:</strong> Data relating to the price 
					your product and service are consumed by customers will help us 
					determine how soon you will break-even. </li>
					<li><strong>Forecast and time series intelligence:</strong>
					Numerous of insights can be drawn from the data depending on the 
					research objectives.</li>
					<li><strong>Report:</strong> The major aim of market 
					 research is to help you make informed decision about your product. 
					 Thus, at the conclusion of our thorough analysis on subject matters 
					 referred to us, we prepare detailed reports of our findings and 
					 include advice where necessary or required.</li>
					</ol>
					</ul> 
                </div>

            </section>
		`;
	}
}