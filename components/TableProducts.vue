<template>
  <div class="table-products">
    <table class="table">
        <tr class="table__tr table__tr_caption">
            <th class="table__th">Изображение</th>
            <th class="table__th">Наименование</th>
            <th class="table__th">Наличие</th>
            <th class="table__th">
                <a @click.prevent="clickPrice"  href="#">Цена</a> 
            </th>
        </tr>
        <tr class="table__tr" v-for="product in dataProducts" :key="product.id">
            <td class="table__td">
                <img class="table__img" :src="'https://dev.alcotec.com.ua/'+product.img" alt="">
            </td>
            <td class="table__td">{{product.title}}</td>
            <td class="table__td">{{product.availability.ru}}</td>
            <td class="table__td">{{product.priceUAH}}</td>    
        </tr>
    </table>
    <ProductsByID 
    :id="id"
    :filterByPrice="filterByPrice"
    @getDataProducts="dataProducts=$event"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductsByID from './ProductsByID'

export default {
    props: {
        id: {
            type: Number
        }
    },
    data() {
        return {
            dataProducts: null,
            filterByPrice: null,
        }
    },
    methods: {
        clickPrice() {
            let filterFalling = 'falling',
                filterIncreasing = 'increasing'

            this.filterByPrice = this.filterByPrice===filterFalling?filterIncreasing:filterFalling
        }
    },
    components: {
        ProductsByID
    }
}
</script>

<style lang="scss" scoped>
.table-products {
    display: flex;
    justify-content: center;
    .table {
        width: 900px;
        border-collapse: collapse;
        &__tr {
            display: flex;
            justify-content: space-between;
            text-align: center;
            border-bottom:2px solid; 
            &_caption {
                background: #28bc86;
            }
        } 
        &__td, &__th {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 25%;
            padding: 10px;
        }  

        &__img {
            width: 150px;
        }
    }
}
</style>
