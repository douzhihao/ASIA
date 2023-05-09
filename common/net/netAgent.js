import NetEngine from './netEngine.js'
import vConsole from '../../common/vconsole/vconsole.min.js';

class NetAgent {

	constructor() {
		this.isShowLog = true;
		this.isver; //判断ios系统版本

		if (this.isShowLog) {
			// new vConsole();
		}
		let isOffline = false; //是否单机模式
		this.netEngine = new NetEngine(this.isShowLog, isOffline);

	}

	// 获取系统版本号
	getSystemVer() {
		var str = navigator.userAgent.toLowerCase();
		var ver = str.match(/cpu iphone os (.*?) like mac os/);

		if (ver == null) {
			console.log("安卓");
		} else {
			var vnum = ver[1].replace(/_/g, ",");
			var arr = vnum.split(",")
			// console.log(arr);
			if (arr[0] > 13 && arr[1] >= 3) {
				this.isver = false;
			} else {
				this.isver = true;
			}
		}
	}
	faceSwap(sourceImage,targetVideo,callback) {
		let _data ={
				sourceImage: sourceImage,
				targetVideo: targetVideo
			}
		// let _data = {
		// 		sourceImage: "4142.jpeg",
		// 		targetVideo:"YUAN_xiaomei_qipao_stand_001.mp4"
		// 	}
		this.netEngine.netEngineRequest(
			this.netEngine.fACE_SWAP,
			_data,
			"POST",
			(res) => {
				// console.log(res);
				if (callback != null) {
					callback(res);
				}
			},
			(res) => {
				console.log("-faceSwap-失败！", res);
				uni.showToast({
					title: res.msg,
					icon: "none"
				})
			}
		)
	}
	speakChange(blob,callback) {
		// let _data = {
		// 	"file":blob
		// }
		let _data = blob
		// console.log(blob,this.netEngine.SPEAK_CHANGE);

		this.netEngine.netEngineRequest(
			this.netEngine.SPEAK_CHANGE,
			_data,
			"POST",
			(res) => {
				console.log(res);
				if (callback != null) {
					callback(res);
				}
			},
			(res) => {
				console.log("-speakChange-失败！", res);
				uni.showToast({
					title: res.msg,
					icon: "none"
				})
			}
		)
	}
	

	//---------------示例-------------
	// 分享
	share(callback) {
		this.netEngine.netEngineRequest(
			this.netEngine.SHARE,
			null,
			"POST",
			(res) => {
				// console.log(res);
				if (callback != null) {
					callback(res);
				}

			},
			(res) => {
				console.log("-分享-失败！", res);
				uni.showToast({
					title: res.msg,
					icon: "none"
				})
			}
		)
	}

	// 中奖记录
	record(callback) {
		this.netEngine.netEngineRequest(
			this.netEngine.RECORD,
			null,
			"GET",
			(res) => {
				console.log(res);
				if (callback != null) {
					callback(res);
				}
			},
			(res) => {
				console.log("-中奖记录-失败！", res);
				uni.showToast({
					title: res.msg,
					icon: "none"
				})
			}
		)
	}

	//---------------示例-------------


}



const netAgent = new NetAgent();
window.netAgent = netAgent;