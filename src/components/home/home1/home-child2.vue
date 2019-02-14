<template>
  <div id="home_child2">
     <div class="content-box">
                <P class="content-box-title">流程设置</P>
                <div class="select-flow">
                        <div class="check-btn">
                            <input type="checkbox" :class="{checkedType:isCheck}" :checked="isCheck" @click="checkFlow">
                            <p>流程一</p>
                        </div>
                        <div class="flow-box" :class="{flowBoxChecked:isCheck}">
                            <div class="flow-step-box">
                                <div class="flow-box-img">
                                    <div class="imgAndTitle">
                                        <img src="../../../assets/images/images/home.png" alt="第一步">
                                        <p><span>01</span>首页设置</p>
                                    </div>
                                    <div class="flow-box-line"></div>
                                </div>
                                <div class="flow-box-img">
                                    <div class="imgAndTitle">
                                        <img src="../../../assets/images/images/jiang.png" alt="第二步">
                                        <p><span>02</span>抽奖</p>
                                    </div>
                                    <div class="flow-box-line"></div>
                                </div>
                                
                                <div class="flow-box-img">
                                    <div class="imgAndTitle">
                                        <img src="../../../assets/images/images/up.png" alt="第三步">
                                        <p><span>03</span>手机号和上传小票</p>
                                    </div>
                                    <div class="flow-box-line"></div>
                                </div>
                                
                                <div class="flow-box-img">
                                    <div class="imgAndTitle">
                                        <img src="../../../assets/images/images/LookActive.png" alt="第四步">
                                        <p><span>04</span>活动预览</p>
                                    </div>
                                   
                                </div>
                            </div>
                            <p class="bottom-line"></p>
                        </div>
                </div>
            </div>
            <!-- 上一步   下一步 -->
            <div class="step-btn">
                <button>上一步</button>
                <button class="next-btn">下一步</button>
            </div>
  </div>
</template>

<script>
export default {
  name: "home-child2",
  components: {
    
  },
  data() {
    return {
      // 是否选中
      isCheck: false
    };
  },
  mounted() {},
  methods: {
    checkFlow: function() {
      if (this.isCheck) {
        this.isCheck = false;
      } else {
        this.isCheck = true;
      }
    }
  }
};
</script>

<style scoped>
.select-flow {
    margin-bottom:40px
}
.select-flow .check-btn {
    width:250px;
    height:215px;
    float:left;
    text-align:center;
    padding-top:105px
}
.select-flow .check-btn input {
    outline:none;
    -webkit-appearance:none;
    display:inline-block;
    width:46px;
    height:44px;
    border:solid 2px #5b0ce0;
    border-radius:50%
}
.select-flow .check-btn .checkedType {
    background:url(../../../assets/images/images/checked.png) no-repeat;
    background-size:100% 100%
}
.select-flow .flow-box {
    width:1007px;
    margin-left:250px;
    height:275px;
    padding-top:35px;
    padding-left:50px;
    border:solid 3px #d7d7d7;
    box-shadow:0px 2px 15px 0px #d7d7d7
}
.select-flow .flow-box .flow-step-box {
    overflow:hidden
}
.select-flow .flow-box .flow-step-box .flow-box-img {
    text-align:center;
    float:left;
    overflow:hidden
}
.select-flow .flow-box .flow-step-box .flow-box-img .imgAndTitle {
    float:left
}
.select-flow .flow-box .flow-step-box .flow-box-img .imgAndTitle img {
    width:94px;
    height:177px;
    display:inline-block
}
.select-flow .flow-box .flow-step-box .flow-box-img .imgAndTitle p {
    padding-top:20px;
    width:210px;
    color:#4a4a4a
}
.select-flow .flow-box .flow-step-box .flow-box-img .imgAndTitle p span {
    padding-right:5px;
    color:#5c0ce0
}
.select-flow .flow-box .flow-step-box .flow-box-img .flow-box-line {
    width:50px;
    height:177px;
    float:left;
    background:url(../../../assets/images/images/nextStep2.png) no-repeat center;
    background-size:53px 17px
}
.select-flow .flow-box .bottom-line {
    width:820px;
    height:15px;
    margin-left:90px;
    margin-top:10px;
    background:url(../../../assets/images/images/blackLine.png) no-repeat center;
    background-size:100% 100%
}
.select-flow .flowBoxChecked {
    border:solid 3px #f5efff;
    background-color:#f5efff;
    box-shadow:0px 2px 15px 0px rgba(73, 0, 221, 0.23)
}
</style>
