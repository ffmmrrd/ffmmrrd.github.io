document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('#page-header.full_page')
  if (!header || header.querySelector('.home-video-bg')) return

  const video = document.createElement('video')
  video.className = 'home-video-bg'
  video.src = '/video/home-bg.mp4'
  video.autoplay = true
  video.muted = true
  video.loop = true
  video.playsInline = true

  header.prepend(video)
  })