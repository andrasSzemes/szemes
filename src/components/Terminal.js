import { useState } from 'react'
import topics from '../data/topics.js'
import styled from 'styled-components'

const example = {
    title: "  Design patterns",
    related: [],
    text: `
Design pattern:
  Proven, tested solutions to the problems that we face every day in software development.
  <> cataloged solutions
  <> reusable in many different situations
  <> well documented
  <> language for collaboration
  <> improve architecture
  "Each pattern describes a problem which occurs over and over again in our environment, and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over, without ever doing it the same way twice."
  Design pattern include:
  <> name
  <> problem, clearly stated and described when pattern should be used
  <> solution
  <> consequences
  Aim: improve the way we communicate about solutions
    `,
}

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: start;
  display: flex;
  flex-direction: column
`

const Text = styled.div`
  font-size: 12px;
  font-family: monospace;
`

const Input = styled.input`
  border: none;
  flex: 1
`

function textParser(text) {
    const rows = text.split('\n')

    return rows.map((it, ix) => {
        const [startSpaces] = /^[ ]*/.exec(it)
        return <Text key={ix} style={{ paddingLeft: `${startSpaces.length * 7.2}px` }}>{it}</Text>
    })
}

function Terminal() {
    const [index, setIndex] = useState(null)

    const topicKeys = Object.keys(topics)
    const headers = topicKeys.map((it, ix) => {
        const title = topics[it].title;
        const [startSpaces] = /^[ ]*/.exec(title)

        const res = []
        let bold = false;
        for (let ix = 0; ix < title.length; ix++) {
            const letter = title[ix]

            if (title.substring(ix, ix + 3) === '***') {
                bold = false;
                ix += 2
            }
            else if (title.substring(ix, ix + 2) === '**') {
                bold = true
                ix += 1
            } else {
                res.push(<span key={ix} style={{ fontWeight: bold ? 700 : 400, fontFamily: 'monospace', fontSize: 12 }}>{letter}</span>)
            }

        }

        return (<div key={ix} style={{ fontSize: 12, display: 'flex', flexDirection: 'row', fontFamily: 'monospace' }}>
            <div style={{ minWidth: `${startSpaces.length * 7.2}px` }}>{ix}</div>
            <div style={{ paddingLeft: `${3 * 7.2}px` }}>{res}</div>
        </div>)
    })


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (!isNaN(Number(event.target.value)) && event.target.value !== '') {
                setIndex(Number(event.target.value))
            } else {
                setIndex(null)
            }

            event.target.value = ''
        }
    }

    return (
        <Main >
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', overflow: 'scroll' }}>
                {index === null && headers}
                {index !== null && textParser(topics[topicKeys[index]].text)}

            </div>
            <div style={{ display: 'flex' }}><Input onKeyDown={handleKeyDown} /></div>
        </Main>
    );
}

export default Terminal