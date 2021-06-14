export default function formatText(text) {
    const res = []
    let bold = false;
    for (let ix = 0; ix < text.length; ix++) {
        const letter = text[ix]

        if (text.substring(ix, ix + 3) === '***') {
            bold = false;
            ix += 2
        }
        else if (text.substring(ix, ix + 2) === '**') {
            bold = true
            ix += 1
        } else {
            res.push(<span key={ix} style={{ fontWeight: bold ? 700 : 400, fontFamily: 'monospace', fontSize: 12 }}>{letter}</span>)
        }
    }

    return res;
}