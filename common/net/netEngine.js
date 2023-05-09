let authorization = null;
let userId = null;
export default class NetEngine {

	constructor(isShowLog, isOffline) {
		this.isShowLog = isShowLog;
		this.isOffline = isOffline;

		// 部署环境
		// this.netURL = "http://share-test.metazen-tech.com/api/business/aiSend/"; //开发环境
		this.netURL = "http://182.92.118.211:30020/business/aiSend/"; //测试环境
		// this.netURL = "http://182.92.118.211:30020/business/aiSend/speakChange"; //测试环境
		// 接口
		this.SPEAK_CHANGE = "speakChange" 
	}


	netEngineRequest(_name, _data, _type, success, fail) {
		if (this.isOffline) {
			console.log(this.isOffline, 11);
			this.loadLocalJson(_name, _data, success);
		} else {
			this.xmlHttpRequest(this.netURL, _name, _data, _type, success, fail);
		}
	}
	// setAuthorization
	setAuthorization(_authorization) {
		authorization = _authorization;
		// console.log("设置authorization", _authorization);
	}
	setUserId(_userId) {
		userId = _userId;
		// console.log("设置userId", _userId);
	}

	//网络请求
	xmlHttpRequest(_url, _name, _data, _type, _success, _fail) {
		console.log( _data)
		uni.request({
			url: _url + _name,
			// url: _url,
			data: _data,
			method: _type,
			// headers : {'Content-Type': 'application/json'},
			// headers : {'Content-Type': 'multipart/form-data'},
			header: {
				// 'Content-Type':'multipart/form-data'
				'Content-Type': 'application/json'
			},
			success: (res) => {
				// console.log(res);
				if (res.data.code == 200) {
					// if (res.data.status == 200) {
					_success(res.data);
					// } else {
						// _fail(res.data)
					// }
				} else {
					_fail(res.data)
					// console.log('res.statusCode',res.statusCode)
				}
			},
			fail: (res) => {
				// console.log(res);
				uni.showToast({
					title: "请求失败",
					icon: "none",
				})
				_fail(res);
			}
		});
	}


}
