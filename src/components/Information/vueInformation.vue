<template>
    <section class="information">
        <div class="informationm__title">
            <slot name="title"></slot>
            <slot name="select"></slot>
        </div>
        <div class="information__content">
            <slot name="content"></slot>
        </div>
    </section>
</template>
<script>
</script>
<style scoped>
    .information {
        height: 460px;
        background: #1E1E25;
        border-radius: 8px;
        padding: 32px 32px 24px;
    }

    .information{
        margin-bottom: 24px;
    }
    .informationm__title {
        font-weight: 600;
        color: #FAFAFA;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }

    .information__content {
        display: flex;
        justify-content: space-between;
    }

</style>