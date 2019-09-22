<template>
    <div class="layout-content">
        <ul>
            <li v-for="blog in blogList" :key="`key_${blog.name}`">
                <span class="title">{{blog.name}}</span>
                <span class="time">{{blog.time}}</span>
            </li>
        </ul>
    </div>
</template>

<script  lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
    name: 'Content'
})
export default class extends Vue {
    @Prop({ required: true, type: Array }) public blogList!: Array<{name: string, time: string}>
}
</script>

<style lang="less" scoped>

</style>
