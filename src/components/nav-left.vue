<template>
    <div id="nav_left">
        <div class="left-menu">
                    <div class="logo"></div>
                    <div class="menu-list" dir="rtl">
                        <ul dir="ltr">
                            <li class="menu-list-item" v-for="(item,index) in menu_list" :key="index" @click="openMenu(index)">
                                <div class="menu-list-title" :class="{ titleLine: openId == item.id }">
                                    <i class="icon-myActive icon" :class="item.iconName"></i>
                                    <span class="news-num">
                                        {{item.first_name}}
                                        <a>{{item.news_num}}</a>
                                    </span>
                                    <span class="icon-next icon icon-jiantou" :class="{ iconNextOpen: openId == item.id }"></span>
                                </div>
                                <ul class="nextMenu" :class="{ show: openId == item.id }">
                                    <li v-for="(item,index2) in item.second_name" :key="index2">{{item}}</li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                    <!-- <div class="persersonal">
                        <div class="person-name fl">
                            <div>
                                <img src="../assets/images/images/header.png" alt="头像">
                            </div>
                            <span>Andy</span>
                        </div>
                        <div class="set-btn fl">设置</div>
                    </div> -->
                </div>
    </div>
</template>
<script>
export default {
  name: "nav_left",
  data() {
    return {
      // 菜单列表
      menu_list: [
        {
          id: 0,
          iconName:'icon-myactive',
          first_name: "我的活动1",
          second_name: ["活动一", "活动二", "活动三", "活动四"],
          news_num: "2"
        },
        {
          id: 1,
          iconName:'icon-kehu',
          first_name: "客户分析",
          second_name: ["活动一", "活动二", "活动三", "活动四"],
          news_num: "13"
        },
        {
          id: 2,
          iconName:'icon-user',
          first_name: "用户分析",
          second_name: ["活动一", "活动二", "活动三", "活动四"],
          news_num: "20"
        },
        {
          id: 3,
          iconName:'icon-myactive',
          first_name: "我的活动1",
          second_name: [
            "活动一",
            "活动二",
            "活动三",
            "活动四",
            "活动一",
            "活动二",
            "活动三",
            "活动四"
          ],
          news_num: "2"
        },
        {
          id: 4,
          iconName:'icon-myactive',
          first_name: "客户分析",
          second_name: [
            "活动一",
            "活动二",
            "活动三",
            "活动四",
            "活动一",
            "活动二",
            "活动三",
            "活动四"
          ],
          news_num: "13"
        },
        {
          id: 5,
          iconName:'icon-myactive',
          first_name: "用户分析",
          second_name: ["活动一", "活动二", "活动三", "活动四"],
          news_num: "20"
        }
      ],
      openId: 0
    };
  },
  mounted() {

  },
  methods: {
        openMenu: function (index) {
            this.openId = index;
            // alert(this.openId)
        },
    }
};
</script>
<style scoped>
</style>
