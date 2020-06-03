const { override,addDecoratorsLegacy } = require('customize-cra')

module.exports = override(
  addDecoratorsLegacy( //配置高阶组件的装饰器模式
    [ 
      '@babel/plugin-proposal-decorators',
      {
        legacy:true
      }
  ])
)