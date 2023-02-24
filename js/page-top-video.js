(function () {

    // 获取父元素
    var containerElement = document.getElementById('page-header');
    if (containerElement == null) return;

    // 如果父元素有video元素，就不再添加
    var videoElement = containerElement.querySelector('video');
    if (videoElement != null) return;

    // 获取container的background-image的值
    var bgImage = containerElement.style.backgroundImage;
    if (bgImage == null) return;
    // console.log(bgImage)

    if (bgImage.includes("qingdao")) {
        createVideoElement(containerElement, "https://oss.noname.casa/file/nonameoss/output.mp4");
    }

    if (bgImage.includes("sea.jpg")) {
        createVideoElement(containerElement, "https://oss.noname.casa/file/nonameoss/blog_index_video.mp4");
    }

    function createVideoElement(containerElement, videoUrl) {
        // 创建 video 元素
        var videoElement = document.createElement('video');
        // 设置 video 元素的属性
        videoElement.src = videoUrl;
        videoElement.controls = false;
        // 自动播放和循环播放
        videoElement.autoplay = true;
        videoElement.loop = true;
        videoElement.muted = true;
        videoElement.playsinline = true;
        videoElement.style.transform = 'all 0.3s ease-in-out';
        // 设置 video 元素的样式
        videoElement.style.position = 'absolute';
        videoElement.style.top = '0';
        videoElement.style.left = '0';
        videoElement.style.width = '100%';
        videoElement.style.height = '100%';
        //填充整个父元素，如果周围有空缺，就居中裁剪
        videoElement.style.objectFit = 'cover';
        // 将 video 元素添加到父元素的第一个位置
        containerElement.insertBefore(videoElement, containerElement.firstChild);
    }
})()