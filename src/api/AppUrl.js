class AppUrl {

	static BaseUrl = "http://127.0.0.1:8000/api";

	static VisitorData = this.BaseUrl + "/getvisitor";
	static ContactSend = this.BaseUrl + "/sendmessage";
	static SiteInfo = this.BaseUrl + "/getsiteinfo";
	static AllCategory = this.BaseUrl + "/getallcategory";

	static getRemarkProudcts(remark){
		return this.BaseUrl+ '/getremarkproduct/'+remark;
	}

	static getCategoryByAllProduct(category_slug){
		return this.BaseUrl+'/getcategorybyproduct/'+category_slug;
	}

	static getSubCategoryByAllProduct(category_slug, subcategory_slug){
		return this.BaseUrl+'/getproduct/'+category_slug+'/'+subcategory_slug;
	}

	static singleProductPage(product_slug){
		return this.BaseUrl+'/getsingleproduct/'+product_slug;
	}

}

export default AppUrl;