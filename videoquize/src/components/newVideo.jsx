import React from 'react'
import PropTypes from 'prop-types'
import { H5PPlayerUI, H5PEditorUI } from '@lumieducation/h5p-react';
import v1 from './v1.mp4'

function NewVideo() {
  return (
    <div>
    
    <H5PPlayerUI
    id='player'
    contentId='XXXX'
    loadContentCallback = { async (contentId) => { /** retrieve content model from server and return it as Promise **/ } }
    />
    <H5PEditorUI
    id='editor'
    contentId='XXXX'
    loadContentCallback = { async (contentId) => { /** retrieve content model from server and return it as Promise **/} }
    saveContentCallback = { async (contentId, requestBody) => { /** save content on server **/ } }
    />
    </div>
  )
}



export default NewVideo
