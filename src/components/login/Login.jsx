
var MyComponent = React.createClass({
	propTypes: {
		// initData: React.PropTypes.array
	},
	getInitialState: function () {
		return {
			validation: {
				result: true,
				errorMsg: null,
				account: {
					result: true,
					errorMsg: null
				},
				account: {
					result: true,
					errorMsg: null
				}
			},
			form: {
				account: {
					placeholder: "請輸入帳號",
					value: ""
				},
				account: {
					placeholder: "請輸入密碼",
					value: ""
				}		
			}
		}
	},
	render: function () {
		console.log("aaa");
		return <div>login MyComponent 333</div>
	}
});

module.exports = MyComponent;