<template>
    <div class="home">
        <Layout>
            <template slot="top">
                <Top :motto='motto'>
                </Top>
            </template>
            <template slot="right">
                <Right>
                </Right>
            </template>
            <template slot="content">
                <Content :blogList='blogArr'>
                </Content>
            </template>
        </Layout>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Layout from '@/components/layout/Layout.vue'
import Top from './components/Top.vue'
import Right from './components/Right.vue'
import Content from './components/Content.vue'

import { getBlogArr } from '@/api/home.ts'

@Component({
    components: {
        Layout,
        Top,
        Right,
        Content
    }
})
export default class Home extends Vue {
    public motto: string = '心有多大,这世界便有多广...'
    public blogArr: Array<{name: string, time: string}> = [];

    public async getBlogArr (searchStr = '') {
        this.blogArr = await getBlogArr(searchStr)
    }

    created () {
        this.getBlogArr()
    }
}
</script>
<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100%;
}
</style>
