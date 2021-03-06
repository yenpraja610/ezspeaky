import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  videos: DS.hasMany('video'),
  comments: DS.hasMany('comment'),
});
