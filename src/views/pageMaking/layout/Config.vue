<template>
    <div class="config">
        <component v-if="activeTools" :is="`Editor${activeTools.type}`" :configItems="activeTools"></component>
        <!-- <pre>{{activeTools}}</pre> -->
    </div>
</template>

<script>
import EditorSwitch from '../items/editor/EditorSwitch'
import EditorSlider from '../items/editor/EditorSlider'
import EditorInputNumber from '../items/editor/EditorInputNumber'
import EditorLoops from '../items/editor/EditorLoops'
import EditorPanel from '../items/editor/EditorPanel'
import EditorLayout from '../items/editor/EditorLayout'
export default {
    name: "Config",
    components:{
        EditorSwitch,
        EditorSlider,
        EditorInputNumber,
        EditorLoops,
        EditorPanel,
        EditorLayout,
    },
    data() {
        return {};
    },
    computed: {
        activeTools: {
            get(){
                return this.$store.getters['toolsPage/get_activeTools'];
            },
            set(data) {
                this.$store.commit("toolsPage/update_toolsList", data);
            }
        }
    }
};
</script>

<style scoped lang="scss">
.config {
    width: 250px;
    padding: 10px;
    border: 1px solid #000;
    overflow: auto;
}
</style>
<style>
.config_form .el-form-item__label{
    float: none;
}
.config_form .el-form-item__content{
    margin-left: 15px;
}
</style>
