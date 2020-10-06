<template>
    <div 
    class="term"
    v-html="content">
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
            content: null
        }
    },
    methods: {
        ...mapActions([
            'postAlias'
        ]),  
    },
    
    async created() {
        try {
            this.content = (await this.postAlias(this.name)).content.ru
        } catch (error) {}
    }
}
</script>
<style lang="scss" scoped>
.term {
    padding: 17px;
}
</style>