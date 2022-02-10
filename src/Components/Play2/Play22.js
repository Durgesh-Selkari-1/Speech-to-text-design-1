// import React, { useEffect, useState, useRef } from "react";
// import WaveSurfer from "wavesurfer.js";
// import TimeLine from "wavesurfer.js/dist/plugin/wavesurfer.timeline";
// import MyTimeLine from "./wavesurfer.markers";
// import { useKeyPress } from "./keyPressHooks";
// import SoundTouch from "./soundtouch";

// const ZOOM_RANGE = {
//   min: 20,
//   max: 200
// };

// export default function(args) {
//   const waveSurferRef = useRef();
//   const soundTouchObjRef = useRef();
//   const [startLocation, setStartLocation] = useState(null);
//   const [zoom, setZoom] = useState(50);
//   const [speed, setSpeed] = useState(1);
//   const [pitchShift, setPitchShift] = useState(0);
//   const [surferReady, setSurferReady] = useState(false);
//   const playPressed = useKeyPress(" ");
//   const beatPressed = useKeyPress("b");

//   useEffect(() => {
//     if (!waveSurferRef.current) {
//       waveSurferRef.current = WaveSurfer.create({
//         container: "#waveform",
//         waveColor: "violet",
//         progressColor: "violet",
//         fillParent: true,
//         plugins: [
//           MyTimeLine.create({
//             container: "#timeline"
//           })
//         ]
//       });
//     }
//   }, [waveSurferRef]);

//   useEffect(() => {
//     const waveSurfer = waveSurferRef.current;
//     if (waveSurfer) waveSurfer.load("sample.mp3");
//   }, [waveSurferRef]);

//   useEffect(() => {
//     const waveSurfer = waveSurferRef.current;
//     if (playPressed) {
//       if (waveSurfer.isPlaying()) {
//         waveSurfer.pause();
//       } else {
//         waveSurfer.play(startLocation);
//       }
//     }
//   }, [playPressed, startLocation]);

//   useEffect(() => {
//     console.log("registering ready play etc.");
//     const waveSurfer = waveSurferRef.current;
//     if (!waveSurfer) return;

//     let soundTouch = null;
//     let source = null;
//     waveSurfer.on("ready", () => {
//       soundTouch = new SoundTouch.SoundTouch(waveSurfer.backend.ac.sampleRate);
//       let buffer = waveSurfer.backend.buffer;
//       let channels = buffer.numberOfChannels;
//       let l = buffer.getChannelData(0);
//       let r = channels > 1 ? buffer.getChannelData(1) : l;
//       let length = buffer.length;
//       let seekingPos = null;
//       let seekingDiff = 0;
//       source = {
//         extract: function(target, numFrames, position) {
//           if (seekingPos != null) {
//             seekingDiff = seekingPos - position;
//             seekingPos = null;
//           }

//           position += seekingDiff;

//           for (let i = 0; i < numFrames; i++) {
//             target[i * 2] = l[i + position];
//             target[i * 2 + 1] = r[i + position];
//           }

//           return Math.min(numFrames, length - position);
//         }
//       };
//       soundTouchObjRef.current = {
//         soundTouch,
//         source,
//         seekingPos,
//         length
//       };
//       console.log("setting soundTouchObjRef", soundTouchObjRef);

//       console.log("set surfer ready");
//       setSurferReady(true);
//     });

//     // document.getElementById("waveform").addEventListener("wheel", e => {
//     //   e.stopPropagation();
//     //   let newZoom = zoom + e.deltaY;
//     //   if (newZoom < ZOOM_RANGE.min) newZoom = ZOOM_RANGE.min;
//     //   if (newZoom > ZOOM_RANGE.max) newZoom = ZOOM_RANGE.max;
//     //   setZoom(newZoom);
//     // });

//     return () => {
//       console.log("destory ready");
//       if (waveSurfer) {
//         waveSurfer.un("ready");
//       }
//     };
//   }, [waveSurferRef, pitchShift]);

//   useEffect(() => {
//     console.log("register error");
//     const waveSurfer = waveSurferRef.current;
//     waveSurfer.on("error", function(e) {
//       console.warn(e);
//       //      waveSurfer.play();
//     });
//   }, [waveSurferRef]);

//   useEffect(() => {
//     console.log(
//       "registering play",
//       waveSurferRef,
//       soundTouchObjRef,
//       pitchShift
//     );
//     const waveSurfer = waveSurferRef.current;
//     const soundTouchObj = soundTouchObjRef.current;
//     console.log(waveSurferRef, soundTouchObjRef);
//     if (!waveSurfer) return;
//     waveSurfer.on("play", function(e) {
//       console.log("play");
//       soundTouchObj.seekingPos = ~~(
//         waveSurfer.backend.getPlayedPercents() * soundTouchObj.length
//       );

//       soundTouchObj.soundTouch.tempo = waveSurfer.getPlaybackRate();

//       let filter = new SoundTouch.SimpleFilter(
//         soundTouchObj.source,
//         soundTouchObj.soundTouch
//       );
//       if (pitchShift !== 0) {
//         console.log(soundTouchObj.soundTouch);
//         soundTouchObj.soundTouch.pitchSemitones = pitchShift;
//         console.log("setting pitch to", pitchShift, "semitones");
//       }

//       soundTouchObj.soundtouchNode = SoundTouch.getWebAudioNode(
//         waveSurfer.backend.ac,
//         filter
//       );

//       console.log("attaching soundtouch filter");
//       waveSurfer.backend.setFilter(soundTouchObj.soundtouchNode);
//     });
//     return () => {
//       waveSurfer.un("play");
//     };
//   }, [soundTouchObjRef, waveSurferRef]);

//   useEffect(() => {
//     const soundTouchObj = soundTouchObjRef.current;
//     const waveSurfer = waveSurferRef.current;
//     console.log("register pause");
//     waveSurfer.on("pause", function() {
//       console.log("soundTouchObj", soundTouchObjRef);
//       console.log("pause", soundTouchObj && soundTouchObj.soundtouchNode);
//       soundTouchObj &&
//         soundTouchObj.soundtouchNode &&
//         soundTouchObj.soundtouchNode.disconnect();
//     });
//     return () => {
//       console.log("remove pause");
//       waveSurfer.un("pause");
//     };
//   }, [waveSurferRef, soundTouchObjRef]);

//   useEffect(() => {
//     const waveSurfer = waveSurferRef.current;
//     const soundTouchObj = soundTouchObjRef.current;
//     waveSurfer.on("seek", function(e, e1) {
//       console.log("seek", waveSurfer.getCurrentTime(), e, e1);
//       setStartLocation(waveSurfer.getCurrentTime());
//       if (soundTouchObj)
//         soundTouchObj.seekingPos = ~~(
//           waveSurfer.backend.getPlayedPercents() * soundTouchObj.length
//         );
//     });
//   }, [waveSurferRef, soundTouchObjRef]);

//   useEffect(() => {
//     const waveSurfer = waveSurferRef.current;
//     if (waveSurfer) waveSurfer.zoom(zoom);
//   }, [waveSurferRef, zoom]);

//   useEffect(() => {
//     const waveSurfer = waveSurferRef.current;
//     if (waveSurfer) waveSurfer.setPlaybackRate(speed);
//   });

//   // useEffect(() => {
//   //   if (beatPressed) {
//   //     timeline.params.markers.push({
//   //       when: waveSurfer.getCurrentTime(),
//   //       type: "BEAT"
//   //     });
//   //     waveSurfer.zoom(zoom);
//   //   }
//   // }, [beatPressed]);

//   const waveSurfer = waveSurferRef.current;
//   return (
//     <div>
//       {surferReady ? "" : <div>Loading...</div>}
//       <div>
//         <div id="timeline"></div>
//         <div id="waveform"></div>
//       </div>
//       <div style={{ display: "flex", justifyContent: "space-around" }}>
//         <div>Position: {waveSurfer && waveSurfer.getCurrentTime()}</div>
//         <div id="speed">
//           <div>
//             speed 0
//             <input
//               type="range"
//               value={speed}
//               onChange={e => setSpeed(e.target.value)}
//               step={0.01}
//               min={0}
//               max={2}
//             />
//             2
//           </div>
//           <div>{speed}</div>
//         </div>
//         <div>
//           <div>
//             pitch shift(semitones) -
//             <input
//               type="range"
//               value={pitchShift}
//               onChange={e => setPitchShift(e.target.value)}
//               step={1}
//               min={-12}
//               max={12}
//             />
//           </div>
//           <p>{pitchShift}</p>
//         </div>

//         <div id="zoom">
//           zoom
//           <input
//             type="range"
//             value={zoom}
//             onChange={e => setZoom(e.target.value)}
//             min={ZOOM_RANGE.min}
//             max={ZOOM_RANGE.max}
//             step="10"
//           ></input>
//         </div>
//       </div>
//     </div>
//   );
// }