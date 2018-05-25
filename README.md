# Redux Review

[Official Docs](https://redux.js.org/)

Redux is a predictable state container for JavaScript apps.
(Not to be confused with a WordPress framework – Redux Framework.)

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

You can use Redux together with React, or with any other view library.
It is tiny (2kB, including dependencies).

---

## ES7 React/Redux Snippets

```md
# BASIC METHODS

PREFIX METHOD
imp→ import moduleName from 'module'
imn→ import 'module'
imd→ import { destructuredModule } from 'module'
ime→ import \* as alias from 'module'
ima→ import { originalName as aliasName} from 'module'
exp→ export default moduleName
exd→ export { destructuredModule } from 'module'
exa→ export { originalName as aliasName} from 'module'
enf→ export const functionName = (params) => { }
edf→ export default (params) => { }
met→ methodName = (params) => { }
fre→ arrayName.forEach(element => { }
fof→ for(let itemName of objectName { }
fin→ for(let itemName in objectName { }
anfn→ (params) => { }
nfn→ const functionName = (params) => { }
dob→ const {propName} = objectToDescruct
dar→ const [propName] = arrayToDescruct
sti→ setInterval(() => { }, intervalTime
sto→ setTimeout(() => { }, delayTime
prom→ return new Promise((resolve, reject) => { }
cmmb→ comment block
React

PREFIX METHOD
imr→ import React from 'react'
imrc→ import React, { Component } from 'react'
imrcp→ import React, { Component } from 'react' & import PropTypes from 'prop-types'
imrpc→ import React, { PureComponent } from 'react'
imrpcp→ import React, { PureComponent } from 'react' & import PropTypes from 'prop-types'
redux→ import { connect } from 'react-redux'
rconst→ constructor(props) with this.state
rconc→ constructor(props, context) with this.state
est→ this.state = { }
cwm→ componentWillMount = () => { } DEPRECATED!!!
cdm→ componentDidMount = () => { }
cwr→ componentWillReceiveProps = (nextProps) => { } DEPRECATED!!!
scu→ shouldComponentUpdate = (nextProps, nextState) => { }
cwup→ componentWillUpdate = (nextProps, nextState) => { } DEPRECATED!!!
cdup→ componentDidUpdate = (prevProps, prevState) => { }
cwun→ componentWillUnmount = () => { }
cwun→ componentWillUnmount = () => { }
gdsfp→ static getDerivedStateFromProps(nextProps, prevState) { }
gsbu→ getSnapshotBeforeUpdate = (prevProps, prevState) => { }
ren→ render() { return( ) }
sst→ this.setState({ })
ssf→ this.setState((state, props) => return { })
props→ this.props.propName
state→ this.state.stateName
rcontext→ const ${1:contextName} = React.createContext()
cref→ this.${1:refName}Ref = React.createRef()
fref→ const ref = React.createRef()
bnd→ this.methodName = this.methodName.bind(this)
React Native

PREFIX METHOD
imrn→ import { $1 } from 'react-native'
rnstyle→ const styles = StyleSheet.create({})
Redux

PREFIX METHOD
rxaction→ redux action template
rxconst→ export const $1 = '$1'
rxreducer→ redux reducer template
rxselect→ redux selector template
PropTypes

PREFIX METHOD
pta→ PropTypes.array
ptar→ PropTypes.array.isRequired
ptb→ PropTypes.bool
ptbr→ PropTypes.bool.isRequired
ptf→ PropTypes.func
ptfr→ PropTypes.func.isRequired
ptn→ PropTypes.number
ptnr→ PropTypes.number.isRequired
pto→ PropTypes.object
ptor→ PropTypes.object.isRequired
pts→ PropTypes.string
ptsr→ PropTypes.string.isRequired
ptnd→ PropTypes.node
ptndr→ PropTypes.node.isRequired
ptel→ PropTypes.element
ptelr→ PropTypes.element.isRequired
pti→ PropTypes.instanceOf(name)
ptir→ PropTypes.instanceOf(name).isRequired
pte→ PropTypes.oneOf([name])
pter→ PropTypes.oneOf([name]).isRequired
ptet→ PropTypes.oneOfType([name])
ptetr→ PropTypes.oneOfType([name]).isRequired
ptao→ PropTypes.arrayOf(name)
ptaor→ PropTypes.arrayOf(name).isRequired
ptoo→ PropTypes.objectOf(name)
ptoor→ PropTypes.objectOf(name).isRequired
ptsh→ PropTypes.shape({ })
ptshr→ PropTypes.shape({ }).isRequired
ptany→ PropTypes.any
ptypes→ static propTypes = {}
```
