import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: 'Stay With Me',
    songArtist: 'Chanyeol',
    songSrc: './Assets/Songs/Stay With Me.Mp3',
 
  })

  //UseStates Variables
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
  const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');
  const [videoIndex, setVideoIndex] = useState(0)
  const [imageIndex , setImageIndex] = useState(0)
  

  

  const currentAudio = useRef()
  const getRandomIndex = (length) => Math.floor(Math.random() * length);
 


  const handleMusicProgressBar = (e)=>{
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
  }


  //Play Audio Function
  const handleAudioPlay = ()=>{
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true)
    }else{
      currentAudio.current.pause();
      setIsAudioPlaying(false)
    }
  }

  const musicAPI = [
    {
      songName: 'Stay With Me',
      songArtist: 'Chanyeol',
      songSrc: './Assets/Songs/Stay With Me.Mp3',
    
    },
    {
      songName: 'Pal',
      songArtist: 'Javed-Mohsin Arjith Shreya Ghoshal',
      songSrc: './Assets/Songs/Pal.mp3',

    },
    {
      songName: 'Adhey Nannu',
      songArtist: 'Karthik',
      songSrc: './Assets/Songs/Adhey Nannu.mp3',
      
    },
    {
      songName: 'Bones',
      songArtist: 'Imagine Dragons',
      songSrc: './Assets/Songs/Bones.mp3',

    },
    {
      songName: 'Despacito',
      songArtist: 'Luis Fonsi , Daddy Yankee',
      songSrc: './Assets/Songs/Despacito ft. Daddy Yankee.mp3',

    },
    {
      songName: 'Katchi Sera',
      songArtist: 'Sai Abhyankkar',
      songSrc: './Assets/Songs/Katchi Sera.mp3',

    },
   
    {
      songName: 'Hayirabba',
      songArtist: 'Unni Krishnan S.P Pallavi',
      songSrc: './Assets/Songs/Hayirabba.mp3',

    },
    {
      songName: 'Cheliya Cheliya',
      songArtist: 'KK , Suchitra',
      songSrc: './Assets/Songs/Cheliya Cheliya.mp3',

    },
    {
      songName: 'Otha sollaala',
      songArtist: 'GV Prakash , Velmurugan',
      songSrc: './Assets/Songs/Otha Sollaala.mp3',

    },
    {
      songName: 'Arcade',
      songArtist: 'Duncan Laurence',
      songSrc: './Assets/Songs/Arcade.mp3',

    },
    {
      songName: 'Vaa Vaathi',
      songArtist: 'GV Prakash , Shweta Mohan',
      songSrc: './Assets/Songs/Vaa Vaathi.mp3',

    },
    {
      songName: 'Unakku Thaan',
      songArtist: 'Santhosh , Dhavni Kailas',
      songSrc: './Assets/Songs/Unakku Thaan.mp3',

    },
    {
      songName: 'Senorita',
      songArtist: 'Shawn Mendes , Camila Cabello',
      songSrc: './Assets/Songs/Senorita.mp3',

    },
    {
      songName: 'Ye Raatein Ye Mausam',
      songArtist: 'Sanam , Simran',
      songSrc: './Assets/Songs/Ye Raatein Ye Mausam.mp3',

    },
    {
      songName: 'Naina Milayke',
      songArtist: 'Dhavani Bhanushali',
      songSrc: './Assets/Songs/Naina Milayke.mp3',

    },
    {
      songName: 'Why This Kolaveri Di',
      songArtist: 'Dhanush',
      songSrc: './Assets/Songs/Why This Kolaveri Di.mp3',

    },

    {
      songName: 'Sugar n Brownies',
      songArtist: 'Dharia',
      songSrc: './assets/Songs/Sugar n Brownies.mp3',

    },
    {
      songName: 'Po Nee Po',
      songArtist: 'Anirudh Ravichander , Mohit Chauhan',
      songSrc: './Assets/Songs/Po Nee Po.mp3',

    },
    {
      songName: 'Some by',
      songArtist: 'Bol4',
      songSrc: './Assets/Songs/some by.mp3',

    },
    {
      songName: 'Boy With Love',
      songArtist: 'Ft Halsey',
      songSrc: './Assets/Songs/Boy With Love.mp3',

    },
    {
      songName: 'Criminal',
      songArtist: 'Britney Spears',
      songSrc: './Assets/Songs/Britney Spears - Criminal.mp3',

    },
    {
      songName: 'Dynamite',
      songArtist: 'BTS',
      songSrc: './Assets/Songs/BTS-Dynamite.mp3',

    },
    {
      songName: 'BUjji Bangaram',
      songArtist: 'Nakash Aziz , Deepthi Parthasarathy',
      songSrc: './Assets/Songs/Bujji Bangaram.mp3',

    },

    {
      songName: 'Adore You',
      songArtist: 'Harry Styles',
      songSrc: './Assets/Songs/Harry Styles - Adore You.mp3',

    },

    {
      songName: 'Jennifer Lopez',
      songArtist: 'Benny Dayal , Priya',
      songSrc: './Assets/Songs/Jennifer Lopez.mp3',

    },
    {
      songName: 'Zoom',
      songArtist: 'Jessi',
      songSrc: './Assets/Songs/Zoom.mp3',

    },
    {
      songName: 'Kallolam',
      songArtist: 'Anurag KUlakarni',
      songSrc: './Assets/Songs/Kallolam.mp3',

    },
    {
      songName: 'Kaun Tujhe',
      songArtist: 'Palak Munchal',
      songSrc: './Assets/Songs/Kaun Tujhe.mp3',

    },
    {
      songName: 'My Dear Markandeya',
      songArtist: 'Revanth , Snigdha Sharma',
      songSrc: './Assets/Songs/My Dear Markandeya.mp3',

    },
    {
      songName: 'Naa Kosam',
      songArtist: 'Sid Sriram',
      songSrc: './Assets/Songs/Naa Kosam.mp3',

    },
    {
      songName: 'Steal my Girl',
      songArtist: 'One Direction',
      songSrc: './Assets/Songs/One Direction - Steal My Girl.mp3',

    },
    {
      songName: 'PSY-Gangnam Style',
      songArtist: 'PSY',
      songSrc: './Assets/Songs/PSY - Gangnam STyle.mp3',

    },
    {
      songName: 'That That',
      songArtist: 'PSY',
      songSrc: './assets/Songs/PSY - That That.mp3',

    },
    {
      songName: 'Some',
      songArtist: 'Bol4',
      songSrc: './Assets/Songs/some by.mp3',

    },
    {
      songName: 'FRI(END)S',
      songArtist: 'V',
      songSrc: './assets/Songs/V – FRI(END)S.mp3',

    },
    {
      songName: 'Waka Waka',
      songArtist: 'Shaikira',
      songSrc: './Assets/Songs/Waka Waka.mp3',

    },

    

  ]

  const handleNextSong = () => {
    const randomIndex = getRandomIndex(musicAPI.length);
    updateCurrentMusicDetails(randomIndex);
    handleChangeBackground();
    handleChangeImage();
  };

  const handlePrevSong = ()=>{
    const randomIndex = getRandomIndex(musicAPI.length);
    updateCurrentMusicDetails(randomIndex);
    handleChangeBackground();
    handleChangeImage();
  }

  const updateCurrentMusicDetails = (number)=>{
    let musicObject = musicAPI[number];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
      songName: musicObject.songName,
      songArtist: musicObject.songArtist,
      songSrc: musicObject.songSrc,
      songAvatar: musicObject.songAvatar
    })
    setIsAudioPlaying(true);
  }

  const handleAudioUpdate = ()=>{
    //Input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes <10 ? `0${minutes}` : minutes} : ${seconds <10 ? `0${seconds}` : seconds}`;
    setMusicTotalLength(musicTotalLength0);

    //Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin <10 ? `0${currentMin}` : currentMin} : ${currentSec <10 ? `0${currentSec}` : currentSec}`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
    setAudioProgress(isNaN(progress)? 0 : progress)
  }


  const vidArray = ['./Assets/Videos/video1.mp4',
    './Assets/Videos/video2.mp4',
    './Assets/Videos/video3.mp4',
    './Assets/Videos/video4.mp4',
    './Assets/Videos/video5.mp4',
    './Assets/Videos/video6.mp4',
    './Assets/Videos/video7.mp4',
    './Assets/Videos/video8.mp4',
    './Assets/Videos/video9.mp4',
    './Assets/Videos/video10.mp4',
  ];

  const handleChangeBackground = ()=>{
    if (videoIndex >= vidArray.length - 1) {
      setVideoIndex(0);
    }else{
      setVideoIndex(videoIndex + 1)
    }
  }
  
  const imgArray = ['./Assets/Images/Image1.jpg',
    './Assets/Images/Image2.jpg',
    './Assets/Images/Image3.jpg',
    './Assets/Images/Image4.jpg',
    './Assets/Images/Image5.jpg',
    './Assets/Images/Image6.jpg',
    './Assets/Images/Image7.jpg',
    './Assets/Images/Image8.jpg',
    './Assets/Images/Image9.jpg',
    './Assets/Images/Image10.jpg',
    './Assets/Images/Image11.jpg'
  ];

  const handleChangeImage = ()=>{
    if (imageIndex >= imgArray.length - 1) {
      setImageIndex(0);
    }else{
      setImageIndex(imageIndex + 1)
    }
  }


  return (
    <>
    <div className="container" >



    <audio src='./Assets/Songs/Stay With Me.mp3' ref={currentAudio} onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate}></audio>
     
      <video src={vidArray[videoIndex]} loop muted autoPlay className='backgroundVideo' onClick={handleChangeBackground} alt= "background video"></video>
      <div className="blackScreen"></div>
      <div className="music-Container">
        <p className='musicPlayer'>Musicana</p>
        <p className='music-Head-Name'>{currentMusicDetails.songName}</p>
        <p className='music-Artist-Name'>{currentMusicDetails.songArtist}</p>
        <img src={imgArray[imageIndex]} onClick={handleChangeImage} alt="song Avatar" id='songAvatar'/>
        <div className="musicTimerDiv">
          <p className='musicCurrentTime'>{musicCurrentTime}</p>
          <p className='musicTotalLenght'>{musicTotalLength}</p>
        </div>
        <input type="range" name="musicProgressBar" className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar} />
        <div className="musicControlers">
          <i className='fa-solid fa-backward musicControler' onClick={handlePrevSong}></i>
          <i className={`fa-solid ${isAudioPlaying? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
          <i className='fa-solid fa-forward musicControler' onClick={handleNextSong}></i>
        </div>
      </div>
      <div className="changeBackBtn" onClick={handleChangeBackground}>
        Change Background
      </div>
      <a href="https://portfolio-itsmefayaz.vercel.app/" title='Fayaz' className='Fayaz'>
        
        <p> Made by ItsMeFayaz</p>
      </a>
    </div>
    </>
  );
}

export default App;
