import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

function Room() {
    const { roomId } = useParams();

    const myMetting = async(element) =>{
const appID = 341707088;
const serverSecret = "e6f80f3bdf4c8e39ea185397584633b2";
const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),
"Amod"
);
const zp = ZegoUIKitPrebuilt.create(kitToken);
zp.joinRoom({
container: element,
scenario:{ mode:ZegoUIKitPrebuilt.VideoConference,
},
    });
};


  return (
    <div className='room'>
    <div ref={myMetting}/>
    </div>
  );
}

export default Room;