
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Test Camera</title>
        <style>
            body {
                background: black;
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
            }

            video {
                margin: 0;
                width: 100%;
                height: 100%;
                padding: 0;
            }
        </style>
    </head>

    <body>
        <video autoplay playsinline></video>

        <script>
            const constraints = window.constraints = {
                audio: false,
                video: {
                    width: {
                        min: 1280,
                        ideal: 1920,
                        max: 2560,
                    },
                    height: {
                        min: 720,
                        ideal: 1080,
                        max: 1440
                    },
                    facingMode: 'environment'
                }
            };

            async function main() {
                try {
                    var stream = await navigator.mediaDevices.getUserMedia(constraints);
                    var tracks = stream.getVideoTracks();
                    var video = document.querySelector('video');

                    video.srcObject = stream;
                }
                catch(e) {
                    console.error(e);
                }
            }

            document.addEventListener('DOMContentLoaded', main, false);
        </script>
    </body>
</html>
