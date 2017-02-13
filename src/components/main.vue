<template>
    <div class="goods">
        <a v-for="good in goods" @click="gogoods(good)" >
            <img :src="good.iconUrl" />
            <h2>{{good.name}}</h2>
        </a>
    </div>
</template>
<script>
export default {
    name: 'goods',
    data() {
        return {
            goods: []
        }
    },
    methods: {
        gogoods(good) {
            window.location.hash = "#/goods/" + good.goodsId;
        }
    },
    created() {
        this.$http.get('static/goods.json').then(response => {
            this.goods=response.body.items;
        });
    }
}
</script>
<style scoped="scoped">
.goods a {
    display: block;
    width: 50%;
    margin-bottom: 0.2rem;
    float: left;
}

.goods a img {
    display: block;
    width: 100%;
    height: 2.5rem;
}

.goods a h2 {
    font-size: 0.28rem;
    overflow: hidden;
    line-height: 0.4rem;
}
</style>
