module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'reactHeartbeat',
      externals: {
        react: 'React'
      }
    }
  }
}
