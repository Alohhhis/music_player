import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <PlayerContainer>
            <VinylContainer isPlaying={isPlaying}>
                <Vinyl>
                    <Paw />
                </Vinyl>
            </VinylContainer>
            <Controls>
                <PlayPauseButton onClick={handlePlayPause}>
                    {isPlaying ? 'Пауза' : 'Играть'}
                </PlayPauseButton>
            </Controls>
        </PlayerContainer>
    );
};

export default Player;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const VinylContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #444;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ isPlaying }) => isPlaying ? rotate : 'none'} 3s linear infinite;
`;

const Vinyl = styled.div`
  width: 100px;
  height: 100px;
  background-color: #333;
  border-radius: 50%;
  position: relative;
`;

const Paw = styled.div`
  width: 50px;
  height: 50px;
  background-color: #777;
  position: absolute;
  top: 25%;
  left: 25%;
  border-radius: 50%;
`;

const Controls = styled.div`
  display: flex;
  gap: 10px;
`;

const PlayPauseButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #555;
  }
`;
