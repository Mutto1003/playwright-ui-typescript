import dashboard from './dashboard';
import charts from './charts';
import profile from './profile';

// รวมทุก locators เป็น object เดียว (spread object)
export default {
  ...dashboard,
  ...charts,
  ...profile,
};