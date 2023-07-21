/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumn('songs', {
    play_count: {
      type: 'INTEGER',
      default: 0,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumn('songs', 'play_count');
};
