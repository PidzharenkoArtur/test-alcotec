<template>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    props: {
        id: {
            type: Number
        },
        filterByPrice: {
            type: String
        }
    },
    
    data() {
        return {
            dataProducts: null
        }
    },
    methods: {
        sort(type, data) {
            let sort = {
                'falling': function falling(a, b) {
                    return b.priceUAH-a.priceUAH
                },
                'increasing': function increasing(a, b) {
                    return a.priceUAH-b.priceUAH
                }
            }

            return data.sort(sort[type])
        },
        async getDataProducts(id) {
            try {
                this.dataProducts = (await this.postProducts({id:id})).products
                this.$emit('getDataProducts', this.dataProducts)

            } catch (error) {}
        },
        ...mapActions([
            'postProducts'
        ]),  
    },
    watch: {
        async filterByPrice(val) {
            this.$emit('getDataProducts', this.sort(val, this.dataProducts))
        }
    },
    created() {
        this.getDataProducts(this.id)
    }
}
</script>
