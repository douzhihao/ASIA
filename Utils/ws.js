
let ws = null;
let weboscketPotassium_callback = null;
//避免重复连接
let lockReconnect = false;
let timeoutnum = null; //断开 重连倒计时
let initWebSocketPotassium = (wsurl,callback) => {
    weboscketPotassium_callback = callback
    // let wsurl = "wss://share-test.metazen-tech.com:3000/";
    // let wsurl = "wss://10.10.110.60:3000/";
    // let wsurl = "ws://10.10.10.216:3000/";
    // let wsurl = "wss://i25817465a.imdo.co";
	
    //初始化 websocket
    if ('WebSocket' in window) {
        ws = new WebSocket(wsurl)
        ws.onmessage = websocketOnmessagePotassium
        ws.onopen = websocketOnopen
        ws.onerror = websocketOnerror
        ws.onclose = websocketClose
    } else {
        console.log('Current browser Not support websocket')
    }
}
//获取 websocket 推送的数据
let websocketOnmessagePotassium = msg => {
    // console.log(msg);
    heartCheck.reset().start();
    let result = null;
    if (msg.data instanceof Blob) {
        const reader = new FileReader();
        reader.readAsText(msg.data, 'UTF-8');
        reader.onload = (e) => {
            result = JSON.parse(reader.result);
            // console.log("主监websocket收到", result);
            weboscketPotassium_callback(msg);
        };
    } else {
        // result = msg.data;
        // console.log("主监websocket收到", msg);
        //console.log("websocket收到", result);
        weboscketPotassium_callback(msg);
    }
}

// 发送数据
let sendDataPotassium = (data) => {
    //  判断 data 数据类型
    if (typeof data == 'string') {
        data = data
    } else {
        data = JSON.stringify(data)
    }
    //  判断 websocket 的状态
    if (ws.readyState === ws.OPEN) {
        console.log('双开发送信息：', data);
        // 已经打开,可以直接发送
        ws.send(data)
    } else if (ws.readyState === ws.CONNECTING) {
        // 正在开启状态中,则 1 秒后重新发送
        setTimeout(() => {
            ws.send(data)
        }, 1000)
    } else {
        // 未打开，则开启后重新调用
        initWebSocketPotassium()
        sendData(data)
    }
}
// 连接关闭事件
let websocketClose = (e) => {
    console.log('双开连接关闭', e)
    heartCheck.reset();//心跳检测
    // reconnect();

}
// 连接失败时重新连接
let websocketOnerror = () => {
    lockReconnect = false;
    // reconnect();
}
// 手动关闭 websocket
let closeWebsocketPotassium = () => {
    console.log('双开手动关闭 websocket');
    if (ws)
        ws.close()
}
// 重连
let reconnect = () => {
    if (lockReconnect) {
        return;
    }
    // 没连接上会一直重连，设置延迟避免请求过多
    timeoutnum && clearTimeout(timeoutnum);
    timeoutnum = setTimeout(function () {
        lockReconnect = false;
        console.log('双开重连中...');
        initWebSocketPotassium();
    }, 5000);
}
let websocketOnopen = () => {
    console.log('双开连接打开！');
    heartCheck.reset().start()
}
let heartCheck = { //心跳检测
    // timeout: 240 * 1000,
    timeout: 5000,
    timeoutObj: null,
    serverTimeoutObj: null,
    reset() {
        clearTimeout(this.timeoutObj)
        clearTimeout(this.serverTimeoutObj)
        return this;
    },
    start() {
        let that = this;
        this.timeoutObj = setTimeout(() => {
            console.log('ping');
            //发送数据，如果onmessage能接收到数据，表示连接正常,然后在onmessage里面执行reset方法清除定时器
            ws.send(JSON.stringify({ talk_data: 'ping' }))
            this.serverTimeoutObj = setTimeout(() => {
                ws.close()
            }, that.timeout)
        }, this.timeout)
    }
}
export { initWebSocketPotassium, sendDataPotassium, websocketOnmessagePotassium, closeWebsocketPotassium }