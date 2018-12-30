/* ===============================================
 *                公 用 资 源 函 数
 *                解决js浮点数计算bug
 * =============================================== */

Math.add = function (arg1, arg2) {
  return parseFloat((arg1 + arg2).toFixed(2))
}

Math.sub = function (arg1, arg2) {
  return parseFloat((arg1 - arg2).toFixed(2))
}

Math.mul = function (arg1, arg2) {
  return parseFloat((arg1 * arg2).toFixed(2))
}

Math.div = function (arg1, arg2) {
  return parseFloat((arg1 / arg2).toFixed(2))
}

Math.fixed = function (arg1) {
  return parseFloat(arg1).toFixed(2)
}
