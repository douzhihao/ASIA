<template>
	<view class="content">
		<view class="contentBg"></view>
		<view class="custom">
			<view class="customLeft" @click="clickShowPopupWSS()">
				<image class="" src="../../static/icon-logo.png" mode="widthFix"></image>
				<view class="tipsPoint">
					<view :class="tipsPoint?'greenPoint':'redPoint'"></view>
				</view>
			</view>
			<view class="customMid">
				<image class="" src="../../static/icon-title.png" mode="widthFix"></image>
			</view>
			<view class="customRight" @click="clickShowPopup()">
				<image class="" src="../../static/icon-option.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="main">
			<view class="chat">
				<view class="userPart" v-show="showUserPart">
					<view class="text">
						{{userMsg}}
					</view>
					<view class="triangle"></view>
					<view class="headimg">
						<image src="../../static/icon-headimg.png" mode=""></image>
					</view>
				</view>
				<view class="robotPart" v-show="showRobotPart">

					<view v-show="isThinking" class="robotPartList">
						<view class="headimg">
							<image src="../../static/icon-robot2.jpg" mode=""></image>
						</view>
						<view class="triangle"></view>
						<view class="thinking">
							<image src="../../static/thinking.gif" mode="widthFix"></image>
						</view>
					</view>
					
					<view v-show="!isThinking" class="robotPartList" v-for="(item,index) in robotMsgList" :key="index">
						<view class="headimg">
							<image src="../../static/icon-robot2.jpg" mode=""></image>
						</view>
						<view class="triangle"></view>
						<view v-for="(item,index) in item.split('>MZsplit<').reverse()" :key="index"  :class="index==1?'sort':'text'">
							{{item}}
						</view>
					</view>
					
				</view>
			</view>
			<view class="inputWav">
				<view class="inputTipsSlide" v-show="recording">
					<view class="slideMain">
						Slide up Clear
						<image src="../../static/icon-arrow.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="inputBox">

					<view :class="recording ? 'inputBtnRecording':'inputBtnDefault'" @longtap="langTap"
						@touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
						<view :class="cancelRecord?'inputIconBox':'inputIconBoxCannel'">
							<image v-if="recording&&(recordStatus==2)" class="inputIcon" src="../../static/icon-mic.png" mode="widthFix"></image>
							<image v-if="recording&&(recordStatus==1)" class="inputIcon" src="../../static/icon-mic1.png" mode="widthFix"></image>
							<image v-if="!recording&&(recordStatus==0)" class="inputIcon" src="../../static/icon-mic1.png" mode="widthFix"></image>
						</view>

					</view>
					<view class="inputTipsHold" v-show="!recording">
						Hold to Talk
					</view>
					<view class="inputTipsRelease" v-show="recording">
						Release and Send
					</view>
				</view>
			</view>
		</view>

		<uni-popup ref="popup" type="bottom" mask-background-color=rgba(0,0,0,0.7)>
			<view class="optionBtn">
				<button type="default" data-index="7" @click="clickPlayVideo">Focus To Face</button>
				<view class="_line" style="width: 100%;height: 1px;background-color: #3a3a3a;"></view>
				<button type="default" data-index="8" @click="clickPlayVideo">Focus To Body</button>
				<view class="_line" style="width: 100%;height: 1px;background-color: #3a3a3a;"></view>
				<button type="default" data-index="9" @click="clickPlayVideo">Focus To Bust</button>
				<view class="_line" style="width: 100%;height: 1px;background-color: #3a3a3a;"></view>
				<button type="default" data-index="1" @click="clickPlayVideo">Play Video1</button>
				<view class="_line" style="width: 100%;height: 1px;background-color: #3a3a3a;"></view>
				<button type="default" data-index="2" @click="clickPlayVideo">Play Video2</button>
				<view class="_line" style="width: 100%;height: 1px;background-color: #3a3a3a;"></view>
				<!-- 				<button type="default" data-index="3" @click="clickPlayVideo">Play Video3</button>
				<view class="_line" style="width: 100%;height: 1px;background-color: #3a3a3a;"></view> -->
				<!-- 				<button type="default" data-index="4" @click="clickPlayVideo">Play Background</button>
				<view class="_line" style="width: 100%;height: 1px;background-color: #3a3a3a;"></view> -->
				<button type="default" data-index="3" @click="clickPlayVideo">Play Background</button>
				<view class="_line" style="width: 100%;height: 1px;background-color: #3a3a3a;"></view>
				<button type="default" @click="clickLinkServices">Reset Background</button>
			</view>
			<view class="cannelBtn">
				<button type="default" @click="clickHidePopup">Cancel</button>
			</view>
		</uni-popup>
		<uni-popup ref="popupWSS" type="center" mask-background-color=rgba(0,0,0,0.7)>
			<view class="popupWSSMain">
				<input type="text" name="" id="" @input="inputWSS" :value="WSSUrl" placeholder="wss://**.**.***.**">
				<button type="warn" plain="true" @click="disconnectWSS">disconnect</button>
				<button type="default" plain="true" @click="clickHidePopupWSS">cancel</button>
				<button type="primary" plain="true" @click="connectWSS">connect</button>
				<view style="margin-top: 20rpx;">
					<text style="margin-right: 20rpx;">CN/EN</text>  <switch :checked="language" @change="languageSwitch" />
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import '@/common/net/netAgent.js'
	import {
		HZRecorder
	} from '../../Utils/HZRecorder.js';
	import {
		initWebSocketPotassium,
		sendDataPotassium,
		websocketOnmessagePotassium,
		closeWebsocketPotassium
	} from '../../Utils/ws.js';

	import axios from 'axios'


	export default {
		data() {
			return {
				clientX: 0,
				clientY: 0,
				recording: false, //在录音中
				cancelRecord: false, //取消录制
				recordStatus: 0, //录音状态 0=默认 1=录音中 2=上滑取消录音
				userMsg: '', //
				robotMsg: '', //
				// robotMsgList:'',
				robotMsgList:[],
				robotMsgSort:[],
				tipsPoint:false,

				recorder: null,
				innerAudioContext: '',

				showUserPart: false,
				showRobotPart: false,

				isLangTap: false,
				isThinking:false,
				// WSSUrl:'wss://i7u3629729.goho.co',
				// WSSUrl:'wss://i25817465a.imdo.co',
				// WSSUrl:'wss://yjwpv79rnsupshsh3.neiwangyun.net',
				WSSUrl:'ws://10.10.10.216:3000',
				// WSSUrl:'wss://54774dq657.zicp.fun',
				
				language:true,
				langugeType:'recognition'
			}
		},
		onLoad() {
			let WSSURL = localStorage.getItem("WSSURL");
			if(WSSURL){
				console.log(WSSURL);
				this.WSSUrl = WSSURL;
			}else{
				console.log("未连接其他WS");
			}
			let isdebug = window.netAgent.getQueryVariable("isdebug", "?")
			console.log(isdebug);
			window.netAgent.isShowVConsole(isdebug);
		},
		mounted() {
			let that = this;
			that.$nextTick(() => {
				try {
					window.AudioContext = window.AudioContext || window.webkitAudioContext;
					navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
					window.URL = window.URL || window.webkitURL;
					audio_context = new AudioContext;
					console.log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' :
						'not present!'));
				} catch (e) {
					console.log('No web audio support in this browser!');

				}
				if (navigator.getUserMedia) {
					navigator.getUserMedia({
						audio: true
					}, function(stream) {
						that.recorder = new HZRecorder(stream)
						console.log('初始化完成');
					}, function(e) {
						console.log('No live audio input: ' + e);

					});
				} else {
					uni.showModal({
						title: '提示',
						content: '当前设备不支持录音',
						success: function(res) {
							if (res.confirm) {
								// console.log('用户点击确定');
							} else if (res.cancel) {
								// console.log('用户点击取消');
							}
						}
					});
				}


			})
			that.innerAudioContext = uni.createInnerAudioContext();
			that.innerAudioContext.autoplay = true;
			// this.innerAudioContext.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
			that.innerAudioContext.onPlay(() => {
				console.log('开始播放');
			});
			that.innerAudioContext.onError((res) => {
				console.log(res.errMsg);
				console.log(res.errCode);
			});
			initWebSocketPotassium(that.WSSUrl,(msg) => {
				// console.log("heartCheck")；
				var _msg = JSON.parse(msg.data);
				that.tipsPoint = true;
				if (_msg.answer) {
					console.log(_msg.answer);
					that.showRobotPart = true;
					that.isThinking = false;
					let answerList = new Array;
					answerList.unshift(_msg.answer);
					that.robotMsgList = that.robotMsgList.concat(answerList);
				}
			})
			
		},
		beforeDestroy() {
			closeWebsocketPotassium();
			// uni.showModal({
			// 	title: '提示',
			// 	content: '断开提示',
			// 	success: function(res) {
			// 		if (res.confirm) {
			// 			// console.log('用户点击确定');
			// 		} else if (res.cancel) {
			// 			// console.log('用户点击取消');
			// 		}
			// 	}
			// });
		},
		methods: {
			clickShowPopupWSS(){
				this.$refs.popupWSS.open();
			},
			clickHidePopupWSS(){
				this.$refs.popupWSS.close();
			},
			inputWSS(e){
				// console.log(e.detail.value);
				this.WSSUrl = e.detail.value;
			},
			disconnectWSS(){
				let that = this;
				setTimeout(()=>{
					that.tipsPoint = false;
				},1000)
				closeWebsocketPotassium();
			},
			connectWSS(){
				if(this.WSSUrl.length>0&&this.WSSUrl!=""){
					closeWebsocketPotassium();
					initWebSocketPotassium(this.WSSUrl,(msg) => {
						// console.log("heartCheck")；
						var _msg = JSON.parse(msg.data);
						this.tipsPoint = true;
						if (_msg.answer) {
							console.log(_msg.answer);
							this.showRobotPart = true;
							this.isThinking = false;
							let answerList = new Array;
							answerList.unshift(_msg.answer);
							this.robotMsgList = this.robotMsgList.concat(answerList);
						}
					})
					localStorage.setItem("WSSURL",this.WSSUrl);
					this.clickHidePopupWSS();
				}else{
					uni.showToast({
						icon:'error',
						title:'Url  Is  Empty！'
					})
				}
			},
			languageSwitch(e){
				console.log(e.detail.value)
				if(e.detail.value){
					this.language = e.detail.value;
					this.langugeType='recognition';
				}else if(!e.detail.value){
					this.language = e.detail.value
					this.langugeType='recognitionCN';
				}
			},
			clickShowPopup() {
				// console.log("clickShowPopup")
				this.$refs.popup.open();
			},
			clickHidePopup() {
				// console.log("clickHidePopup")
				this.$refs.popup.close();
			},
			clickLinkServices() {
				// console.log("clickLinkServices");
				this.clickHidePopup();
				// sendDataPotassium(JSON.stringify({close: 'close'}));
				sendDataPotassium(JSON.stringify({ sence: '4'}));
			},
			clickPlayVideo(e) {
				// console.log(e.currentTarget.dataset.index);
				this.clickHidePopup();
				sendDataPotassium(JSON.stringify({close: 'close'}));
				sendDataPotassium(JSON.stringify({sence: e.currentTarget.dataset.index}));
			},
			clickPlayAudio(e) {
				// console.log(e.currentTarget.dataset.index);
				this.clickHidePopup();
				sendDataPotassium(JSON.stringify({close: 'close'}));
				sendDataPotassium(JSON.stringify({audio: e.currentTarget.dataset.index}));
			},
			langTap() {
				clearTimeout(langtaptimeout);
				if(!this.tipsPoint){
					uni.showToast({
						icon:'error',
						title:"WS offline"
					})
					return false;
				}
				let langtaptimeout = setTimeout(() => {
					console.log('langTap');
					this.recorder.start();
					this.showUserPart = false;
					this.showRobotPart = false;
					this.isLangTap = true;
					this.isThinking = false;
					this.userMsg = '';
					this.robotMsg = '';
					// this.robotMsgList = '';
					this.robotMsgList = [];
					this.recording = true;
					this.recordStatus = 2;
					sendDataPotassium(JSON.stringify({ close: 'close'}));
					sendDataPotassium(JSON.stringify({ sence: '3'}));
				}, 200)
			},
			touchStart(e) {
				let that = this;

				that.clientX = e.changedTouches[0].clientX; //手指按下时的X坐标
				that.clientY = e.changedTouches[0].clientY; //手指按下时的Y坐标
				// if(that.isLangTap){
				navigator.getUserMedia({
					audio: true
				}, function(stream) {
					that.recorder = new HZRecorder(stream)
					console.log('初始化完成');
				}, function(e) {
					console.log('No live audio input: ' + e);
				});
				// }

			},
			touchMove(e) {
				let touchData = e.touches[0];
				let moveX = touchData.clientX - this.clientX;
				let moveY = touchData.clientY - this.clientY;
				if (moveY < -50) {
					// 向上滑动
					this.cancelRecord = true;
					this.recordStatus = 1;
					// console.log("向上滑动");
				} else {
					// 向下滑动
					this.cancelRecord = false;
					this.recordStatus = 2;
					// console.log("向下滑动");
				}
			},
			touchEnd() {
				this.recordStatus = 0;
				if (!this.cancelRecord) {
				// 	// 完成录音

					this.recorder.stop();
					this.recorder.getBlob();

					var mp3Blob = this.recorder.getBlob();
					// console.log(mp3Blob);
					let files = new File([mp3Blob], 'input.wav', {
						type: 'audio/wav',
						lastModified: Date.now()
					});
					var fd = new FormData();
					// fd.append('file', files);
					fd.append('multipartFile', files);
					
					var url = window.URL.createObjectURL(mp3Blob);
					console.log(url);

					axios({
						// baseURL: 'http://182.92.118.211:30020/business/aiSend/',
						// baseURL: 'https://share-test.metazen-tech.com/business/aiSend/',
						baseURL: "https://share-test.metazen-tech.com/meta-tts/speech/",
						// baseURL: 'https://aigc.metazen-tech.com/meta-tts/speech/',
						method: 'POST',
						// url: 'speakChange',
						url: this.langugeType,
						// url: 'recognitionCN',
						headers: {
							"Content-Type": "multipart/form-data",
						},
						data: fd,
					}).then(res => {
						console.info(res);
						// if(res.data.msg||res.data.msg.length>0||res.data.msg!==""){
						if(res.data.data||res.data.data.length>0||res.data.data!==""){
							// this.userMsg = res.data.msg;
							this.userMsg = res.data.data;
							this.showUserPart = true;
							this.showRobotPart = true;
							this.isThinking = true;
							// sendDataPotassium(JSON.stringify({ ask: res.data.msg}));
							sendDataPotassium(JSON.stringify({ ask: res.data.data}));
						}else{
							uni.showToast({
								title: '未采集到声音',
								icon: 'error',
								duration: 2000
							});
						}
					}).catch(err => {
						console.info(err)
					})
				} else {
					// 此时松手后响应的是取消录音
					console.info('取消录音')
				}

				// sendDataPotassium(JSON.stringify({ ask: "你好"}));

				// this.recorder.play(this.innerAudioContext);
				this.recording = false;
				this.cancelRecord = false;
				this.isLangTap = false;

			},
			playVoice() {
				console.log('播放录音');
	
				if (this.voicePath) {
					this.innerAudioContext.src = this.voicePath;
					this.innerAudioContext.play();
				}
			}


		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		position: relative;
		/* align-items: center;
		justify-content: center; */
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.01) 100%);
		/* background-color: ; */
	}

	image {
		pointer-events: none !important;
	}

	.contentBg {
		width: 100vw;
		height: 100vh;
		background: url('../../static/contentbg.jpg') no-repeat;
		background-size: 100% 100%;
		position: absolute;
		z-index: -1;
	}

	.custom {
		width: 100vw;
		height: 100rpx;
		overflow: hidden;
		background-color: rgba(255, 255, 255, 0.8);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.customLeft {
		height: 100%;
		display: flex;
		align-items: center;
	}

	.customMid {
		height: 100%;
		display: flex;
		align-items: center;
	}

	.customRight {
		height: 100%;
		display: flex;
		align-items: center;
	}

	.customLeft>image {
		width: 62rpx;
		height: 32rpx;
		margin-left: 32rpx;
	}

	.customMid>image {
		width: 176rpx;
		height: 36rpx;
	}

	.customRight>image {
		width: 40rpx;
		height: 40rpx;
		margin-right: 32rpx;
	}
	.tipsPoint{
		width: 20rpx;
		height: 20rpx;
		background-color: #fff;
		border-radius: 50%;
		margin-left: 20rpx;
	}
	.redPoint{
		width: 20rpx;
		height: 20rpx;
		background-color: red;
		border-radius: 50%;
	}
	.greenPoint{
		width: 20rpx;
		height: 20rpx;
		background-color: #17BA4D;
		border-radius: 50%;
	}
	.optionBtn {
		width: 96vw;
		height: auto;
		overflow: hidden;
		background-color: #202020;
		border-radius: 20rpx;
		margin: 0 auto 16rpx;
	}

	.optionBtn>button {
		background-color: #202020;
		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		margin-top: 2rpx;
	}

	.cannelBtn {
		width: 96vw;
		height: auto;
		overflow: hidden;
		background-color: #202020;
		border-radius: 20rpx;
		margin: 0 auto 40rpx;
	}

	.cannelBtn>button {
		background-color: #202020;
		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #007AFF;
		margin-bottom: 10rpx;
	}


	.main {
		width: 100vw;
		height: 90vh;
		overflow: hidden;
	}

	.inputWav {
		width: 100vw;
		height: 20vh;
		/* background-color: rgba(0,0,0,0.7); */
		position: absolute;
		bottom: 0;
		left: 0;
		color: #efefef;
		text-align: center;
	}

	.inputBox {
		width: 100vw;
		height: 100vh;
	}

	.inputTipsSlide {
		/* display: none; */
		width: 100vw;
		height: 200rpx;
		position: absolute;
		top: -180rpx;
		/* left: 50%; */
		/* transform: translateX(-50%) translateY(-50%); */
		text-align: center;
		font-size: 31rpx;
		font-family: San Francisco Display;
		font-weight: bold;
		color: #FFFFFF;
	}

	.slideMain {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.slideMain>image {
		width: 40rpx;
		height: 72rpx;
		position: absolute;
		top: 20rpx;
		/*left: 50%;
		transform: translateX(-50%); */
	}

	.inputBtnDefault {
		width: 180rpx;
		height: 180rpx;
		background: linear-gradient(135deg, #B54FE6, #439CFD);
		border-radius: 50%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.inputBtnRecording {
		width: 180rpx;
		height: 180rpx;
		background: #282828;
		border-radius: 50%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.inputIconBoxCannel {
		width: 180rpx;
		height: 180rpx;
		background: none;
		border-radius: 50%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.inputIconBox {
		width: 180rpx;
		height: 180rpx;
		background: #FB496F;
		border-radius: 50%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.inputIcon {
		width: 55rpx;
		height: 75rpx;
	}

	.inputTipsHold {
		width: 100vw;
		height: 46rpx;
		font-size: 31rpx;
		font-family: San Francisco Display;
		font-weight: bold;
		color: #EFEFEF;
		line-height: 74rpx;
		pointer-events:none
	}

	.inputTipsRelease {
		width: 100vw;
		height: 46rpx;
		font-size: 25rpx;
		font-family: San Francisco Display;
		font-weight: 400;
		color: #A0A0A8;
		line-height: 74rpx;
	}

	.chat {
		width: 90vw;
		height: 70vh;
		overflow: scroll;
		margin: 20rpx auto 120rpx;
	}

	.userPart {
		width: 90vw;
		min-height: 80rpx;
		height: auto;
		overflow: hidden;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	.userPart .headimg {
		width: 80rpx;
		height: 80rpx;
		background-color: #6A6A6A;
		border-radius: 50%;
	}

	.userPart .headimg>image {
		width: 70rpx;
		height: 70rpx;
		margin-top: 10rpx;
		margin-left: 5rpx;
	}

	.userPart .triangle {
		border: 10px solid transparent;
		border-left-color: #303030;
		width: 0;
		height: 0;
		margin-top: 20rpx;
	}

	.userPart .text {
		width: 400rpx;
		/* min-height: 80rpx; */
		/* border-radius: 10rpx; */
		overflow: hidden;
		padding: 25rpx;
		background-color: #303030;
		color: #fff;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 40rpx;
		/* word-break: break-all; */
	}

	.robotPart {
		width: 90vw;
		/* min-height: 150rpx; */
		height: auto;
		margin-top: 20rpx;
		overflow: hidden;
		

	}
	.robotPart .robotPartList{
		width: 90vw;
		min-height: 80rpx;
		margin-top: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.robotPartList .headimg {
		width: 80rpx;
		height: 80rpx;
		background-color: #000;
		border-radius: 50%;
	}

	.robotPartList .headimg>image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	/* 	margin-top: 15rpx;
		margin-left: 10rpx; */
	}

	.robotPartList .triangle {
		border: 10px solid transparent;
		border-right-color: #000;
		width: 0;
		height: 0;
		margin-top: 20rpx;
	}
	.robotPartList .thinking {
		width: 178rpx;
		height: 92rpx;
		/* border-radius: 10rpx; */
		overflow: hidden;
		padding:0 20rpx;
		background-color: #000;
		font-size: 15px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 40rpx;
		/* word-break: break-all; */
	}
	.robotPartList .thinking>image{
		display: block;
		width: 100%;
	}
	.robotPartList .text {
		width: auto;
		max-width: 400rpx;
		/* min-height: 80rpx; */
		/* border-radius: 10rpx; */
		overflow: hidden;
		padding: 26rpx;
		background-color: #000;
		font-size: 15px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 40rpx;
		/* word-break: break-all; */
	}
	.robotPartList .sort {
		width: 96rpx;
		height: 92rpx;
		/* border-radius: 10rpx; */
		overflow: hidden;
		/* padding: 32rpx; */
		background-color: #202020;
		font-size: 15px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		text-align: center;
		line-height: 92rpx;
		/* word-break: break-all; */
	}
	
	.popupWSSMain{
		width: 90vw;
		height: 40vh;
		background-color: #fff;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.popupWSSMain>input{
		width: 80vw;
		height: 80rpx;
		margin: 0 auto;
		border: 1px solid #000;
		border-radius: 10rpx;
		padding: 5rpx;
		margin: 20rpx;
	}
	.popupWSSMain>button{
		width: 80vw;
		margin: 10rpx;
	}

	
</style>