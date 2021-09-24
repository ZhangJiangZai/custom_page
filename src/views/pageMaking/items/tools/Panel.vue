<template>
    <el-form-item :label="item.label">
        <div class="panel">{{item.value}}</div>
    </el-form-item>
</template>

<script>
export default {
    name: "Panel",
    props: {
        item: {
            type: Object,
            required: false
        }
    }
};
</script>

<style scoped lang="scss">
.panel {
    color: #606266;
}
</style>
