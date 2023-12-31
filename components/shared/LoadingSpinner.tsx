"use client"
import { Comment } from 'react-loader-spinner';
import React, { useState, useEffect } from 'react';
import { EMOJI, LOADING_TEXT } from '@/constants/loading-text';
import Image from 'next/image';

export default function LoadingSpinner() {
  const generateLoadingText = () => {
    const text = LOADING_TEXT[Math.floor(Math.random() * LOADING_TEXT.length)];
    const emojiString = EMOJI[Math.floor(Math.random() * EMOJI.length)];
    return `${emojiString} ${text}`;
  };

  // Get a random loading text initially
  const initialLoadingText = generateLoadingText();

  const [loadingState, setLoadingState] = useState(false);
  const [loadingText, setLoadingText] = useState(initialLoadingText);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingText(generateLoadingText());
    }, 2000);

    return () => clearInterval(loadingInterval);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='animate-spin'>
        <Image width={120} height={120} src="/assets/logo.svg" alt="Logo Spinner" />

      </div>


      <h2 className='text-white mt-9 text-heading2-semibold text-clip'>{loadingText} </h2>
    </div>
  )
}
