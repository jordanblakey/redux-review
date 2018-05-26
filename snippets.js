import moduleName from 'module'
import 'module'
import {} from 'module'
import * as alias from 'module'
import { originalName as alias } from 'module'
export const functionName = params => {}
export default params => {}
export class className {}
export class className2 extends baseclassName {
  constructor(params) {
    super()
  }

  methodName = params => {}

  get propertyName() {
    return this.propName
  }
  set propertyName(value) {}
}

array.forEach(currentItem => {})
for (let item of object) {
}
for (const item in object) {
}
params => {}
const name = params => {}
const { propertyName } = objectToDestruct
const [propertyName] = arrayToDestruct
setInterval(() => {}, intervalInms)
setTimeout(() => {}, delayInms)
return new Promise((resolve, reject) => {})

console.assert(expression, object)
console.clear()
console.count(label)
console.dir(object)
console.error(object)
console.group('label')
console.groupEnd()
console.log(object)
console.log('object :', object)
console.trace(object)
console.warn(object)
console.info(object)
console.table(object)
