import React, {useRef, useEffect, useState} from 'react'
import photo from '../assets/icons/Camara.svg';
import ok from '../assets/icons/Ok circle.svg';
import '../scss/Photo.scss';



const TakeAPhoto = () => {
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false);

    const getVideo = () => {
        navigator
        .mediaDevices
        .getUserMedia({ 
            video: {
                width: '50%', 
            }
        })
        .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err => {
            console.error(err);
        })
    }

    const takePhoto = () => {
        const width = 414;
        const height = width / (16/9);

        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width = width;
        photo.height = height;

        let context = photo.getContext('2d');
        context.drawImage(video, 0,0, width, height);
        setHasPhoto(true);
    }

    const repeatPhoto = () => {
        let photo = photoRef.current;
        let context = photo.getContext('2d');

        context.clearRect(0,0, photo.width, photo.height);

        setHasPhoto(false);

    }

    useEffect(() => {
        getVideo()
    }, [videoRef])

    return (
        <>
            <div className='camera'>
                <video ref={videoRef}></video>
                <div className='buttons'>
                    <button onClick={takePhoto}>
                        <img src={photo} alt='Take'/>
                    </button>
                </div>
            </div>
            <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
            <canvas ref={photoRef}></canvas>
            {
                hasPhoto ?
                <div className='buttons'>
                    <img src={ok} alt="ok"/>
                    <h5>Bien</h5>
                    <p>¡Has tomado exitosamente tu foto!</p>
                        <button className='continue'>
                            Continuar
                        </button>
                        <button onClick={repeatPhoto}>
                            Volver a tomar
                        </button>
                    </div>
                : null
            }
        </div>
        </>
    )
}

export default TakeAPhoto
