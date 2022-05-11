<template>
    <div class="statistics">
        <statistics-summary :defects="defects">
            <template v-slot:title>Выполнение плана, т</template>
        </statistics-summary>
        <statistics-dynamic :defects="defects">
            <template  v-slot:title>Динамика показателя Х</template>
        </statistics-dynamic>
        <statistics-table :statistics="statistics"></statistics-table>
    </div>
</template>
<script>
    import statisticsDynamic from "./statisticsDynamic.vue";
    import statisticsSummary from "./statisticsSummary.vue";
    import statisticsTable from "./statisticsTable.vue";

    export default {
        components: {
            statisticsDynamic,
            statisticsSummary,
            statisticsTable
        },
        data() {
            return {
                defects: [{
                        id: 0,
                        name: 'Прич 1',
                        percent: 100,
                        background: 'rgba(178, 96, 71, 0.3)',
                        color: '#B26047'
                    },
                    {
                        id: 1,
                        name: 'Прич 2',
                        percent: 94,
                        background: 'rgba(181, 119, 74, 0.3)',
                        color: '#B5774A'
                    },
                    {
                        id: 2,
                        name: 'Прич 3',
                        percent: 88,
                        background: 'rgba(184, 144, 78, 0.3)',
                        color: '#B8904E'
                    },
                    {
                        id: 3,
                        name: 'Прич 4',
                        percent: 82,
                        background: 'rgba(187, 169, 82, 0.3)',
                        color: '#BBA952'
                    },
                    {
                        id: 4,
                        name: 'Прич 5',
                        percent: 76,
                        background: 'rgba(188, 190, 86, 0.3)',
                        color: '#BCBE56'
                    },
                    {
                        id: 5,
                        name: 'Прич 6',
                        percent: 70,
                        background: 'rgba(166, 189, 85, 0.3)',
                        color: '#A6BD55'
                    },
                    {
                        id: 6,
                        name: 'Прич 7',
                        percent: 64,
                        background: 'rgba(146, 188, 84, 0.3)',
                        color: '#92BC54'
                    },
                    {
                        id: 7,
                        name: 'Прич 8',
                        percent: 58,
                        background: 'rgba(103, 187, 109, 0.3)',
                        color: '#67BB6D'
                    },
                    {
                        id: 8,
                        name: 'Прич 9',
                        percent: 52,
                        background: 'rgba(102, 187, 154, 0.3)',
                        color: '#66BB9A'
                    },
                    {
                        id: 9,
                        name: 'Прич 10',
                        percent: 46,
                        background: 'rgba(97, 176, 189, 0.3)',
                        color: '#61B0BD'
                    },
                    {
                        id: 10,
                        name: 'Прич 11',
                        percent: 40,
                        background: 'rgba(87, 151, 187, 0.3)',
                        color: '#5797BB'
                    },
                    {
                        id: 11,
                        name: 'Прич 12',
                        percent: 34,
                        background: 'rgba(77, 126, 186, 0.3)',
                        color: '#4D7EBA'
                    },
                    {
                        id: 12,
                        name: 'Прич 13',
                        percent: 28,
                        background: 'rgba(64, 77, 184, 0.3)',
                        color: '#404DB8'
                    },
                    {
                        id: 13,
                        name: 'Прич 14',
                        percent: 22,
                        background: 'rgba(101, 71, 184, 0.3)',
                        color: '#6547B8'
                    },
                    {
                        id: 14,
                        name: 'Прич 15',
                        percent: 16,
                        background: 'rgba(173, 77, 185, 0.3)',
                        color: '#AD4DB9'
                    },
                    
                    {
                        id: 15,
                        name: 'Прич 16',
                        percent: 10,
                        background: 'rgba(177, 76, 165, 0.3)',
                        color: '#B14CA5'
                    },
                ],
                statistics: [
                    {
                        id: 0,
                        month: 'За все время',
                        weight: 102,
                        plan: 62645,
                        fact: 65151,
                        defect: 59,
                        analysis: [
                            {
                                id: 0,
                                name: 'Прич 1',
                                percent: 60,
                                background: 'rgba(173, 77, 185, 0.3)',
                                color: '#AD4DB9'
                            },
                            {
                                id: 0,
                                name: 'Прич 2',
                                percent: 25,
                                background: 'rgba(97, 176, 189, 0.3)',
                                color: '#61B0BD'
                            },
                            {
                                id: 0,
                                name: 'Прич 3',
                                percent: 15,
                                background: 'rgba(187, 169, 82, 0.3)',
                                color: '#BBA952'
                            }
                        ],
                        missBenefit: 20403477 
                    },
                    {
                        id: 1,
                        month: 'Апрель',
                        weight: 102,
                        plan: 60267,
                        fact: 57856,
                        defect: 60,
                        analysis: [
                            {
                                id: 0,
                                name: 'Прич 1',
                                percent: 60,
                                background: 'rgba(173, 77, 185, 0.3)',
                                color: '#AD4DB9'
                            },
                            {
                                id: 0,
                                name: 'Прич 2',
                                percent: 25,
                                background: 'rgba(97, 176, 189, 0.3)',
                                color: '#61B0BD'
                            },
                            {
                                id: 0,
                                name: 'Прич 3',
                                percent: 15,
                                background: 'rgba(187, 169, 82, 0.3)',
                                color: '#BBA952'
                            }
                        ],
                        missBenefit:  -21845836  
                    },
                    {
                        id: 2,
                        month: 'Май',
                        weight: 102,
                        plan: 71240,
                        fact: 68390,
                        defect: 65,
                        analysis: [
                            {
                                id: 0,
                                name: 'Прич 1',
                                percent: 60,
                                background: 'rgba(173, 77, 185, 0.3)',
                                color: '#AD4DB9'
                            },
                            {
                                id: 0,
                                name: 'Прич 2',
                                percent: 25,
                                background: 'rgba(97, 176, 189, 0.3)',
                                color: '#61B0BD'
                            },
                            {
                                id: 0,
                                name: 'Прич 3',
                                percent: 15,
                                background: 'rgba(187, 169, 82, 0.3)',
                                color: '#BBA952'
                            }
                        ],
                        missBenefit:  -23410486  
                    },
                    {
                        id: 3,
                        month: 'Июнь',
                        weight: 102,
                        plan: 68525,
                        fact: 71266,
                        defect: 66,
                        analysis: [
                            {
                                id: 0,
                                name: 'Прич 1',
                                percent: 60,
                                background: 'rgba(173, 77, 185, 0.3)',
                                color: '#AD4DB9'
                            },
                            {
                                id: 0,
                                name: 'Прич 2',
                                percent: 25,
                                background: 'rgba(97, 176, 189, 0.3)',
                                color: '#61B0BD'
                            },
                            {
                                id: 0,
                                name: 'Прич 3',
                                percent: 15,
                                background: 'rgba(187, 169, 82, 0.3)',
                                color: '#BBA952'
                            }
                        ],
                        missBenefit: 25303407  
                    },
                    {
                        id: 4,
                        month: 'Июль',
                        weight: 102,
                        plan: 61340,
                        fact: 58886,
                        defect: 56,
                        analysis: [
                            {
                                id: 0,
                                name: 'Прич 1',
                                percent: 60,
                                background: 'rgba(173, 77, 185, 0.3)',
                                color: '#AD4DB9'
                            },
                            {
                                id: 0,
                                name: 'Прич 2',
                                percent: 25,
                                background: 'rgba(97, 176, 189, 0.3)',
                                color: '#61B0BD'
                            },
                            {
                                id: 0,
                                name: 'Прич 3',
                                percent: 15,
                                background: 'rgba(187, 169, 82, 0.3)',
                                color: '#BBA952'
                            }
                        ],
                        missBenefit:  -25002877  
                    },
                    {
                        id: 5,
                        month: 'Август',
                        weight: 102,
                        plan: 69872,
                        fact: 72667,
                        defect: 68,
                        analysis: [
                            {
                                id: 0,
                                name: 'Прич 1',
                                percent: 60,
                                background: 'rgba(173, 77, 185, 0.3)',
                                color: '#AD4DB9'
                            },
                            {
                                id: 0,
                                name: 'Прич 2',
                                percent: 25,
                                background: 'rgba(97, 176, 189, 0.3)',
                                color: '#61B0BD'
                            },
                            {
                                id: 0,
                                name: 'Прич 3',
                                percent: 15,
                                background: 'rgba(187, 169, 82, 0.3)',
                                color: '#BBA952'
                            }
                        ],
                        missBenefit:  22123988  
                    },
                    {
                        id: 6,
                        month: 'Сентябрь',
                        weight: 102,
                        plan: 70051,
                        fact: 67248,
                        defect: 71,
                        analysis: [
                            {
                                id: 0,
                                name: 'Прич 1',
                                percent: 60,
                                background: 'rgba(173, 77, 185, 0.3)',
                                color: '#AD4DB9'
                            },
                            {
                                id: 0,
                                name: 'Прич 2',
                                percent: 25,
                                background: 'rgba(97, 176, 189, 0.3)',
                                color: '#61B0BD'
                            },
                            {
                                id: 0,
                                name: 'Прич 3',
                                percent: 15,
                                background: 'rgba(187, 169, 82, 0.3)',
                                color: '#BBA952'
                            }
                        ],
                        missBenefit:  -26532018  
                    },
                    {
                        id: 7,
                        month: 'Октябрь',
                        weight: 102,
                        plan: 62645,
                        fact: 65469,
                        defect: 72,
                        analysis: [
                            {
                                id: 0,
                                name: 'Прич 1',
                                percent: 60,
                                background: 'rgba(173, 77, 185, 0.3)',
                                color: '#AD4DB9'
                            },
                            {
                                id: 0,
                                name: 'Прич 2',
                                percent: 25,
                                background: 'rgba(97, 176, 189, 0.3)',
                                color: '#61B0BD'
                            },
                            {
                                id: 0,
                                name: 'Прич 3',
                                percent: 15,
                                background: 'rgba(187, 169, 82, 0.3)',
                                color: '#BBA952'
                            }
                        ],
                        missBenefit: -20403477  
                    },
                    {
                        id: 8,
                        month: 'Ноябрь',
                        weight: 102,
                        plan: 60267,
                        fact: 57856,
                        defect: 60,
                        analysis: [
                            {
                                id: 0,
                                name: 'Прич 1',
                                percent: 60,
                                background: 'rgba(173, 77, 185, 0.3)',
                                color: '#AD4DB9'
                            },
                            {
                                id: 0,
                                name: 'Прич 2',
                                percent: 25,
                                background: 'rgba(97, 176, 189, 0.3)',
                                color: '#61B0BD'
                            },
                            {
                                id: 0,
                                name: 'Прич 3',
                                percent: 15,
                                background: 'rgba(187, 169, 82, 0.3)',
                                color: '#BBA952'
                            }
                        ],
                        missBenefit:  -21845836  
                    },
                    {
                        id: 9,
                        month: 'Декабрь',
                        weight: 102,
                        plan: 71240,
                        fact: 68390,
                        defect: 65,
                        analysis: [
                            {
                                id: 0,
                                name: 'Прич 1',
                                percent: 60,
                                background: 'rgba(173, 77, 185, 0.3)',
                                color: '#AD4DB9'
                            },
                            {
                                id: 0,
                                name: 'Прич 2',
                                percent: 25,
                                background: 'rgba(97, 176, 189, 0.3)',
                                color: '#61B0BD'
                            },
                            {
                                id: 0,
                                name: 'Прич 3',
                                percent: 15,
                                background: 'rgba(187, 169, 82, 0.3)',
                                color: '#BBA952'
                            }
                        ],
                        missBenefit:  -23410486  
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .statistics {
        display: grid;
        grid-template-columns: 16fr 20fr 64fr;
        width: 100%;
    }

    .statistics>*:not(:last-child) {
        border-right: 1px solid #31313C;
        ;
    }
</style>