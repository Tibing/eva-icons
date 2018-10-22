import classnames from 'classnames/dedupe';

import DEFAULT_ATTRS from './default-attrs.json';

class Icon {
  constructor(name, contents) {
    this.name = name;
    this.contents = contents;
    this.attrs = {
      ...DEFAULT_ATTRS,
      ...{ class: `eva eva-${name}` },
    };
  }

  toSvg(attrs = {}) {
    const { animation, ...remAttrs } = attrs;
    const combinedAttrs = {
      ...this.attrs,
      ...remAttrs,
      ...{ class: classnames(this.attrs.class, attrs.class, `animation infinite ${animation.type}`) },
    };
    const style = `style="width: ${remAttrs.width}px; height: ${remAttrs.height}px"`;

    return `<i class="hover"><svg ${attrsToString(combinedAttrs)}>${this.contents}</svg></i>`;
  }

  toString() {
    return this.contents;
  }
}

function attrsToString(attrs) {
  return Object.keys(attrs)
    .map(key => `${key}="${attrs[key]}"`)
    .join(' ');
}

export default Icon;
