<template>
  <div id="ediot">
    <div class="box_ediot">
      <vue-editor v-model="content"></vue-editor>
    </div>
  </div>
</template>

 <script>
import { VueEditor } from "vue2-editor";

export default {
  name: "ediot",
  data() {
    return {
      content: "<h1>Html For Editor</h1>"
    };
  },
  components: {
    VueEditor
  }
};
</script>
<style>
.box_ediot {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}
</style>
