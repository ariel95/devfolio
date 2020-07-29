import React from 'react'
import { LanguageContext } from '../languages/LanguageContext'

const Text = (props) => {

    const { text, section } = props

    const { transl } = React.useContext(LanguageContext)

    return (
        transl[section][text]
    )
}

export default Text
