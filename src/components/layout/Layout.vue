<template>
    <div class="layout-container">
        <div class="top">
            <slot name='top'></slot>
        </div>
        <div class="bottom">
            <div class="content">
                <slot name='content'></slot>
            </div>
            <div class="right">
                <slot name='right'></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import './params.scss';
    .layout-container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .top{
            height: $topHeight;
            width: 100%;
            background: $bgColor;
            overflow: hidden;
            flex-shrink: 0;
        }
        .bottom{
            flex-grow: 1;
            display: flex;
            .right{
                width: $rightWidth;
                background: $bgColor;
                padding-top: 13px;
                flex-shrink: 0;
                box-sizing: border-box;
                height: 100%;
            }
            .content{
                flex-grow: 1;
            }
        }
    }
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
    name: 'Layout'
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.home{
    width:100%;
    height: 100%;
}
</style>
