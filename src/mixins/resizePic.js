import wepy from 'wepy';
export default class ResizePic extends wepy.mixin {
  data = {
    imageSizes: []
  };
  resizePic(e) {
    let { detail } = e;
    detail = detail || {};
    let { height, width } = detail;
    this.imageSizes = this.imageSizes.concat(`${height / width * 750}rpx`)
    this.$apply();
  }
}