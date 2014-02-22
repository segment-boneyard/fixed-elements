
/**
 * Get all fixed elements.
 *
 * @return {Array}
 * @api public
 */

module.exports = function(){
  var els = document.all;
  var ret = [];
  var style;

  for (var i = 0; i < els.length; ++i) {
    if (1 != els[i].nodeType) continue;
    style = window.getComputedStyle(els[i]);
    if ('fixed' != style.position) continue;
    ret.push(els[i]);
  }

  return ret;
};
