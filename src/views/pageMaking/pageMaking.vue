<template>
    <div>
        <div class="page_flex">

            <Aside></Aside>

            <Page></Page>

            <Config></Config>
        </div>
        <!-- <div style="width: 500px; margin: 50px auto;">
            <pre>{{toolsList}}</pre>
        </div> -->
    </div>
</template>

<script>
// 控件 导航
import Aside from './layout/Aside'
// 控件 主页面
import Page from './layout/Page'
// 配置 控件
import Config from './layout/Config'

export default {
    name: "PageMaking",
    components: {
        Aside,
        Page,
        Config
    },
    computed:{
        toolsList() {
            return this.$store.getters['toolsPage/get_toolsList'];
        },
    }
};
</script>

<style scoped lang="scss">
.page_flex {
    display: flex;
    min-width: 1000px;
    height: 100%;
    padding: 50px 30px;
    justify-content: center;
}
</style>
