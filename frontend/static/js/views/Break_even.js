import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("BreakEven");
	}
	async getHtml() {
		return `
		 <section id="AIsec1" class="AIsec1">
                <div id="AIdiv1" class="AIdiv1">
                    
                    <h1>Break-Even Analysis</h1>
                    <p><p>Our various break-even models help us determine when 
                    your new product or business will start making maximum profit, 
                    which provides informed decision. Many businesses are often faced 
                    with the dilemma of the knowledge of time and margin of profit. 
                    It may be a new business or an existing business launching a 
                    new product. </p>

		            <div id="Aimg1" class="Aimg1"><img src="/static/public/Images/footback.jpg" alt="Analytics and insights" />
		            </div>
		            <p>Through our break-even analysis, our clients have been able 
		            to plan product pricing more efficiently. This helps them optimize 
		            profit and maintain healthy financials. Furthermore, through the 
		            analysis, we have been able to help clients plan their overall 
		            business cash and profit strategy, and determination of profit points for 
		            product lines.</p>
		            
		            </div>
		            
		            <div id="AIdiv2" class="AIdiv2">
                    
                  

		            <p><div id="Aimg2" class="Aimg2">
		            <img src="static/public/Images/Graph-for-break-even.jpg" 
		            alt="Analytics and insights"></p>
		            </div>
		            
		           <p>We help you ascertain the break-even point of your product 
		           or service using the following process:</p>
					<ol>
					<li><strong>Determine variable unit costs:</strong> The first 
					step we take is to determine the variable costs to produce one unit 
					of your product. Variable costs are the costs associated with making 
					a product or wholesale buying. It is essential to know the cost of 
					all the components that go into a product</li>
					<li><strong>Identify the fixed costs:</strong> Fixed costs are the 
					costs to keep your business operating, even without production. 
					It includes cost of running the factory, rent or mortgage, insurance, 
					salaries and other associated costs.</li>
					<li><strong>Market research and unit selling price determination:</strong> 
					With our advanced market research techniques, we help you identify 
					potential customers and determine your unit-selling price, which should 
					cover the variable and fixed costs to attain a quicker break-even time. 
					This price may change as we see where your break-even point is.</li>
					<li><strong>Analysis and visualization of break-even point:</strong> 
					The break-even point is calculated, analyzed, and visualized for easy 
					understanding and insights which will help make data driven decisions</li>
					 <p>Aside from these benefits, our break-even analysis can also help 
					 identify the credit worthiness of a business in the determination of 
					 the suitability of a loan or otherwise.</p> 
		            
                </div>

            </section>

		`;
	}
}