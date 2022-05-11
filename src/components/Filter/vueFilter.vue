<template>
    <section class="filter">
        <div class="filter__icon"></div>
        <div class="filter__list">
            <div v-for="filter in filters" :class="{'filter__item': true, 'filter__item_active': filter.status == true}">
                {{ filter.name }}
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props: {
            filters: {}
        },
        data() {
            return {

            }
        },
        methods: {}
    }
</script>
<style scoped>
    .filter {
        display: flex;
        height: 32px;
        margin-bottom: 8px;
    }

    .filter__icon::before {
        content: url("@/img/svg/filter__icon.svg");
        margin-right: 8px;
    }

    .filter__icon:hover {
        cursor: pointer;
    }

    .filter__list {
        display: flex;
        align-items: center;
    }

    .filter__list>*:not(:last-child) {
        margin-right: 8px;
    }

    .filter__item {
        position: relative;
        background: #1E1E25;
        border-radius: 4px;
        color: #FAFAFA;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        padding: 6px 42px 6px 16px;
    }

    .filter__item::after {
        content: url("@/img/svg/filter__cross.svg");
        position: absolute;
        right: 0;
        top: 4px;
    }

    .filter__item:hover {
        cursor: pointer;
    }

    .filter__item_active {
        background-color: #31313c;
    }
</style>