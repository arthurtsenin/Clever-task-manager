const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Api': path.resolve(__dirname, 'src/api'),
      '@Containers': path.resolve(__dirname, 'src/components/containers'),
      '@Views': path.resolve(__dirname, 'src/components/views'),
      '@Constants': path.resolve(__dirname, 'src/constants'),
      '@Context': path.resolve(__dirname, 'src/context'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
      '@Routes': path.resolve(__dirname, 'src/routes'),
      '@Util': path.resolve(__dirname, 'src/util'),
    },
  },
};
