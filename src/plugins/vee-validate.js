// VeeValidate 使用 start =========================
// @version ^2.0.5
// @desc 提示语言设为中文
// @desc 增加手机电话号码验证'phone'
// @desc 增加车牌号验证'license'
// @see [官方文档](https://baianat.github.io/vee-validate/guide/#features)
import VeeValidate, {Validator} from 'vee-validate';
import Vue from 'vue';

// import zh_CN from 'vee-validate/dist/locale/zh_CN';
VeeValidate.Validator.localize('zh_CN');
// 配置默认错误提示
const dictionary = {
  zh_CN: {
    messages: {
      required: () => '不能为空',
      email: () => '邮箱格式不正确'
    }
  }
}
// Validator.updateDictionary(dictionary);
VeeValidate.Validator.localize(dictionary);
// 自定义规则
Validator.extend('phoneNumber', {
  getMessage: () => '手机号码格式不正确',
  validate: value => {
		// return new Promise((resolve) => {
		// 	resolve(/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value));
		// });
		return /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value);
	}
});
const License_reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}-[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1,2}$/u;
Validator.extend('license', {
  getMessage: () => '车牌号码格式不正确',
  validate: value => License_reg.test(value)
});
const card_reg = /^[1-9]{1}[0-9]{15}$/;
Validator.extend('card', {
  getMessage: () => '会员卡号格式不正确',
  validate: value => card_reg.test(value)
});

Vue.use(VeeValidate, {
  locale: 'zh_CN'
});

// End =========================