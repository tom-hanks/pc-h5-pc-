<template>
  <div id="home2">
    <p style="text-align:center">我是页面1</p>
    <iframe
      :src="h5_url"
      width="375px"
      height="667px"
      style="margin:0 auto;display: block;overflow:hidden"
      ref="iframe"
      frameborder="0"
    ></iframe>
    <alert-page></alert-page>
    <button @click="sendMessage">传给h5</button>
  </div>
</template>

<script >
import alertPage from "../alert";
export default {
  name: "home2",
  components: {
    alertPage
  },
  data() {
    return {
      h5_url:
        "http://192.168.22.226:8099/exchange.html#/direct/1078256838711054336",
      h5_background: {
        bg_img:
          "http://esmartsaas.oss-cn-hangzhou.aliyuncs.com/SAAS/middle/system/20190121212431509fa515542641559b8aac20e4a248ed.png"
      }
    };
  },
  mounted() {
    console.log("这个iframe");
    // 这里就拿到了iframe的对象
    console.log(this.$refs.iframe);
    // 这里就拿到了iframe的window对象
    console.log(this.$refs.iframe.contentWindow);
    // 在外部vue的window上添加postMessage的监听，并且绑定处理函数handleMessage
    window.addEventListener("message", this.handleMessage);
    this.iframeWin = this.$refs.iframe.contentWindow;
  },
  methods: {
    sendMessage() {
      // 外部vue向iframe内部传数据
      this.iframeWin.postMessage(
        {
          cmd: "getFormJson",
          params: {
            big_img: this.h5_background
          }
        },
        "*"
      );
    },
    handleMessage(event) {
      // 根据上面制定的结构来解析iframe内部发回来的数据
      console.log("我是h5传过来的消息", event.data);
    }
  }
};
</script>

<style lang="less">
#home2 {
}
button {
  display: block;
  padding: 10px;
  margin: 0 auto;
  cursor: pointer;
}
</style>
