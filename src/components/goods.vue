<template>
    <div class="productDetail">
        <ul class="productIntroduce">
            <li>
                <img :src="iconUrl" />
                <p class="pname">{{name}}</p>
                <p class="price">￥{{realPrice}}</p>
            </li>
            <li>
            </li>
        </ul>
        <div class="leftLine"></div>
        <p class="tuwen">图文详情</p>
        <div class="rightLine"></div>
        <div class="detailImgandTxt">
            <img :src="img.img" v-for="img in imgs" />
        </div>
    </div>
</template>
<script>
export default { /**/

    data() {
            return {
                name: '',
                realPrice: '',
                iconUrl: '',
                imgs: []
            }
        },
        created() {
            this.$http.get('static/goods.json').then(response => {
                var good = response.body.items;
                var goodsDetail;
                good.forEach((value, index) => {
                    if (value.goodsId == this.$route.params.goodsId) {
                        goodsDetail=value;
                        return;
                    }
                });
            
                this.name = goodsDetail.name;
                this.iconUrl = goodsDetail.iconUrl;
                this.realPrice = goodsDetail.realPrice;
                if (goodsDetail.detail) {
                    var b = goodsDetail.detail.split(",");
                    var a;
                    var c = [];
                    for (var i = 0; i < b.length; i++) {
                        a = {};
                        a.img = b[i];
                        c.push(a);
                    }
                    this.imgs = c;
                }

            }, response => {
                // error callback
            });
        },
}
</script>
<style scoped="scoped">
.productDetail {
    padding-bottom: 1.5rem;
}

.productIntroduce li {
    font-size: 0.28rem;
    background-color: #FFFFFF;
}

.productIntroduce img {
    width: 100%;
    display: block;
    margin-bottom: 0.1rem;
}

.productIntroduce .pname {
    margin: 0 0.4rem 0 0.4rem;
    font-size: 0.32rem;
}

.productIntroduce .price {
    color: #FF492D;
    margin: 0.4rem 0 0 0.4rem;
    padding-bottom: 0.4rem;
    font-size: 0.32rem;
}

.productIntroduce .price em {
    font-size: 0.14rem;
}

.productIntroduce li:nth-child(1) {
    margin-bottom: 0.2rem;
}

.productIntroduce .introduce {
    margin: 0.2rem 0.3rem 0 0.4rem;
    line-height: 0.5rem;
    color: #999999;
    padding-bottom: 0.2rem;
    float: left;
}

.productIntroduce .xinxi {
    line-height: 0.5rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
}

.productDetail .leftLine {
    width: 2.62rem;
    height: 0.03rem;
    background-color: #E0E0E0;
    margin-left: 0.2rem;
    margin-top: 0.4rem;
    float: left;
}

.productDetail .tuwen {
    font-size: 0.28rem;
    color: #333333;
    margin-left: 0.38rem;
    margin-top: 0.2rem;
    float: left;
}

.productDetail .rightLine {
    width: 2.62rem;
    height: 0.03rem;
    background-color: #E0E0E0;
    margin-right: 0.2rem;
    margin-top: 0.4rem;
    float: right;
}

.detailImgandTxt img {
    display: block;
    width: 100%;
}
</style>
