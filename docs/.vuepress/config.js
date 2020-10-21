module.exports = {
  title: '{ CloneLin }',  // 设置网站标题
  description: 'PHP ThinkPHP Golang Micro Go-Micro CSS TypeScript',
  base: '/',
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [1, 2, 3],
    },
  },

  themeConfig: {
    nav: [
      { text: '后端', link: '/backend/' },
      { text: '前端', link: '/frontend/' },
      { text: '其它', link: '/other/' },
    ],
    sidebar: {
      '/backend/': [
        'PHP',
        'GoLang',
        'FastAdmin'
      ],
      '/frontend/': [
        'HTML',
        'CSS',
        'TypeScript',
        'Vue2',
        'Vue3',
        'Flutter'
      ],
      '/other/': [
        'MacOS',
        'CentOS7',
        'NGINX',
        'SSH',
        'VIM',
        'Git',
        'VBA',
        'Live',
        'PGSQL'
      ],
    },
    smoothScroll: true
  }
}