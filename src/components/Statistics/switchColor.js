export default function switchColor() {
    let col = Math.round(255.0*Math.random());
    const r = col.toString(16);
    col = Math.round(255.0*Math.random());
    const g=col.toString(16);
    col = Math.round(255.0*Math.random());
    const d=col.toString(16);
    col=r+g+d;
    return `#${col}`;
}
