import { marked } from 'marked';
import React, { useEffect, useState } from 'react';
import { content } from '../../../public/content';
const TestMarked = () => {
  const [renderedContent, setRenderedContent] = useState('');
  useEffect(() => {
    setRenderedContent(marked(content.content));
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: renderedContent }} />
    </div>
  );
};

export default TestMarked;
