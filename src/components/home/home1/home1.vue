<template>
  <div id="home">
       <!-- 右边的内容区域 -->
        <div class="content">
            <!-- 面包屑 -->
            <!-- <content-title></content-title> -->
                <p class="content-title">
                    <span>{{oneTitle}}</span>
                    <span class="content-last-title">{{nextTitle}}</span>
                </p>
                <!-- 配置流程 -->
                    <div class="config-flow">
                        <div class="config-step">
                            <div class="currentStep">1</div>
                            <p>选择活动</p>
                        </div>
                        <div class="step-line" :class="{ stepLineActive:stepNum == 2 || stepNum ==3 || stepNum ==4 }"></div>
                        <div class="config-step">
                            <div :class="{currentStep:stepNum == 2 || stepNum ==3 || stepNum ==4 }">2</div>
                            <p>流程设置</p>
                        </div>
                        <div class="step-line" :class="{ stepLineActive: stepNum ==3 || stepNum ==4 }"></div>
                        <div class="config-step">
                            <div :class="{currentStep:stepNum == 3 || stepNum == 4}">3</div>
                            <p>页面配置</p>
                        </div>
                        <div class="step-line" :class="{ stepLineActive: stepNum ==4 }"></div>
                        <div class="config-step">
                            <div :class="{currentStep:stepNum == 4}">4</div>
                            <p>活动预览</p>
                        </div>
                    </div>
                
                <!-- 选择活动 第一步 -->
                <homeChild1></homeChild1>
                <homeChild2 v-if="false"></homeChild2>
                <homeChild3 v-if="false"></homeChild3>
        </div>
  </div>
</template>

<script>
// import homeChild1 from './home-child1'
// import homeChild2 from './home-child2'
// import homeChild3 from './home-child3'
const homeChild1 = () => import ( /* webpackChunkName:"homeChild1" */ './home-child1');
const homeChild2 = () => import ( /* webpackChunkName:"homeChild2" */ './home-child2');
const homeChild3 = () => import ( /* webpackChunkName:"homeChild3" */ './home-child3');
export default {
   name: 'home1',
   props:  {
        oneTitle: {
            type: String,
            default: '我的活动'
        },
        nextTitle: {
            type: String,
            default: '待配置活动'
        },
        // stepNum: {
        //     type: String,
        //     default: "1"
        // }
    },
   components: {
       homeChild1,
       homeChild2,
       homeChild3
  },
  data(){
    return{
       stepNum:2,//控制步骤
    }
  },
  mounted() {
        //  console.log(this.stepNum)  
  },
  methods:{
    
  },
  
}
</script>

<style scoped>

</style>
