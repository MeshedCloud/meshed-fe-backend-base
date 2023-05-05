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
    path: '/rd',
    name: '研发平台',
    icon: 'CodeOutlined',
    access: 'canDevelop',
    microApp: 'rd',
    routes: [
      {
        path: '/rd/project',
        name: '研发项目',
        access: 'canDevelop',
      },
      {
        path: '/rd/packages',
        name: '组件管理',
        access: 'canDevelop',
      },
      {
        path: '/rd/members',
        name: '成员管理',
        access: 'canDevelop',
      },
    ],
  },
  {
    path: '/workflow',
    name: '流程平台',
    icon: 'CodeSandboxOutlined',
    access: 'canFlowTask',
    microApp: 'workflow',
    routes: [
      {
        path: '/workflow/task',
        name: '任务中心',
        access: 'canFlowTask',
      },
      {
        path: '/workflow/definition',
        name: '流程定义',
        access: 'canFlowAdmin',
      },
      {
        path: '/workflow/form',
        name: '动态表单',
        access: 'canFlowAdmin',
      },
    ],
  },
  {
    path: '/iam',
    name: '身份管理',
    icon: 'SafetyOutlined',
    microApp: 'iam',
    access: 'canIAMAdmin',
    routes: [
      {
        path: '/iam/account',
        name: '账号管理',
        access: 'canIAMAdmin',
      },
      {
        path: '/iam/user/login',
        hideInMenu: true,
        name: '登入',
        access: 'canIAMAdmin',
      },
      {
        path: '/iam/role',
        name: '角色管理',
        access: 'canIAMAdmin',
      },
      {
        path: '/iam/permission',
        name: '权限管理',
        access: 'canIAMAdmin',
      },
      {
        path: '/iam/system',
        name: '系统管理',
        access: 'canIAMAdmin',
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
        path: 'http://47.115.207.194:8858/nacos/#',
        name: 'Nacos',
        access: 'canNacos',
      },
      {
        path: 'http://114.132.234.23:9200/monitor/wallboard',
        name: '系统监控',
        access: 'canMonitor',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  { path: '/error/:code', layout: false, component: './error' },
  { path: '*', redirect: '/error/404' },
];
