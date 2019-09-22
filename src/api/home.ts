import myAxios from '@/utils/request';

export const getBlogArr = (searchStr = '') => myAxios.post('/blog/getBlogList', {
    searchStr,
});

export const getBlogType = () => myAxios.post('/blog/getBlogType');