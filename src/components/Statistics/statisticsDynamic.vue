<template>
<div class="dynamic">
    <div class="dynamic__title">
        <slot name="title"></slot>
    </div>
    <div class="dynamic__content">
        <div class="dynamic__line" v-for="problem in defects" :style="{width: problem.percent + '%', background: problem.background, border: '1px solid ' + problem.color}" :title="problem.name + ' (' + problem.percent + '%)'"></div>
    </div>
</div>

</template>
<script>
    export default {
        props: {
            defects: {}
        },
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
    .dynamic {
        padding: 23px 69px 0px 36px;
    }

    .dynamic__title {
        font-weight: 600;
        color: #FAFAFA;
        margin-bottom: 20px;
    }

    .dynamic__line {
        height: 12px;
    }

    .dynamic__content > *:not(:last-child) {
        margin-bottom: 4px;
    }

    .dynamic__line:hover {
        transform: translate(30px, -5px) scale(1.1);
        transition: 0.2s all;
    }
</style>