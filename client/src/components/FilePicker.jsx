import React from 'react';
import CustomButton from './CustomButton';

const FilePicker = ({file, setFile, readFile}) => {
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex-col'>
        <input
          id="file-upload"
          type="file"
          accept='image/*'
          onChange={(e) => setFile(e.target.files[0])}/>
          <label htmlFor='file-upload' className='filepicker-label'>
            Upload Image File
          </label>

          <p className={`mt-2 ${file === '' ? "text-gray-500" : "text-gray-600"} text-sm truncate`}>
            {file === '' ? "No File Selected" : file.name }
          </p>
      </div>

      <div className='mt-4 flex flex-wrap gap-3'>
        <CustomButton 
        type="outline"
        title="Logo" 
        handleClick={() => readFile('logo')}
        customStyle="text-sm"
        />
        <CustomButton 
        type="filled"
        title="Full" 
        handleClick={() => readFile('full')}
        customStyle="text-md"
        />
      </div>
    </div>
  )
}

export default FilePicker;
