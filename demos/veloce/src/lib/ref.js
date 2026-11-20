export function generateOrderRef() {
  return `VLC-${Math.floor(1000 + Math.random() * 9000)}`;
}
