module.exports = {
    title: 'RUI', // 设置网站标题
    description: 'a vue component library', //描述
    dest: './dist', // 设置输出目录
    port: 8080, //端口
    themeConfig: { //主题配置
        // 添加导航栏
        nav: [{
                text: '主页',
                link: '/'
            }, // 导航条
            {
                text: '组件文档',
                link: '/docs/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/liruifengv/rui'
            }
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/docs/': [{
                title: '基础组件',
                collapsable: true,
                children: [
                    'base/button',
                ]
            }, ]
        }
    }
}