<template>
    <div id="home_child1">
            <div class="content-box">
                <P class="content-box-title">分配给我的活动</P>
                <ul class="tab-list">
                    <li class="activeTab">全部</li>
                    <li>上传小票</li>
                    <li>抽奖活动</li>
                    <li>一物一码</li>
                </ul>
                <div class="activity-list">
                    <ul>
                        <li class="activity-item" v-for="(item,index) in arrEchats" :key='index'>
                            <img v-if= "orderState==1" class="StatusOne" src="../../../assets/images/images/upPiao.png" alt="订单状态">
                            <img  v-if= "orderState==2" class="StatusOne" src="../../../assets/images/images/choujiang.png" alt="订单状态">
                            <img  v-if= "orderState==3" class="StatusOne" src="../../../assets/images/images/oneThings.png" alt="订单状态">
                            <dl>
                                <dt>
                                    <span>百威</span>
                                    <p>YH1212</p>
                                </dt>
                                <dd>活动名称活动名称</dd>
                            </dl>
                            <div class="activity-msg" :id="'chartjjjjj'+index"  ref="refContent">
                                <div class="residue-time">
                                    <div class="annular-chart" :id="'chart'+index"></div>
                                    <div class="residue-days">剩<br/><span>18</span>天</div>
                                    <p>距上线时间</p>
                                </div>
                                <div class="time-axle">
                                    <p class="time-axle-year"><span>2018</span><span class="time-axle-year-end">2019</span></p>
                                    <div class="time-axle-line"><div></div></div>
                                    <div class="time-axle-day"><span>12.06 19:00:00</span><span class="time-axle-day-end">12.06 19:00:00</span></div>
                                    <div class="activity-authorization">
                                        <div class="activity-authorization-num">授权资源数：6</div>
                                        <div class="activity-priority"><i class="normal" :class="{urgent:isUrgent}"></i>优先级：正常</div>
                                    </div>
                                    <button class="select-btn">选择</button>
                                </div>
                            </div>
                            <!-- {{addCanvas(index)}} -->
                        </li>
                        <li class="activity-item"></li>
                        <li class="activity-item"></li>
                        <li class="activity-item"></li>
                    </ul>
                </div>
            </div>
    </div>
</template>
<script>
export default {
   name: 'home1',
   components: {

  },
  data(){
    return{
         orderState:"2", // 1:上传小票  2抽奖  3一物一码
            // 是否加急
            isUrgent:true,
            arrEchats:[1,2]
    }
  },
    created:function(){
        this.$nextTick(() => {
             console.log(this.$refs.refContent)
        })

    },
    mounted() {
      console.log(this)
        this.arrEchats.forEach( ( item, i ) => {//遍历列表实例不同的echats进度圆
           this.drawLine(i);
        });
     this.$axios
        .get('http://saasmiddle.ugetme.com.cn/activity/app/GetAppTypeList?_=1533191754006')//http://localhost:64141/activity/app/GetAppTypeList?_=1533191754006
        .then(response => {
         console.log(response)
        })
        .catch(function(error) {
          console.log(error);
        });
  },
  methods:{
       drawLine: function (index) {
        //    console.log(`chart${index}`)
        //    alert(index)
                // 基于准备好的dom，初始化echarts实例
                // var myChart0 =  this.$echarts.init(document.getElementById('chart0'))
                // 绘制图表
                this.$echarts.init(document.getElementById(`chart${index}`)).setOption({
                    series: [{
                        name: '据上线时间',
                        type: 'pie',
                        radius: ['80%', '77%'],
                        avoidLabelOverlap: false,
                        legendHoverLink:false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                        },
                        color:['#1DE9B6','#ECEDEF'],
                        data: [{value: 335, name: '剩余时间'},
                               {value: 100, name: '过去的时间'},
                            ]
                    }]
                });
            },
            addCanvas(index){
                console.log(document.getElementById(`chartjjjjj${index}`) )
            }
  }

}
</script>

<style scoped>
#home .tab-list {
    overflow:hidden;
    border-bottom:1px #eaeaea solid;
    padding-left:40px
}
#home .tab-list li {
    float:left;
    margin-right:35px;
    line-height:50px;
    font-size:14px;
    color:#aaaeb3;
    cursor:pointer;
    padding:0px 5px
}
#home .tab-list .activeTab {
    font-size:16px;
    color:#393c40;
    border-bottom:3px #4900e0 solid
}
#home .activity-list {
    padding-top:25px;
    padding-left:45px;
    overflow:hidden
}
#home .activity-list .activity-item {
    width:426px;
    height:310px;
    margin-right:30px;
    margin-bottom:30px;
    position:relative;
    float:left;
    box-shadow:0px 2px 15px 0px rgba(210, 210, 210, 0.45)
}
#home .activity-list .activity-item .StatusOne {
    display:block;
    height:77px;
    width:77px;
    position:absolute;
    right:0px;
    top:0
}
#home .activity-list .activity-item dl {
    height:68px;
    border-bottom:1px #d7d7d7 solid;
    padding-top:20px;
    padding-left:20px
}
#home .activity-list .activity-item dl dt {
    margin-bottom:10px;
    overflow:hidden
}
#home .activity-list .activity-item dl dt span, #home .activity-list .activity-item dl dt p {
    display:block;
    float:left
}
#home .activity-list .activity-item dl dt span {
    padding:2px 10px;
    font-size:14px;
    background-color:#ebebeb;
    border-radius:6px;
    margin-right:5px
}
#home .activity-list .activity-item .activity-msg {
    padding:20px
}
#home .activity-list .activity-item .activity-msg .residue-time {
    position:relative;
    float:left
}
#home .activity-list .activity-item .activity-msg .residue-time .annular-chart {
    width:100px;
    height:100px
}
#home .activity-list .activity-item .activity-msg .residue-time .residue-days {
    position:absolute;
    text-indent:15px;
    font-size:12px;
    color:#acb0b5;
    top:28px;
    left:30px
}
#home .activity-list .activity-item .activity-msg .residue-time .residue-days span {
    font-size:24px;
    color:#393c40
}
#home .activity-list .activity-item .activity-msg .residue-time p {
    width:100px;
    text-align:center;
    font-size:12px;
    color:#aaaeb3
}
#home .activity-list .activity-item .activity-msg .time-axle {
    float:left
}
#home .activity-list .activity-item .activity-msg .time-axle .time-axle-year {
    color:#acb0b5;
    font-size:12px;
    overflow:hidden;
    margin-top:10px
}
#home .activity-list .activity-item .activity-msg .time-axle .time-axle-year .time-axle-year-end {
    float:right;
    margin-bottom:5px
}
#home .activity-list .activity-item .activity-msg .time-axle .time-axle-line {
    width:280px;
    height:6px;
    background:#d7d7d7;
    border-radius:3px
}
#home .activity-list .activity-item .activity-msg .time-axle .time-axle-line div {
    width:6px;
    height:6px;
    background-color:#5ac1ff;
    border-radius:3px
}
#home .activity-list .activity-item .activity-msg .time-axle .time-axle-day {
    margin-top:10px;
    font-size:14px
}
#home .activity-list .activity-item .activity-msg .time-axle .time-axle-day .time-axle-day-end {
    float:right
}
#home .activity-list .activity-item .activity-msg .time-axle .activity-authorization {
    margin-top:25px;
    overflow:hidden
}
#home .activity-list .activity-item .activity-msg .time-axle .activity-authorization .activity-authorization-num {
    float:left;
    font-size:16px;
    padding-left:25px;
    background:url(../../../assets/images/images/resourse.png) no-repeat left center;
    background-size:18px 18px
}
#home .activity-list .activity-item .activity-msg .time-axle .activity-authorization .activity-priority {
    float:right;
    font-size:16px
}
#home .activity-list .activity-item .activity-msg .time-axle .activity-authorization .activity-priority .normal {
    display:inline-block;
    border-radius:50%;
    margin-right:5px;
    width:12px;
    height:12px;
    background-color:#5ff333
}
#home .activity-list .activity-item .activity-msg .time-axle .activity-authorization .activity-priority .urgent {
    background:red
}
#home .activity-list .activity-item .activity-msg .time-axle .select-btn {
    width:136px;
    height:50px;
    background-image:linear-gradient(42deg, #4900e0 0%, #8d2de2 100%);
    border-radius:5px;
    color:#fff;
    font-size:18px;
    margin-top:20px
}
</style>
