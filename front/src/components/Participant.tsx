import { useEffect, useRef, useState } from "react";
import Video from "twilio-video";

type ParticipantProps = {
  participant: any;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  videoProps?: React.HTMLAttributes<HTMLVideoElement>;
  isMuted?: boolean;
};

export const Participant: React.FunctionComponent<ParticipantProps> = ({
  participant,
  videoProps,
  containerProps,
  isMuted,
}) => {
  const [videoTracks, setVideoTracks] = useState<any[]>([]);
  const [audioTracks, setAudioTracks] = useState<any[]>([]);

  const videoRef = useRef<any>();
  const audioRef = useRef<any>();

  const trackpubsToTracks = (
    trackMap: Map<
      string,
      Video.VideoTrackPublication | Video.AudioTrackPublication
    >
  ) =>
    Array.from(trackMap.values())
      .map((publication: any) => publication.track)
      .filter((track) => track !== null);

  useEffect(() => {
    setVideoTracks(trackpubsToTracks(participant.videoTracks));
    setAudioTracks(trackpubsToTracks(participant.audioTracks));

    const trackSubscribed = (track: Video.RemoteTrack) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => [...videoTracks, track]);
      } else if (track.kind === "audio") {
        setAudioTracks((audioTracks) => [...audioTracks, track]);
      }
    };

    const trackUnsubscribed = (track: Video.RemoteTrack) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => videoTracks.filter((v) => v !== track));
      } else if (track.kind === "audio") {
        setAudioTracks((audioTracks) => audioTracks.filter((a) => a !== track));
      }
    };

    participant.on("trackSubscribed", trackSubscribed);
    participant.on("trackUnsubscribed", trackUnsubscribed);

    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
      participant.removeAllListeners();
    };
  }, [participant]);

  useEffect(() => {
    const videoTrack = videoTracks[0];
    if (videoTrack) {
      videoTrack.attach(videoRef.current);
      return () => {
        videoTrack.detach();
      };
    }
  }, [videoTracks]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack) {
      audioTrack.attach(audioRef.current);
      return () => {
        audioTrack.detach();
      };
    }
  }, [audioTracks]);

  useEffect(() => {
    audioRef.current.defaultMuted = isMuted;
    audioRef.current.muted = isMuted;
  }, [isMuted]);

  return (
    <div {...containerProps}>
      {/* <h3>{participant.identity}</h3> */}
      <video
        ref={videoRef}
        autoPlay
        {...videoProps}
        className={"rounded-xl " + videoProps?.className || ""}
      />
      <audio ref={audioRef} autoPlay />
    </div>
  );
};
