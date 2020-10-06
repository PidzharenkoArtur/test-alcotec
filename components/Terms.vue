<template>
    <div 
    class="term"
    >
        <h1 class="term__h1">{{data&&data.name.ru}}</h1>
        <div v-html="data&&data.content.ru"></div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    props: {
        name: {
            type: String
        }
    },
    
    data() {
        return {
            data: null
        }
    },
    methods: {
        ...mapActions([
            'postAlias'
        ]),  
    },
    
    async created() {
        try {
            this.data = await this.postAlias(this.name)
        } catch (error) {}
    }
}
</script>
<style lang="scss" scoped>
.term {
    padding: 17px;
    &__.h1 {
        margin-bottom: 20px;
    }
}
</style>