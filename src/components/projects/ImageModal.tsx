'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  allImages: string[];
}

export default function ImageModal({ isOpen, onClose, imageSrc, allImages = [] }: ImageModalProps) {
  const [currentImage, setCurrentImage] = useState(imageSrc || "");
  
  // Ensure allImages is an array, wrapped in useMemo to prevent dependency changes on every render
  const safeAllImages = useMemo(() => {
    return Array.isArray(allImages) ? allImages : [];
  }, [allImages]);
  
  // Find the index of the current image in the allImages array
  const currentIndex = safeAllImages.indexOf(currentImage);

  // Navigation functions wrapped in useCallback to prevent unnecessary re-renders
  const navigateNext = useCallback(() => {
    if (safeAllImages.length === 0) return;
    
    if (currentIndex < safeAllImages.length - 1) {
      setCurrentImage(safeAllImages[currentIndex + 1]);
    } else {
      // Loop back to the first image
      setCurrentImage(safeAllImages[0]);
    }
  }, [currentIndex, safeAllImages]);

  const navigatePrev = useCallback(() => {
    if (safeAllImages.length === 0) return;
    
    if (currentIndex > 0) {
      setCurrentImage(safeAllImages[currentIndex - 1]);
    } else {
      // Loop to the last image
      setCurrentImage(safeAllImages[safeAllImages.length - 1]);
    }
  }, [currentIndex, safeAllImages]);

  // Update current image when imageSrc prop changes
  useEffect(() => {
    if (imageSrc) {
      setCurrentImage(imageSrc);
    }
  }, [imageSrc]);

  // Handle keyboard events for navigation and closing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          navigatePrev();
          break;
        case 'ArrowRight':
          navigateNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Lock body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, navigateNext, navigatePrev, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            onClick={onClose}
            aria-label="Close modal"
          >
            <IoMdClose size={24} />
          </button>
          
          {/* Navigation buttons */}
          <button 
            className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            onClick={(e) => {
              e.stopPropagation();
              navigatePrev();
            }}
            aria-label="Previous image"
          >
            <FaChevronLeft size={20} />
          </button>
          
          <button 
            className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            onClick={(e) => {
              e.stopPropagation();
              navigateNext();
            }}
            aria-label="Next image"
          >
            <FaChevronRight size={20} />
          </button>
          
          {/* Image container */}
          <motion.div 
            className="relative w-[90vw] h-[90vh] max-w-7xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              {currentImage ? (
                <Image 
                  src={currentImage} 
                  alt="Image en plein écran" 
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-lg">
                  Chargement de l{`'`}image...
                </div>
              )}
            </div>
            
            {/* Image counter - only show if we have multiple images */}
            {safeAllImages.length > 0 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {currentIndex + 1} / {safeAllImages.length}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
