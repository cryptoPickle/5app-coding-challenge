//Pm2 configuration

/**
 * instances scales the application depends on your maximum core
 * it is running cluster mode. 
 * More info http://pm2.keymetrics.io/docs/usage/cluster-mode/
 */

module.exports = {
  "apps":[
    {
      name: "ModifyAPI",
      script:"./src/babel.start.js",
      exec_mode: "cluster",
      instances: "max",
      kill_timeout: 1600,
    }
  ]
}