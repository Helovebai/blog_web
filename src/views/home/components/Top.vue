<template>
    <div class="top">
        <img src="@/assets/images/sensir.png" alt="img" />
        <span>{{motto}}</span>
    </div>
</template>

<script  lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
    name: 'top'
})
export default class extends Vue {
    @Prop({ required: true, type: String }) motto!: string
}
</script>

<style lang="scss" scoped>
.top{
    text-align: center;
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 20px auto;
    }
}
</style>
