import * as React from 'react'

export default function BriefProjectInfo({ title, brief, description }) {
    return (
        <li>
            <strong>{title}</strong> | {brief}
            <br />
            {description}
        </li>
    )
}