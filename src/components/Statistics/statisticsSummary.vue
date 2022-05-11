<template>
    <div class="summary">
        <div class="summary__progress">
            <div class="summary__title">
                <slot name="title"></slot>
            </div>
            <div class="summary__table">
                <div class="summary__table-row" v-for="item in summary">
                    <div class="summary__table-item"> {{item.name}} </div>
                    <div class="summary__table-item"> {{item.count}} </div>
                </div>
            </div>
        </div>
        <div class="summary__problems problems">
            <div class="problems__title">ТОП-3 причин брака</div>
            <div class="problems__content">
                <div class="problems__item" v-for="problem in defects.sort((prev, next) => prev.percent - next.percent).reverse().slice(0, 3)" :title="problem.name + ' (' + problem.percent + '%)'" :style="{width: problem.percent * 100 / defects.sort((prev, next) => prev.percent - next.percent).reverse().slice(0, 3).reduce(function(p,c){return Number(p)+c.percent;},'') + '%'}">
                    <div class="problems__line" :style="{background: problem.background, border: '1px ' + 'solid ' + problem.color}"></div>
                    <div class="problems__subtitle" :style="{color: problem.color}"> {{problem.name}} </div>
                </div>
            </div>
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
                summary: [{
                        name: 'План',
                        count: '168 192'
                    },
                    {
                        name: 'Брак',
                        count: '18 471'
                    },
                    {
                        name: 'Кондиция',
                        count: '90 181'
                    },
                    {
                        name: 'Факт',
                        count: '108 652'
                    }
                ],

            }
        }
    }
</script>
<style scoped>
    .summary__progress {
        padding: 23px 72px 34px 0px;
        border-bottom: 1px solid #31313C;
    }

    .summary__title {
        font-weight: 600;
        color: #FAFAFA;
        margin-bottom: 23px;
    }

    .summary__table-row {
        display: flex;
        justify-content: space-between;
        padding: 8px 22px 8px 13px;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #FAFAFA;
    }

    .summary__table-row:first-child,
    .summary__table-row:last-child {
        background: #31313C;
    }

    .summary__problems {
        padding: 30px 47px 26px 0px;
    }

    .problems__title {
        margin-bottom: 16px;
        font-weight: 600;
        color: #FAFAFA;
    }

    .problems__content {
        display: flex;
    }

    .problems__content > *:not(:last-child){
        margin-right: 4px;
    }

    .problems__item:hover {
        transform: translate(5px, -5px) scale(1.1);
        transition: 0.2s all
    }

    .problems__line {
        height: 4px;
    }

    .problems__subtitle {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        margin-top: 5px;
    }

    

</style>