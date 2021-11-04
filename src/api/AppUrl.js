class AppUrl {

	static BaseUrl = "http://127.0.0.1:8000/api";

	static VisitorData = this.BaseUrl + "/getvisitor";
	static ContactSend = this.BaseUrl + "/sendmessage";
	static SiteInfo = this.BaseUrl + "/getsiteinfo";
	static AllCategory = this.BaseUrl + "/getallcategory";


}

export default AppUrl;