<template>
  <div id="personal">
       <div class="persersonal clearfix">
        <div class="person-name fl">
            <div>
                <img src="../assets/images/images/header.png" alt="头像">
            </div>
            <span>Andy</span>
            <i class="personal-jiantou el-icon-arrow-down"></i>
        </div>
    </div>
  </div>
</template>

<script>
export default {
   name: 'personal',
   components: {

  },
  data(){
    return{
         
    }
  },
  methods:{

  },
  mounted() {

  }
}
</script>

<style scoped>
#personal{
    width: 1420px;
    position: relative;
    margin-left: 400px;
}
.persersonal {
    position:absolute;
    top:40px;
    right: 0;
}
.person-name {
    cursor:pointer;
    height:50px
}
.person-name div {
    width:50px;
    height:50px;
    background:#fff;
    border-radius:50%;
    float:left
}
.person-name div img {
    width:100%;
    height:100%;
    display:block
}
.person-name span {
    display:block;
    float:left;
    padding-top:10px;
    padding-left:10px
}
.personal-jiantou{
        display: block;
    float: left;
    padding-top: 15px;
    padding-left: 10px;
}
</style>
