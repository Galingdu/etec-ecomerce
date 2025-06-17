import { useEffect, useState } from 'react';

const TypingTitle = () => {
  const fullText = "Shopping and department store.";
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const totalDuration = 10000; // 10 seconds
    const typeSpeed = totalDuration / (fullText.length * 2); // typing + deleting

    const handleTyping = () => {
      if (!isDeleting && index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else if (!isDeleting && index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
        return;
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
        return;
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  return (
    <div>
      {text}
    </div>
  );
};

export default TypingTitle;
