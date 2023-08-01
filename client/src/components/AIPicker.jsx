import React from 'react';
import CustomButton from './CustomButton';


const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea className='aipicker-textarea' placeholder='Ask AI ...!' rows={5} value={prompt} onChange={(e) => setPrompt(e.target.value)}></textarea>
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton 
          type="outline"
          title="Asking AI..."
          customStyle="text-xs"/> 
        ):( 
        <>
        <CustomButton
        type="outline"
        title="AI Logo"
        // handleClick={() => handleSubmit('logo')}
        customStyle="text-xs"/>
        <CustomButton
        type="filled"
        title="AI Texture"
        // handleClick={() => handleSubmit('full')}
        customStyle="text-xs"/>
        </>)}
      </div>
      <div style={{color: "red"}}>
          This feature will not work! OpenAI Dalle API being Paid now...
      </div>
    </div>
  )
}

export default AIPicker
