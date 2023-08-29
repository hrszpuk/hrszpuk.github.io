import * as React from 'react'

export default function TitledList({ title, description, list }) {
    const liList = list.map(item => <li>{item}</li>)
    return (
        <div>
            <h2>{title}</h2>
            <ul className="dashed">
                {description}
                <br />
                {liList}
            </ul>
        </div>
    )
}