/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,title 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/platform',
    name: '平台中心',
    icon: 'CloudOutlined',
    access: 'filterAccess',
    layout: false,
    routes: [
      {
        path: '/platform/dynamic/menu',
        name: '动态菜单',
        component: './Admin',
        access: 'filterAccess',
      },
      {
        path: '/platform/dynamic/form',
        name: '动态表单',
        component: './Admin',
        access: 'filterAccess',
      },
      {
        path: '/platform/dynamic/dict',
        name: '动态字典',
        component: './Admin',
        access: 'filterAccess',
      },
      {
        path: '/platform/category',
        name: '通用分类',
        component: './Admin',
        access: 'filterAccess',
      },
      {
        path: '/platform/message',
        name: '消息中心 ',
        component: './Admin',
        access: 'filterAccess',
      },
      {
        path: '/platform/files',
        name: '文件中心',
        component: './Admin',
        access: 'filterAccess',
      },
      {
        path: '/platform/data',
        name: '通用数据',
        component: './Admin',
        access: 'filterAccess',
      },
    ],
  },
  {
    path: '/workflow',
    name: '流程平台',
    icon: 'CodeSandboxOutlined',
    access: 'filterAccess',
    routes: [
      {
        path: '/workflow/definition',
        name: '流程定义',
        component: './Admin',
        access: 'filterAccess',
      },
      {
        path: '/workflow/task',
        name: '任务管理',
        component: './Admin',
        access: 'filterAccess',
      },
      {
        path: '/workflow/list',
        name: '流程应用',
        component: './Admin',
        access: 'filterAccess',
      },
    ],
  },
  {
    path: '/rd',
    name: '研发平台',
    icon: 'CodeOutlined',
    access: 'filterAccess',
    routes: [
      {
        path: '/rd/project',
        name: '项目管理',
        component: './Admin',
        access: 'filterAccess',
      },
      {
        path: '/rd/repositories',
        name: '仓库管理',
        component: './Admin',
      },
      {
        code: 'v',
        path: '/rd/version',
        name: '版本管理',
        component: './Admin',
      },
      {
        path: '/rd/component',
        name: '组件管理',
        component: './Admin',
      },
      {
        path: '/rd/members',
        name: '成员管理',
        component: './Admin',
      },
      {
        path: '/rd/power',
        name: '研发设置',
        component: './Admin',
      },
    ],
  },
  {
    path: '/devops',
    name: '运维平台',
    icon: 'CloudServerOutlined',
    access: 'filterAccess',
    routes: [
      {
        path: '/devops/infrastructure',
        name: '设施管理',
        component: './Admin',
        access: 'filterAccess',
      },
      {
        path: '/devops/admin',
        name: '系统监控',
        component: './Admin',
        access: 'filterAccess',
      },
      {
        path: '/devops/trace',
        name: '链路跟踪',
        component: './Admin',
        access: 'filterAccess',
      },
    ],
  },
  {
    path: '/iam',
    name: '身份管理',
    icon: 'SafetyOutlined',
    access: 'filterAccess',
    routes: [
      {
        path: '/iam/account',
        name: '账号管理',
        component: './Admin',
        access: 'filterAccess',
      },
      {
        path: '/iam/role',
        name: '角色管理',
        component: './Admin',
        access: 'filterAccess',
      },
      {
        path: '/iam/power',
        name: '权限管理',
        component: './Admin',
        access: 'filterAccess',
      },
      {
        path: '/iam/application',
        name: '应用管理',
        component: './Admin',
        access: 'filterAccess',
      },
    ],
  },
  {
    name: '微应用案例',
    path: '/app1/',
    microApp: 'app1',
    routes: [
      // 配置 app2 关联的路由
      {
        name: 'welcome',
        path: '/app1/welcome',
      },
      {
        name: 'list',
        path: '/app1/list',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
