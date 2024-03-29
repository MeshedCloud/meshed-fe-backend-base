import { Settings as LayoutSettings } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  splitMenus: true,
  contentWidth: 'Fixed',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Meshed Cloud 研发中台',
  pwa: false,
  logo: 'http://s.meshed.cn/meshed/svg/logo.svg',
  iconfontUrl: '',
};

export default Settings;
