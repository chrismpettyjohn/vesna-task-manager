import {useState} from 'react';

export function useModalHook(): {isOpen: boolean; onToggle(): void} {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(_ => !_);
  };

  return {isOpen, onToggle};
}
