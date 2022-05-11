<template>
    <div class="wrapper">
        <vue-header> </vue-header>
        <vue-main>
            <vue-filter :filters="filters"></vue-filter>

            <vue-information>
                <template v-slot:title>Упущенная выгода</template>
                <template v-slot:content>
                    <vue-chart></vue-chart>
                </template>
            </vue-information>

            <vue-information>
                <template v-slot:title>Средняя величина веса погонного метра балки, %</template>
                <template v-slot:select>
                    <select class="information__select">
                        <option value="" v-for="year in years"> {{year}} </option>
                    </select>
                </template>
                <template v-slot:content>
                    <vue-statistics></vue-statistics>
                </template>
            </vue-information>
        </vue-main>
    </div>
</template>

<script>
    import vueHeader from "@/components/Header/vueHeader"
    import vueMain from "@/components/Main/vueMain"
    import vueFilter from "@/components/Filter/vueFilter"
    import vueInformation from "@/components/Information/vueInformation"
    import vueStatistics from "@/components/Statistics/vueStatistics.vue"
    import vueChart from "@/components/Chart/vueChart.vue"
    export default {
        components: {
            vueHeader,
            vueMain,
            vueFilter,
            vueInformation,
            vueStatistics,
            vueChart
        },
        data() {
            return {
                filters: [{
                        id: 0,
                        name: "Анализ веса пог. метра",
                        status: true
                    },
                    {
                        id: 1,
                        name: "Упущенная выгода",
                        status: false
                    }
                ],
                years: [2020, 2021, 2022]
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .information__select {
        background: #31313C;
        border-radius: 4px;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #FAFAFA;
        padding: 6px 9px;
    }

    .information__select:hover {
        cursor: pointer;
    }
</style>