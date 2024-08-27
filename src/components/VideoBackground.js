import React from 'react'

export default function VideoBackground() {
    return (
        <div className='w-screen'>
            <iframe
                className='w-screen aspect-video'
                src="https://www.youtube.com/embed/7eO_rHsATLg?si=jmevOE3nKu-4TWhR&autoplay=1& mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>

            </iframe>
        </div>
    )
}
