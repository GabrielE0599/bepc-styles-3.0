import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button';

interface CopyButtonProps {
  text: string;
  buttonText: string;
  buttonClass: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, buttonText, buttonClass }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <CopyToClipboard text={text} onCopy={handleCopyClick}>
      <div className="copy-button-container">
        <Button className={`w-full ${buttonClass}`}>
          <span>{copied ? 'Copied!' : buttonText}</span>
        </Button>
      </div>
    </CopyToClipboard>
  );
};

export default CopyButton;
