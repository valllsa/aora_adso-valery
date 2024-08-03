module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-present-expo'],
    plugins: ["nativewind/babel"]
  };
};

