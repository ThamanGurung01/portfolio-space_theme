import React, { useRef, useState } from 'react';
import {Mail, Copy, Check } from 'lucide-react';
import {motion} from 'framer-motion';
const CopyToClipboard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = 'tgurung519@gmail.com';
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleCopy = async () => {
    try {  
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
        timeoutRef.current = null;
      }, 1500);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
      <motion.button onClick={handleCopy} className="transition-all duration-300 copy_to_clipboard my-5"
      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Mail/> <span className='mx-2'>tgurung519@gmail.com</span> {copied ? <Check size={20} /> : <Copy size={20} />}
      </motion.button>
  );
};

export default CopyToClipboard;
