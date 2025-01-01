import React, { useState } from 'react'
import { FormProps } from '../types'
import UserAvatar from '@/components/common/UserAvatar'
import { Button } from '@/components/ui/Button'


const PostUpload = ({ formsState, onSubmit, setIsOpen, gotoForm }: FormProps) => {
  const [caption, setCaption] = useState<string>("")
  const getCaption = (e: React.FormEvent<HTMLDivElement>) => {

    setCaption(e.currentTarget.textContent || "");
  };
  const SharePost = () => {

   
    onSubmit({ caption, image: formsState.CropImage.image as string, file: formsState.CropImage.file });

    setIsOpen(false)

    gotoForm('SelectImage')
   

  };
  return (
    <div className="flex  items-center h-[600px]">
      <div className="flex flex-col md:flex-row gap-2 w-full h-full">

        <div className="bg-[#262626]  md:mt-8  overflow-hidden">
          <img
            className="w-full md:w-auto h-full object-contain"
            src={formsState.CropImage.image as string}
            alt="Cropped Image"
          />
        </div>
        {/* right */}
        <div className="flex-1 px-2   flex flex-col">
          <div className="text-white flex-1  flex justify- flex-col mt-5 md:mt-8 ">
            <div className="py-2"><UserAvatar username='da11nsh' className='text-sm' /></div>
            <div
              aria-label="Write a caption..."
              className="w-full h-52   outline-none dark:text-white text-stone-800 py-2 px-5 bg-gray-200 dark:bg-[#121212] rounded-xl placeholder:text-white editable-placeholder"
              contentEditable="true"
              role="textbox"
              onInput={getCaption}
              spellCheck="true"
              // tabIndex="0"
              aria-placeholder="Write a caption..."
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                minHeight: "150px",
                position: "relative",
              }}
            >
              <p style={{ marginTop: "0" }}>
                <br />
              </p>
            </div>

          </div>
          <div className="mt-5">
            <Button onClick={SharePost} className='!bg-insta-primary !text-white w-full' >Share</Button>
          </div>

        </div>

      </div>

    </div>

  )
}

export default PostUpload