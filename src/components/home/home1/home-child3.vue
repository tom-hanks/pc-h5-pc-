<template>
    <div id="home_child3">
         <div class="content-box">
                <P class="content-box-title">页面配置</P>
                <!-- 选择单渠道，多渠道 -->
                <div class="trench-btn-box">
                    <div class="trench-btn">
                        <button class="single-trench" :class="{ingleTrenchActive: isCheck}" @click="singCheck">单渠道</button>
                        <button class="much-trench" :class="{muchTrenchActive: !isCheck}" @click="muchCheck">多渠道</button>
                    </div>
                </div>
                <!-- 添加渠道，域名，时间 -->
                <div class="trench-news-box">
                    <div class="trench-select" v-if="!isCheck">
                        <select name="" id="">
                            <option value="">沃尔玛</option>
                            <option value="">家乐福</option>
                            <option value="">沃尔玛</option>
                            <option value="">家乐福</option>
                        </select>
                        <span class="add-btn">添加</span>
                    </div>
                    <div class="trench-list" v-if="!isCheck">
                        <div class="trench-list-open" @click="trenchOpen">{{openList}}
                            <i :class="{openIcon:isOpen}"></i>
                        </div>
                        <ul>
                            <li :class="{trenchItemActive: selectTrenchId == index}" v-for="(item,index) in trenchList" @click="selectTrench(index)">
                                {{item}}
                                <span class="delete-btn"></span>
                            </li>
                        </ul>
                    </div>
                    <div class="trench-msg">
                        <div class="trench-msg-address">
                            <span class="single-trench-name" v-if="isCheck">沃尔玛</span>
                            <label>域名</label>
                            <input class="domain-name" type="text" placeholder="请输入域名" />
                            <label>活动时间</label>
                            <el-date-picker v-model="value1" type="datetime" placeholder="上线时间">
                            </el-date-picker>
                            <el-date-picker v-model="value2" type="datetime" placeholder="下线时间">
                            </el-date-picker>
                            <span class="overTime">
                                <i>*</i>项目上下线时间为2017-05-04至2018-03-23</span>
                        </div>
                    </div>
                </div>
                <div class="setHomePage">
                    <!-- 左侧手机预览 -->
                    <div class="phoneImg">
                        <h3>玛氏冲击波</h3>
                        <div class="block-phone-img">
                            <div class="phone-header">
                                <p>{{actName}}</p>
                            </div>
                            <!-- 首页 -->
                            <div class="phone-box" v-if="isHome">
                                <div v-if="isKefuOpen" class="kefu"></div>
                                <div class="banner">banner</div>
                                <div class="textarea">{{actTaxt}}</div>
                                <button class="go-active-btn" :class="[{sumberBtn:isSummer},{NewYearBtn:isNewYear}]">参与活动</button>
                                <button class="active-rules" :class="[{sumberRuls:isSummer},{NewYearRuls:isNewYear}]">活动细则</button>
                            </div>
                            <!--手机号＋上传 -->
                            <div class="phone-box" v-if="!isHome">
                                <div v-if="isKefuOpen" class="kefu"></div>
                                <div class="banner phone-banner">banner</div>
                                <div class="two-xiaopiao">
                                    <img src="../../../assets/images/images/demo.png" alt="上传小票">
                                    <img src="../../../assets/images/images/upxiaopiao.png" alt="上传小票">
                                </div>
                                <div class="textarea phone-textarea">{{upExplain}}</div>
                                <input class="write-phone-nmb" type="text" placeholder="请输入手机号">
                                <button class="go-active-btn conform-btn" :class="[{sumberBtn:isSummer},{NewYearBtn:isNewYear}]">确定</button>
                                <button class="active-rules" :class="[{sumberRuls:isSummer},{NewYearRuls:isNewYear}]">活动细则</button>
                            </div>
                        </div>
                        <div class="tab-btn">
                            <button class="pre-btn"></button>
                            <span>1/4</span>
                            <button class="next-btn"></button>
                        </div>
                    </div>
                    <!-- 右侧信息配置 -->
                    <div class="home-msg">
                        <ul class="home-tab-list">
                            <li :class="{homeTabListAvtive: selectTabId == index}" v-for="(TabItem,index) in tabList" @click="selectTab(index)">{{TabItem}}</li>
                        </ul>
                        <!-- 首页 -->
                        <div class="home-configuration" v-if="isHome">
                            <p class="img-title">背景图上传
                                <span>（点击上传图片）</span>
                            </p>
                            <el-upload class="avatar-uploader" :action="uploadUrl" :show-file-list="false" :on-success="handleSuccess" :data="uploadParam">
                                <img v-if="iconUrl" :src="iconUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <p class="img-title">主题风格：</p>
                            <ul class="style-list">
                                <li :class="{checkedStyle: selectStyleId == index}" v-for="(Sitem,index) in styleList" @click="selectStyle(index)">{{Sitem}}
                                    <i></i>
                                </li>
                            </ul>
                            <p class="img-title">活动名称：</p>
                            <input class="active-name" maxlength="10" v-model="actName" type="text" placeholder="填写活动名称，建议不超过12字">
                            <p class="img-title">活动文案：</p>
                            <textarea class="active-text" v-model="actTaxt" placeholder="填写活动名称，建议不超过12字"></textarea>
                            <p class="img-title">活动细则：</p>
                            <textarea class="active-text" placeholder="请填写活动相关细则，不能超过1000词"></textarea>
                            <div class="open-kefu">
                                <p class="img-title">活动客服：</p>
                                <div :class="{off:!isKefuOpen}" @click="OFFKefu"></div>
                            </div>
                            <p v-if="isKefuOpen" class="img-title">客服链接</p>
                            <input v-if="isKefuOpen" class="active-name" type="text" placeholder="填写链接">
                            <div class="set-next-page">配置下一项</div>
                        </div>
                        <!-- 手机号+上传 -->
                        <div class="home-configuration" v-if="!isHome">
                            <p class="img-title">背景图上传
                                <span>（点击上传图片）</span>
                            </p>
                            <el-upload class="avatar-uploader" :action="uploadUrl" :show-file-list="false" :on-success="handleSuccess" :data="uploadParam">
                                <img v-if="iconUrl" :src="iconUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <p class="img-title">上传说明：</p>
                            <textarea class="active-text" v-model="upExplain" placeholder="请填写活动文案，不超过100字 "></textarea>
                            <p class="img-title">小票示意图上传
                                <span>（点击上传图片）</span>
                            </p>
                            <el-upload class="avatar-uploader" :action="uploadUrl" :show-file-list="false" :on-success="handleSuccess" :data="uploadParam">
                                <img v-if="iconUrl" :src="iconUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <div class="open-kefu">
                                <p class="img-title">参与规则设置：</p>
                                <div :class="{off:!isOpenRules}" @click="openRulse"></div>
                            </div>
                            <div class="two-set-btn"  v-if="!isOpenRules">
                                <button class="pre-set-btn">配置上一项</button>
                                <button class="next-set-btn">配置下一项</button>
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <!-- 参与规则设置 -->
                    <div class="participate-rules" v-if="isOpenRules">
                        <p class="participate-rules-title">参与规则设置</p>
                        <div class="participate-rules-set">
                            <span>参与条件</span>
                            <label>每个</label>
                            <select name="" id="">
                                <option value="">手机号</option>
                                <option value="">手机号</option>
                                <option value="">手机号</option>
                            </select>
                            <select name="" id="">
                                <option value="">每天</option>
                                <option value="">每月</option>
                                <option value="">每年</option>
                            </select>
                            <label>参与次数超过</label>
                            <select name="" id="">
                                <option value="">1次</option>
                                <option value="">2次</option>
                                <option value="">不限次数</option>
                            </select>
                            <label>禁止参与</label>
                            <label>提示文案</label>
                            <button class="add-reminder-text">+提示文案</button>
                            <label>推送渠道：当前页面</label>
                            <span class="add-btn">添加</span>
                        </div>
                        <div class="has-rules">
                            <p class="has-rules-title">
                                <span>*</span>已设规则　</p>
                            <ul>
                                <li>1.每个手机号每天参与活动次数超过2次 ，禁止参与，当前页面提示：每个手机号每日仅限两次，谢谢参与
                                     <button class="delete"></button>
                                </li>
                                <li>1.每个手机号每天参与活动次数超过2次 ，禁止参与，当前页面提示：每个手机号每日仅限两次，谢谢参与
                                    <button class="delete"></button>
                                </li>
                            </ul>
                            <div class="two-set-btn">
                                <button class="pre-set-btn">配置上一项</button>
                                <button class="next-set-btn">配置下一项</button>
                            </div>
                        </div>
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
   name: 'home-child3',
   components: {

  },
  data(){
    return{
         isCheck: true,
            trenchList: ["1.家乐福", "2.家乐福", "3.家乐福", "1.家乐福", "2.家乐福", "3.家乐福", "1.家乐福", "2.家乐福", "3.家乐福",
                "1.家乐福", "2.家乐福", "3.家乐福"
            ],
            selectTrenchId: 0,
            openList: "展开",
            isOpen: false,
            tabList: ["首页", "手机号＋上传", "抽奖", "其他设置"],
            isHome: false,
            selectTabId: 0,
            value1: '',
            value2: '',
            uploadUrl: "",
            uploadParam: {},
            iconUrl: "",
            // 风格列表
            styleList: ["默认", "缤纷夏日", "新春快乐", "萌萌大作战"],
            selectStyleId: 0,
            // 客服开关
            isKefuOpen: true,
            // 选择风格
            isSummer: false,
            isNewYear: false,
            // 活动名称
            actName: "",
            // 活动文案
            actTaxt: "",
            // 参与规则开关
            isOpenRules:false,
            // 上传说明
            upExplain:"",
    }
  },
  mounted() {
    //   this.$axios
    //     .get('http://saasmiddle.ugetme.com.cn/activity/app/GetAppTypeList?_=1533103170534')
    //     .then(response => {
    //      console.log(response)
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
  },
  methods:{
      // 单渠道 按钮
            singCheck: function () {
                this.isCheck = true;
            },
            // 多渠道 按钮
            muchCheck: function () {
                this.isCheck = false;
            },
            // 选则具体渠道
            selectTrench: function (index) {
                this.selectTrenchId = index;
            },
            // 页面配置tab切换
            selectTab: function (index) {
                this.selectTabId = index;
            },
            // 选择风格
            selectStyle: function (index) {
                this.selectStyleId = index;
                if (index == 1) {
                    this.isSummer = true;
                    this.isNewYear = false;
                } else if (index == 2) {
                    this.isNewYear = true;
                    this.isSummer = false;
                } else {
                    this.isNewYear = false;
                    this.isSummer = false;
                }
            },
            //  展开列表
            trenchOpen: function () {
                this.isOpen = !this.isOpen;
                if (this.isOpen) {
                    this.openList = "收起";
                } else {
                    this.openList = "展开";
                }

            },
            // 上传成功
            handleSuccess: function () {

            },
            // 客服开滚开关
            OFFKefu: function () {
                this.isKefuOpen = !this.isKefuOpen;
            },
            // 参与规则开关
            openRulse: function(){
                this.isOpenRules = !this.isOpenRules;
            }
  }
}
</script>

<style scoped>
@import '../../../assets/css/setPage.css'; /*引入公共样式*/
</style>
