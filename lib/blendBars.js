
/**
 * blendVerticalBars applies the image blend function on an area using vertical bars.
 * 
 * @param {number} x - x coordinate of the source and dest's upper left corner
 * @param {number} y - y coordinate of the source and dest's upper left corner
 * @param {number} width - width to blend
 * @param {number} height - height to blend
 * @param {number} barWidth - width of bars
 * @param {number} spacing - spacing between bars
 * @param {number} lengthVariation - mean variation on length of bars, 0 if none
 */
 function blendVerticalBars(x, y, width, height, barWidth, spacing, lengthVariation, blendMode) {
  for (var i = 0; i < Math.floor(width/(barWidth+spacing)); i++) {
    const v = lengthVariation > 0 ? randomGaussian(1)*lengthVariation : 0;
    var x1 = x + i*(barWidth + spacing);
    blend(img1, x1, y - v, barWidth, height + v*2, x1, y - v, barWidth, height + v*2, blendMode);
  }
}

/**
 * blendHorizontalBars applies the image blend function on an area using vertical bars.
 * 
 * @param {number} x - x coordinate of the source and dest's upper left corner
 * @param {number} y - y coordinate of the source and dest's upper left corner
 * @param {number} width - width to blend
 * @param {number} height - height to blend
 * @param {number} barWidth - width of bars
 * @param {number} spacing - spacing between bars
 * @param {number} lengthVariation - mean variation on length of bars, 0 if none
 */
 function blendHorizontalBars(x, y, width, height, barWidth, spacing, lengthVariation, blendMode) {
  for (var i = 0; i < Math.floor(height/(barWidth+spacing)); i++) {
    const v = lengthVariation > 0 ? randomGaussian(1)*lengthVariation : 0;
    var y1 = y + i*(barWidth + spacing);
    blend(img1, x - v, y1, width + v*2, barWidth, x - v, y1, width + v*2, barWidth, blendMode);
  }
}