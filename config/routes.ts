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
        icon: 'CodeSandboxOutlined',
      },
      {
        path: '/rd/project/create',
        name: '发起立项',
        icon: 'CodeSandboxOutlined',
        hideInMenu: true,
        access: 'canDevelop',
      },
      {
        name: '发起结果',
        icon: 'CodeSandboxOutlined',
        path: '/rd/project/create/:result',
        access: 'canDevelop',
        hideInMenu: true,
      },
      {
        name: '项目详情',
        icon: 'CodeSandboxOutlined',
        path: '/rd/project/details/:projectKey',
        access: 'canDevelop',
        hideInMenu: true,
      },
      {
        name: '仓库详情',
        icon: 'CodeSandboxOutlined',
        path: '/rd/repo/:repositoryId',
        access: 'canDevelop',
        hideInMenu: true,
      },
      {
        name: '服务',
        icon: 'CodeSandboxOutlined',
        path: '/rd/project/service/:projectKey/:operate/:groupId/:uuid',
        access: 'canDevelop',
        hideInMenu: true,
      },
      {
        name: '模型',
        icon: 'CodeSandboxOutlined',
        path: '/rd/project/model/:projectKey/:type/:operate/:uuid',
        access: 'canDevelop',
        hideInMenu: true,
      },
      {
        path: '/rd/packages',
        name: '组件管理',
        access: 'canDevelop',
        icon: 'CloudServerOutlined',
      },
      {
        path: '/rd/members',
        name: '成员管理',
        access: 'canDevelop',
        icon: 'TeamOutlined',
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
        icon: 'ReconciliationOutlined',
      },
      {
        path: '/workflow/definition',
        name: '流程定义',
        access: 'canFlowAdmin',
        icon: 'NodeIndexOutlined',
      },
      {
        path: '/workflow/form',
        name: '动态表单',
        access: 'canFlowAdmin',
        icon: 'CodeOutlined',
      },
      {
        path: '/workflow/task/details/:type/:instanceId/:taskId',
        name: '任务详情',
        access: 'canFlowTask',
        hideInMenu: true,
        icon: 'ReconciliationOutlined',
      },
    ],
  },
  {
    path: '/workflow',
    name: '流程平台',
    icon: 'CodeSandboxOutlined',
    access: 'canFlowAdmin',
    hideInMenu: true,
    layout: false,
    microApp: 'workflow',
    routes: [
      {
        path: '/workflow/flow/designable/:type/:flowId',
        layout: false,
        access: 'canFlowAdmin',
        name: '工作流设计器',
        icon: 'CodeOutlined',
        hideInMenu: true,
      },
      {
        path: '/workflow/form/designable/:formId',
        access: 'canFlowAdmin',
        layout: false,
        name: '表单设计器',
        icon: 'CodeOutlined',
        hideInMenu: true,
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
    path: '/',
    redirect: '/welcome',
  },
  { path: '/error/:code', layout: false, component: './error' },
  { path: '*', redirect: '/error/404' },
];
