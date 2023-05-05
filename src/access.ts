import _ from 'lodash';

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  console.log(initialState);
  return {
    canAdmin:
      currentUser &&
      currentUser.grantedRole &&
      currentUser.grantedRole?.length > 0 &&
      _.intersection(currentUser.grantedRole, ['CONSOLE:ADMIN']).length > 0,
    canRDAdmin:
      currentUser &&
      currentUser.grantedRole &&
      currentUser.grantedRole?.length > 0 &&
      _.intersection(currentUser.grantedRole, ['RD:ADMIN']).length > 0,
    canFlowAdmin:
      currentUser &&
      currentUser.grantedRole &&
      currentUser.grantedRole?.length > 0 &&
      _.intersection(currentUser.grantedRole, ['FLOW:ADMIN']).length > 0,
    canIAMAdmin:
      currentUser &&
      currentUser.grantedRole &&
      currentUser.grantedRole?.length > 0 &&
      _.intersection(currentUser.grantedRole, ['IAM:ADMIN']).length > 0,
    canFlowTask:
      currentUser &&
      currentUser.grantedRole &&
      currentUser.grantedRole?.length > 0 &&
      _.intersection(currentUser.grantedRole, ['FLOW:ADMIN', 'FLOW:TASK']).length > 0,
    canDevelop:
      currentUser &&
      currentUser.grantedRole &&
      currentUser.grantedRole?.length > 0 &&
      _.intersection(currentUser.grantedRole, ['RD:ADMIN', 'RD:DEVELOPER', 'RD:MANAGE']).length > 0,
    canMonitor:
      currentUser &&
      currentUser.grantedRole &&
      currentUser.grantedRole?.length > 0 &&
      _.intersection(currentUser.grantedRole, ['DEVOPS', 'DEVOPS:MONITOR']).length > 0,
    canNacos:
      currentUser &&
      currentUser.grantedRole &&
      currentUser.grantedRole?.length > 0 &&
      _.intersection(currentUser.grantedRole, ['DEVOPS', 'DEVOPS:NACOS']).length > 0,

    filterAccess: () => {
      // todo 权限处理 route: any
      return true;
    },
  };
}
