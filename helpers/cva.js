export function cva(base, variants = {}) {
  return (props = {}) => {
    let classes = base;
    for (const key in variants) {
      const value = props[key];
      if (value && variants[key][value]) {
        classes += " " + variants[key][value];
      }
    }
    return classes;
  };
}
