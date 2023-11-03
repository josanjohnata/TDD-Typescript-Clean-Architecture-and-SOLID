module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '^4.1.7',
      skipMD5: true
    },
    autoStart: false
  }
}
