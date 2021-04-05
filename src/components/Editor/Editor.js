import React, {useState} from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import {Controlled as ControlledEditor} from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

function Editor({displayName, language, value, onChange}) {

    const handleChange = (editor, data, editorValue) => {
        onChange(editorValue);
    }

    const [isOpen, setOpen] = useState(true);

    const toggleOpen = () => {
        setOpen(prevState => !prevState);
    }

    return (
        <div className={`editor-wrapper ${isOpen ? '' : 'collapsed'}`}>
            <div className='editor-title'>
                <h3>{displayName}</h3>
                <button onClick={toggleOpen}>
                <FontAwesomeIcon icon={isOpen ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <ControlledEditor
                value={value}
                options={{
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                    lineWrapping: true
                }}
                onBeforeChange={handleChange}
            />
        </div>
    )
}

export default Editor
