/**
 * 验证中文
 *
 */
function valChinese(value) {
	if(/^[\u4e00-\u9fa5]+$/i.test(value)) {
		return true;
	} else {
		return false;
	}
} 

/**
 * 判断是否是数字
 */
function validateNum(value) {
	if(/^\d/i.test(value)) {
		return true;
	} else {
		return false;
	}
}

/**
 * 判断数字范围是否正确
 * n1为开始范围
 * n2为结束范围
 * value为数字值
 */
function validateRange(n1, n2, value) {
	if(value <= n2 && value >= n1) {
		return true;
	} else {
		return false;
	}
}

/**
 * 判断元素是否在数组内
 *
 */
function contains(arr, item) {
	// 要做类型检查
	for(var i = 0;i < arr.length;i++) {
		if(arr[i] == item) {
			return true;
		}
	}
	return false;
}
