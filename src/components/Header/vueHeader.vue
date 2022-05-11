<template>
    <header>
        <div class="container header__container">
            <div class="header__menu"></div>
            <nav>
                <a href="" class="nav__li">Прокат изделий</a>
                <a href="" class="nav__li">Фабрикация</a>
                <a href="" class="nav__li nav__li_active">Дашборд</a>
                <a href="" class="nav__li">Журнал аудита</a>
                <a href="" class="nav__li">База знаний</a>
                <a href="" class="nav__li">Настройки</a>
            </nav>
            <details class="header__user user" open @click.prevent="Default">
                <summary class="user__name">Иванов Иван</summary>
                <nav class="user__menu">
                    <a href="" class="user__option">Личный кабинет</a>
                    <a href="" class="user__option">Выйти</a>
                </nav>
            </details>
        </div>
    </header>
</template>
<script>
</script>

<style scoped>
    .header__container {
        display: grid;
        grid-template-columns: 1fr 40fr max-content;
        align-items: center;
    }

    header {
        background-color: #1E1E25;
        position: fixed;
        height: 56px;
        display: flex;
        align-items: center;
        width: 100%;
        z-index: 1000;
    }

    .header__menu:hover {
        cursor: pointer;
    }

    .header__menu::before {
        content: url("@/img/svg/gamburger.svg");
    }

    nav {
        display: flex;
        align-items: center;
    }

    .nav__li {
        color: #A7A8AB;
        height: 100%;
        padding: 0px 16px;
    }

    .nav__li:hover {
        cursor: pointer;
        color: #FAFAFA;
        transition: 0.15s all;
    }

    .nav__li_active {
        font-weight: 600;
        color: #FAFAFA;
        border-bottom: 3px solid #ED7817;
        padding: 14px 16px;
    }

    .header__user:hover .user__menu{
        display: flex;
    }

    .user {
        position: relative;
    }

    .user__name::before {
        content: url("@/img/svg/user_icon.svg");
        margin-right: 8px;
    }

    .user__name {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #C1C1C1;
        display: flex;
        align-items: center;
    }

    .user__name::after {
        content: url("@/img/svg/user__arrow.svg");
        margin-left: 9px;
    }

    .user__name:hover {
        cursor: pointer;
        color: #FAFAFA;
        transition: 0.15s all;
    }

    .user__menu {
        display: none;
        position: absolute;
        top: 30px;
        right: 0px;
        color: #C1C1C1;
        background-color: #1e1e25;
        padding: 10px 15px;
        flex-direction: column;
        width: max-content;
        align-items: flex-start;
        border-radius: 4px;
        border: 1px solid #C1C1C1;
        transition: 0.5s all;
    }

    .user__menu>*:not(:last-child) {
        margin-bottom: 5px;
    }
    .user__menu:hover {
        display: flex;
    }

    .user__option {
        color: #C1C1C1;
    }

    .user__option:hover {
        cursor: pointer;
        color: #FAFAFA;
        transition: 0.15s all;
    }
</style>