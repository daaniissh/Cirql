import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Link } from 'react-router-dom';
import VerifyTick from '@/logos/VerifyTick';
type AvatarProps = {
  username?: string
  image?: string;
  isStory?: boolean;
  storyId?: number | string;
  className?: string;
  createdAt?: string | null;
  padding?: string;

}
const UserAvatar = ({ createdAt, image, isStory, className, username, storyId, padding }: AvatarProps) => {
<<<<<<< HEAD
console.log(isStory)
  return (
    <>
    <div className={`flex items-center md:py-1 md:px-0 ${padding}`}>
      {/* Story Ring with Gradient Border */}
      <div
        className={`rounded-full ${
          isStory
            ? "p-[2.5px] bg-gradient-to-tr from-insta-gradientStart via-insta-gradientMid to-insta-gradientEnd"
            : ""
        }`}
      >
        <Link
          to={isStory ? `/story/${username}/${storyId}` : `/profile/${username}`}
          className="block rounded-full"
        >
          <Avatar className={`${className} w-8 h-8 cursor-pointer`}>
            <AvatarImage
              className="rounded-full select-none object-cover"
              src={image || "https://i.pinimg.com/736x/9e/83/75/9e837528f01cf3f42119c5aeeed1b336.jpg"}
=======

  return (
    <>
      <div className={`flex  items-center   md:py-1  md:px-0 ${padding} `}>
        {isStory ? <div className="  bg-gradient-to-tr  from-insta-gradientStart via-insta-gradientMid to-insta-gradientEnd p-[2.5px] rounded-full ">
          <Link to={`/story/${username}/${storyId}`} className="  bg-white dark:bg-black   rounded-full ">
            <Avatar className={`${className} w-8 h-8 cursor-pointer`}>
              <AvatarImage
                className="rounded-full select-none object-cover"

                src={image ? image : "https://i.pinimg.com/736x/9e/83/75/9e837528f01cf3f42119c5aeeed1b336.jpg"}

              />
              <AvatarFallback className='' >{username?.charAt(0)}</AvatarFallback>
            </Avatar>
          </Link>
        </div> : <div className="    rounded-full ">
          <Avatar className="w-8 h-8 cursor-pointer">
            <AvatarImage
              className="rounded-full select-none object-cover"
              src={image ? image : "https://i.pinimg.com/736x/9e/83/75/9e837528f01cf3f42119c5aeeed1b336.jpg"}
>>>>>>> main
            />
            <AvatarFallback className="capitalize border border-gray-600">
              {username?.charAt(0)}
            </AvatarFallback>
          </Avatar>
<<<<<<< HEAD
        </Link>
=======
        </div>}
        <div className="ml-2 flex-1">
          <Link to={`/profile/${username}`} className={`${className} cursor-pointer whitespace-nowrap overflow-hidden text-black dark:text-white text-ellipsis`}>
            {username}
            {createdAt && <span className="text-sm text-gray-400 ml-1" >•</span>}
            {createdAt && <span className="font-poppins text-xs ml-1 text-gray-400">{createdAt}</span>}
          </Link>
        </div>
>>>>>>> main
      </div>
  
      {/* Username and Metadata */}
      <div className="ml-2 flex-1">
        <Link
          to={`/profile/${username}`}
          className={`${className} cursor-pointer whitespace-nowrap overflow-hidden text-black dark:text-white text-ellipsis`}
        >
          <div className="flex items-center">
            <div className="flex items-end gap-1">
              <span>{username}</span>
              {username === "danish" && <VerifyTick className='' />}
            </div>
            {createdAt && (
              <div className="flex items-center h-auto mt-1">
                <span className="text-sm text-gray-400 ml-1">•</span>
                <span className="font-poppins text-xs ml-1 text-gray-400">
                  {createdAt}
                </span>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  </>
  )
}

export default UserAvatar