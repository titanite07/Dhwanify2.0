import React from 'react';

interface TrackInfoProps {
  currentTrack: Track | null;
  toggleModal: () => void;
  DEFAULT_ALBUM_ART: string;
}

const TrackInfo: React.FC<TrackInfoProps> = ({ currentTrack, toggleModal, DEFAULT_ALBUM_ART }) => {
  return (
    <div className="track-info">
      <div className="track-image" onClick={toggleModal}>
        {currentTrack?.albumArt ? (
          <img 
            src={`data:${currentTrack.albumArt.format};base64,${currentTrack.albumArt.data.replace(/[^A-Za-z0-9+/=]/g, '')}`}
            alt="Album Art"
            className="album-img"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = DEFAULT_ALBUM_ART;
              target.onerror = null;
            }}
          />
        ) : (
          <img 
            src={DEFAULT_ALBUM_ART}
            alt="Default Album Art"
            className="album-img"
          />
        )}
      </div>
      <div className="track-details">
        <div className="track-name">
          <div className="track-name-inner">
            {currentTrack?.title || currentTrack?.name || 'No track selected'}
          </div>
        </div>
        <div className="track-artist" title={currentTrack?.artists?.join(', ') || currentTrack?.artist || ''}>
          {currentTrack?.artists ? (
            currentTrack.artists.length > 2 
              ? `${currentTrack.artists[0]}, ${currentTrack.artists[1]} & ${currentTrack.artists.length - 2} more`
              : currentTrack.artists.join(', ')
          ) : (
            currentTrack?.artist || ''
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackInfo;