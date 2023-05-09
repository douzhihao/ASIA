<template>
	<view class="content">
		<view class="contentBg"></view>
		<!-- <view class="text-area">
			<button type="default" @click="clickShowPopup"> Click弹出层</button>
		</view> -->
		<view class="custom" >
			<view class="customLeft">
				<image class="" src="../../static/icon-logo.png" mode="widthFix"></image>
			</view>
			<view class="customMid">
				<image class="" src="../../static/icon-title.png" mode="widthFix"></image>
			</view>
			<view class="customRight"  @click="clickShowPopup()">
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
					<view class="headimg">
						<image src="../../static/icon-robot1.png" mode=""></image>
					</view>
					<view class="triangle"></view>
					<view class="text">
						{{robotMsg}}
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
							<image v-if="recording&&(recordStatus==2)" class="inputIcon" src="../../static/icon-mic.png"
								mode="widthFix"></image>
							<image v-if="recording&&(recordStatus==1)" class="inputIcon"
								src="../../static/icon-mic1.png" mode="widthFix"></image>
							<image v-if="!recording&&(recordStatus==0)" class="inputIcon"
								src="../../static/icon-mic1.png" mode="widthFix"></image>
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
				<button type="default" @click="clickLinkServices">Link Services</button>
			</view>
			<view class="cannelBtn">
				<button type="default" @click="clickHidePopup">Cancel</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import '@/common/net/netAgent.js'
	import {HZRecorder} from '../../Utils/HZRecorder.js';
	import {initWebSocketPotassium, sendDataPotassium, websocketOnmessagePotassium, closeWebsocketPotassium} from '../../Utils/ws.js';

	import axios from 'axios'

	// const recorderManager = uni.getRecorderManager();
	// const innerAudioContext = uni.createInnerAudioContext();

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

				recorder: null,
				innerAudioContext: '',
				
				showUserPart:false,
				showRobotPart:false,
				
				isLangTap:false,
			}
		},
		onLoad() {

		},
		mounted() {
			let that = this;
			that.$nextTick(() => {
				try {
					window.AudioContext = window.AudioContext || window.webkitAudioContext;
					navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
					window.URL = window.URL || window.webkitURL;
					audio_context = new AudioContext;
					console.log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
				} catch (e) {
					console.log('No web audio support in this browser!');
					
				}
				if(navigator.getUserMedia){
					navigator.getUserMedia({
						audio: true
					}, function(stream) {
						that.recorder = new HZRecorder(stream)
						console.log('初始化完成');
					}, function(e) {
						console.log('No live audio input: ' + e);
						
					});
				}else{
					uni.showModal({
						title: '提示',
						content: '当前设备不支持录音',
						success: function (res) {
							if (res.confirm) {
								// console.log('用户点击确定');
							} else if (res.cancel) {
								// console.log('用户点击取消');
							}
						}
					});
				}


			})
			this.innerAudioContext = uni.createInnerAudioContext();
			this.innerAudioContext.autoplay = true;
			// innerAudioContext.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
			this.innerAudioContext.onPlay(() => {
				console.log('开始播放');
			});
			this.innerAudioContext.onError((res) => {
				console.log(res.errMsg);
				console.log(res.errCode);
			});
			initWebSocketPotassium((msg)=>{
				// console.log("heartCheck")；
				var _msg = JSON.parse(msg.data);
				if(_msg.answer){
					console.log(_msg.answer);
					this.showRobotPart = true;
					this.robotMsg = this.robotMsg + _msg.answer + "。";
				}
			})
		},
		beforeDestroy(){
			closeWebsocketPotassium();
			uni.showModal({
				title: '提示',
				content: '断开提示',
				success: function (res) {
					if (res.confirm) {
						// console.log('用户点击确定');
					} else if (res.cancel) {
						// console.log('用户点击取消');
					}
				}
			});
		},
		methods: {
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
				sendDataPotassium(JSON.stringify({ close: 'close'}));
			},
			clickPlayVideo(e) {
				// console.log(e.currentTarget.dataset.index);
				this.clickHidePopup();
				sendDataPotassium(JSON.stringify({ sence: e.currentTarget.dataset.index}));
			},
			langTap() {
				clearTimeout(langtaptimeout);
				let langtaptimeout =  setTimeout(()=>{
					console.log('langTap');
					this.recorder.start();
					this.showUserPart = false;
					this.showRobotPart = false;
					this.isLangTap = true;
					this.userMsg = '';
					this.robotMsg = '';
					this.recording = true;
					this.recordStatus = 2;
					// sendDataPotassium(JSON.stringify({ sence: '3'}));
					// sendDataPotassium(JSON.stringify({ close: 'close'}));
				},200)
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
					// 完成录音
					this.recorder.stop();
					this.recorder.getBlob();
					
					var mp3Blob = this.recorder.upload();
					// console.log(mp3Blob);
					let files = new File([mp3Blob], 'input.wav', {
						type: 'audio/wav',
						lastModified: Date.now()
					});
					var fd = new FormData();
					fd.append('file', files);
					console.log(fd)
					
					
					axios({
						// baseURL: 'http://182.92.118.211:30020/business/aiSend/',
						baseURL: 'https://share-test.metazen-tech.com/business/aiSend/',
						method: 'POST',
						url: 'speakChange',
						headers: {
							"Content-Type": "multipart/form-data",
						},
						data: fd,
					}).then(res => {
						console.info(res);
						if(res.data.msg||res.data.msg.length>0){
							this.userMsg = res.data.msg;
							this.showUserPart = true;
							sendDataPotassium(JSON.stringify({ ask: res.data.msg}));
						}else{
							uni.showToast({
								title: '当前为说话或录入声音太小',
								icon: 'error',
								duration: 2000
							});
						}
					}).catch(err => {
						console.info(err)
					})
				} else {
					// 此时松手后响应的是取消录音
				}
				
				// sendDataPotassium(JSON.stringify({ ask: "你好"}));
				
				this.recorder.play(this.innerAudioContext);
				this.recording = false;
				this.cancelRecord = false;
				this.isLangTap = false;

			},
			

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
		pointer-events: none;
	}

	.contentBg {
		width: 100vw;
		height: 100vh;
		background: url('../../static/contentbg.jpg') no-repeat;
		background-size: 100% 100%;
		position: absolute;
		z-index: -1;
	}
	.custom{
		width: 100vw;
		height: 100rpx;
		overflow: hidden;
		background-color: rgba(255, 255, 255, 0.8);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content:space-between;
	}
	.customLeft{
		height: 100%;
		display: flex;
		align-items: center;
	}
	.customMid{
		height: 100%;
		display: flex;
		align-items: center;
	}
	.customRight{
		height: 100%;
		display: flex;
		align-items: center;
	}
	.customLeft>image{
		width: 62rpx;
		height: 32rpx;
		margin-left: 32rpx;
	}
	.customMid>image{
		width: 176rpx;
		height: 36rpx;
	}
	.customRight>image{
		width: 40rpx;
		height: 40rpx;
		margin-right: 32rpx;
	}
	
	.optionBtn{
		width: 96vw;
		height: auto;
		overflow: hidden;
		background-color: #202020;
		border-radius: 20rpx;
		margin:0 auto 16rpx;
	}
	.optionBtn>button{
		background-color: #202020;
		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		margin-top: 2rpx;
	}
	.cannelBtn{
		width: 96vw;
		height: auto;
		overflow: hidden;
		background-color: #202020;
		border-radius: 20rpx;
		margin:0 auto 40rpx;
	}
	.cannelBtn>button{
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
		height: 65vh;
		overflow: scroll;
		margin: 120rpx auto;
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
		width: 80rpx;
		height: 80rpx;
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
		overflow: hidden;
		padding: 25rpx;
		background-color: #303030;
		color: #fff;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 40rpx;
		word-break: break-all;
	}

	.robotPart {
		width: 90vw;
		min-height: 150rpx;
		height: auto;
		margin-top: 20rpx;
		overflow: hidden;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.robotPart .headimg {
		width: 80rpx;
		height: 80rpx;
		background-color: #000;
		border-radius: 50%;
	}

	.robotPart .headimg>image {
		width: 60rpx;
		height: 50rpx;
		margin-top: 15rpx;
		margin-left: 10rpx;
	}

	.robotPart .triangle {
		border: 10px solid transparent;
		border-right-color: #000;
		width: 0;
		height: 0;
		margin-top: 20rpx;
	}

	.robotPart .text {
		width: 450rpx;
		/* min-height: 80rpx; */
		overflow: hidden;
		padding: 32rpx;
		background-color: #000;
		font-size: 15px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 40rpx;
		word-break: break-all;
	}
</style>