<template>
    <div class="table">
        <div class="table__header">
            <div class="table__row">
                <div class="table__item"></div>
                <div class="table__item">Вес кг/м, %</div>
                <div class="table__item">Объем производста, т</div>
                <div class="table__item">Фактор. анализ</div>
                <div class="table__item">Упущ. выгода, руб</div>
            </div>
            <div class="table__row">
                <div class="table__item"></div>
                <div class="table__item"></div>
                <div class="table__item">план</div>
                <div class="table__item">факт</div>
                <div class="table__item">брак</div>
                <div class="table__item"></div>
                <div class="table__item"></div>
            </div>
        </div>
        <div class="table__body">
            <div class="table__row" v-for="item in statistics">
                <div class="table__item">{{item.month}}</div>
                <div class="table__item">{{item.weight + '%'}}</div>
                <div class="table__item">{{convertNumber(item.plan)}}</div>
                <div class="table__item">{{convertNumber(item.fact)}}</div>
                <div class="table__item">{{item.defect}}</div>
                <div class="table__item">
                    <div class="table__line" v-for="line in item.analysis"
                        :title="line.name + ' (' + line.percent + '%)'"
                        :style="{background: line.background, width: line.percent * 100 / item.analysis.sort((prev, next) => prev.percent - next.percent).reduce(function(p,c){return Number(p)+c.percent;},'') + '%', border: '1px solid ' + line.color}">
                    </div>
                </div>
                <div class="table__item">
                    {{item.missBenefit > 0 ? '+ ' + convertNumber(item.missBenefit) : '- ' + convertNumber(item.missBenefit * (-1))}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            statistics: {}
        },
        methods: {
            convertNumber(numb) {
                let str = String(numb).split('').reverse()
                let res = []
                for (let i = 0; i < str.length; i++) {
                    if (i % 3 == 0) {
                        res.push(' ')
                    }
                    res.push(str[i])
                }
                res.reverse().pop()
                return res.join('');
            }
        }
    }
</script>
<style scoped>
    .table {
        padding: 0px 0px 0px 38px
    }

    .table__header {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #FAFAFA;
        padding: 0px 20px 0px 0px;
    }

    .table__header .table__row:last-child {
        padding: 6px 0px;
        border-top: 1px solid #31313C;
        border-bottom: 1px solid #31313C;
        font-size: 12px;
        line-height: 15px;
        margin-top: 10px;
    }

    .table__row {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr 1fr 2fr 2fr;
        text-align: center;
    }

    .table__header .table__row:not(:last-child) .table__item:nth-child(3) {
        grid-column: 3 / 6;
    }

    .table__body {
        max-height: 300px;
        overflow-y: auto;
        scrollbar-width: 4px;
        scrollbar-color: #59595A #31313C;
        padding: 0px 10px 0px 0px;
    }

    .table__body .table__row {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #FAFAFA;
        padding: 10px 0px;
    }


    .table__body>*:nth-child(even) {
        background: #262630;
    }

    .table__body .table__row .table__item {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .table__body .table__row .table__item:first-child {
        justify-self: flex-start;
        padding: 0px 0px 0px 35px;
    }

    .table__line {
        height: 4px
    }

    .table__line:hover {
        transform: translate(5px, -5px) scale(1.1);
        transition: 0.2s all
    }

    /* scrollbar для Chrome/Edge/Safari */
    .table__body::-webkit-scrollbar {
        height: 8px;
        width: 8px;
        border-radius: 5px;
    }

    .table__body::-webkit-scrollbar-track {
        background: #31313C;
        ;
    }

    .table__body::-webkit-scrollbar-thumb {
        background-color: #59595A;
        border-radius: 5px;
        border: 2px solid #31313C;
        ;
    }
</style>