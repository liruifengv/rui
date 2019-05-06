module.exports = {
  title: 'RUI', // 设置网站标题
  description: 'a vue component library', //描述
  base: '/rui/',
  dest: './examples/.vuepress/dist', // 设置输出目录
  port: 8080, //端口
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [{
        text: '主页',
        link: '/'
      }, // 导航条
      {
        text: '组件文档',
        link: '/guides/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/liruifengv/rui'
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/guides/': [{
          title: '指南',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: '组件',
          collapsable: false,
          children: [
            'components/Button',
            'components/Message',
            'components/Input',
            'components/Icon',
          ]
        }
      ]
    },
    sidebarDepth: 1
  }
}
