class AppUrl {

	static BaseUrl = "http://127.0.0.1:8000/api";

	static VisitorData = this.BaseUrl + "/getvisitor";
	static ContactSend = this.BaseUrl + "/sendmessage";
	static SiteInfo = this.BaseUrl + "/getsiteinfo";
	static AllCategory = this.BaseUrl + "/getallcategory";
	static Slider = this.BaseUrl + '/getslider';
	static NoticeAll = this.BaseUrl + '/getnotice';
	static Login = this.BaseUrl+ '/login';
	static ForgetRequest = this.BaseUrl + '/forget';
	static ResetPassword = this.BaseUrl + '/reset';
	static GetAuthUser = this.BaseUrl+ '/getuser';
	static RegisterUser = this.BaseUrl+ '/register';
	static AddToCart = this.BaseUrl+ '/addtocart';
	static FavouriteAdd = this.BaseUrl+'/addfavourite';
	static ConfirmOrder = this.BaseUrl+'/placeorder';
	static ReviewStore = this.BaseUrl+'/reviewstore';

	static imagePath(value){
		return 'http://127.0.0.1:8000/'+value
	}

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

	static getProductSearch(searchKeyword){
		return this.BaseUrl+'/search/?s='+searchKeyword;
	}

	static getSuggestProduct(suggestKeyword){
		return this.BaseUrl+'/suggestproduct/'+suggestKeyword;
	}

	static getReviewByProduct(productID){
		return this.BaseUrl+'/getreviews/'+productID;
	}

	static getCartItemCount(userID){
		return this.BaseUrl+ '/getcartcount/'+userID;
	}

	static getFavouriteList(userID){
		return this.BaseUrl+ '/getfavorite/'+userID;
	}

	static removeFavourite(userID, productID){
		return this.BaseUrl+ '/removefavourte/'+userID+'/'+productID;
	}

	static countFavourite(userID){
		return this.BaseUrl+'/favouritecount/'+userID;
	}

	static getCartItems(userID){
		return this.BaseUrl + '/getcartitem/'+userID;
	}

	static removeCartItem(userID, productID){
		return this.BaseUrl + '/removecart/'+userID+'/'+productID;
	}

	static increment(userID, cartID){
		return this.BaseUrl + '/increment/'+userID+'/'+cartID;
	}

	static decrement(userID, cartID){
		return this.BaseUrl + '/decrement/'+userID+'/'+cartID;
	}

	static checkout(userID){
		return this.BaseUrl + '/checkout/'+userID;
	}
	static getOrderList(customer_email){
		return this.BaseUrl + '/getorders/'+customer_email;
	}

	static getInvoiceByOrderList(invoiceNo){
		return this.BaseUrl+'/getinvorders/'+invoiceNo;
	}

	static UpdatePassword(userID){
		return this.BaseUrl + '/updatepassword/'+userID;
	}

	static UpdateProfile(userID){
		return this.BaseUrl + '/updateprofile/'+userID;
	}



}

export default AppUrl;